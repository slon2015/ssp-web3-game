import reducer, { actions } from './state'

export default reducer
export const { connectWallet, loadWallet, walletUnavailable } = actions
export { isWalletStateInitilized } from './types'
export type { MetamaskWalletInfo } from './types'
