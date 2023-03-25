import reducer from './state'

export default reducer
export { Move } from './types'
export type { GameState } from './types'
export {
  checkGameToFinish,
  checkPlayerToJoin,
  joinGame,
  makeMove,
  startGame,
} from '@state/features/game/thunks'
