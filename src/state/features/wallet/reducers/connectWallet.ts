import { PayloadAction } from '@reduxjs/toolkit'
import { MetamaskWalletInfo, WalletState } from '@state/features/wallet/types'

export function connectWallet(
  state: WalletState,
  action: PayloadAction<MetamaskWalletInfo>
) {
  const { address, chainId } = action.payload
  state.data = {
    status: 'initialized',
    address,
    chainId,
  }
}
