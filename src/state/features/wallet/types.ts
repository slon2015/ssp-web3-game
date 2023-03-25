export type InitialaizedWalletState = {
  status: 'initialized'
  chainId: number
  address: string
}

export type MetamaskWalletInfo = {
  chainId: number
  address: string
}

export type WalletState = {
  data:
    | {
        status: 'none' | 'unavailable' | 'loading'
      }
    | InitialaizedWalletState
}

export function isWalletStateInitilized(
  state: WalletState['data']
): state is InitialaizedWalletState {
  return state.status === 'initialized'
}
