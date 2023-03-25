import { WalletState } from '@state/features/wallet/types'

export function walletUnavailable(state: WalletState) {
  state.data = {
    status: 'unavailable',
  }
}
