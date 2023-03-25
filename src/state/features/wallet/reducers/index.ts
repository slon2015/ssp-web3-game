import { ExtraReducersApply } from '@src/state/types'
import { WalletState } from '@state/features/wallet/types'

export const extraReducers: Array<ExtraReducersApply<WalletState>> = []

export { connectWallet } from './connectWallet'
export { loadWallet } from './loadWallet'
export { walletUnavailable } from './walletUnavailable'
