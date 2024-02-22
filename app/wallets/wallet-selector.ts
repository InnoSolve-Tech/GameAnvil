import { create as createStore, StateCreator } from 'zustand';
import { distinctUntilChanged, map } from 'rxjs';
import { providers } from 'near-api-js';
import { NetworkId, setupWalletSelector } from '@near-wallet-selector/core';
import { setupModal } from '@near-wallet-selector/modal-ui';
import { setupMyNearWallet } from '@near-wallet-selector/my-near-wallet';
import { setupHereWallet } from '@near-wallet-selector/here-wallet';

import { useEffect, useState } from 'react';

interface WalletState {
  signedAccountId: string;
  logOut?: () => void;
  logIn?: () => void;
  selector?: any; // Update the type as per the actual type
  viewMethod?: (contractId: string, method: string, args?: any) => Promise<any>;
  callMethod?: (
    contractId: string,
    method: string,
    args?: any,
    gas?: string,
    deposit?: number
  ) => Promise<any>;
  setLogActions: ({ logOut, logIn }: { logOut: () => void; logIn: () => void }) => void;
  setAuth: ({ signedAccountId }: { signedAccountId: string }) => void;
  setMethods: ({
    viewMethod,
    callMethod,
  }: {
    viewMethod: (contractId: string, method: string, args?: any) => Promise<any>;
    callMethod: (
      contractId: string,
      method: string,
      args?: any,
      gas?: string,
      deposit?: number
    ) => Promise<any>;
  }) => void;
  setStoreSelector: ({ selector }: { selector: any }) => void; // Update the type as per the actual type
}

export const useWallet = createStore<WalletState>((set) => ({
  signedAccountId: '',
  logOut: undefined,
  logIn: undefined,
  selector: undefined,
  viewMethod: undefined,
  callMethod: undefined,
  setLogActions: ({ logOut, logIn }) => set({ logOut, logIn }),
  setAuth: ({ signedAccountId }) => set({ signedAccountId }),
  setMethods: ({ viewMethod, callMethod }) => set({ viewMethod, callMethod }),
  setStoreSelector: ({ selector }) => set({ selector }),
}));

export function useInitWallet({ createAccessKeyFor, networkId }: { createAccessKeyFor: string; networkId: NetworkId }) {
  const setAuth = useWallet.getState().setAuth;
  const setLogActions = useWallet.getState().setLogActions;
  const setMethods = useWallet.getState().setMethods;
  const setStoreSelector = useWallet.getState().setStoreSelector;
  const [selector, setSelector] = useState<any>(undefined); // Update the type as per the actual type

  useEffect(() => {
    const selector = setupWalletSelector({
      network: networkId,
      modules: [setupMyNearWallet(), setupHereWallet()],
    });

    setSelector(selector);
    setStoreSelector({ selector });
  }, [networkId, setStoreSelector]);

  useEffect(() => {
    if (!selector) return;

    selector.then((walletSelector: any) => {
      const accounts = walletSelector.store.getState().accounts;
      const signedAccountId =
        accounts.find((account: any) => account.active)?.accountId || '';
      setAuth({ signedAccountId });

      walletSelector.store.observable
        .pipe(
          map((state: any) => state.accounts),
          distinctUntilChanged()
        )
        .subscribe((accounts: any) => {
          const signedAccountId =
            accounts.find((account: any) => account.active)?.accountId || '';
          setAuth({ signedAccountId });
        });
    });
  }, [selector, setAuth]);

  useEffect(() => {
    if (!selector) return;

    const logOut = async () => {
      const wallet = await (await selector).wallet();
      await wallet.signOut();
      setAuth({ signedAccountId: '' });
    };

    const logIn = async () => {
      const modal = setupModal(await selector, { contractId: createAccessKeyFor });
      modal.show();
    };

    setLogActions({ logOut, logIn });
  }, [createAccessKeyFor, selector, setAuth, setLogActions]);

  useEffect(() => {
    if (!selector) return;

    const viewMethod = async (contractId: string, method: string, args: any = {}) => {
      const { network } = (await selector).options;
      const provider = new providers.JsonRpcProvider({ url: network.nodeUrl });

      let res = await provider.query({
        request_type: 'call_function',
        account_id: contractId,
        method_name: method,
        args_base64: Buffer.from(JSON.stringify(args)).toString('base64'),
        finality: 'optimistic',
      });
      return (res).toString();
    };

    const callMethod = async (
      contractId: string,
      method: string,
      args: any = {},
      gas: string = '30000000000000',
      deposit: number = 0
    ) => {
      const wallet = await (await selector).wallet();

      const outcome = await wallet.signAndSendTransaction({
        receiverId: contractId,
        actions: [
          {
            type: 'FunctionCall',
            params: {
              methodName: method,
              args,
              gas,
              deposit,
            },
          },
        ],
      });

      return providers.getTransactionLastResult(outcome);
    };

    setMethods({ viewMethod, callMethod });
  }, [selector, setMethods]);
}
