import { WalletState } from '@state/features/wallet/types'

export function loadWallet(state: WalletState) {
  state.data = {
    status: 'loading',
  }
}
