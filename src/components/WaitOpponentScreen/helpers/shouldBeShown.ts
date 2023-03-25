import config from '@src/config'
import { RootState } from '@src/state/store'

export function shouldBeShown(state: RootState): boolean {
  return (
    state.wallet.data.status === 'initialized' &&
    state.game.data != null &&
    state.game.data.status === 'waitPlayer' &&
    config.chains[state.wallet.data.chainId] != null
  )
}
