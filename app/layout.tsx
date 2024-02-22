'use client';

import '@near-wallet-selector/modal-ui/styles.css';
import { NetworkId } from './config';
import ResponsiveAppBar from './components/homeNavbar';
import { useInitWallet } from './wallets/wallet-selector';
import React from 'react';

export default function RootLayout({ children }) {
  useInitWallet({ createAccessKeyFor: '', networkId: NetworkId });
  return (
    <html lang="en">
      <body>
        <ResponsiveAppBar/>
        {children}
      </body>
    </html>
  );
}
