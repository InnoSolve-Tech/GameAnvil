import Link from 'next/link'
import { FC } from 'react'
import { HiOutlineExternalLink } from 'react-icons/hi'
import 'twin.macro'
import Image from 'next/image'
import styles from '../../styles/HomeTopBar.module.css'

export const HomeTopBar: FC = () => {
  return (
    <div className={styles.homeTopBar}>
      <div className={styles.leftItems}>
        <div className="item">
          <div className={styles.flexContainer}>
            <Image src="/icons/Storefront.png" alt="NFT Marketplace Logo" width={12} height={12} />
            <span className={styles.text}>NFT Marketplace</span>
          </div>
        </div>
      </div>
      <div className={styles.rightItems}>
        <div className="item">Marketplace</div>
        <div className="item">Rankings</div>
        <div className="item">Connect a Wallet</div>
        <div className="item1">Sign Up</div>
      </div>
    </div>
  )
}
