import { ExtraReducersApply } from '@src/state/types'
import { joinGame } from '../thunks/joinGame'
import { GameState } from '../types'

const extraReducer: ExtraReducersApply<GameState> = (builder) =>
  builder.addCase(joinGame.fulfilled, (state, action) => {
    let status: NonNullable<GameState['data']>['status'] = 'inProgress'
    if (action.payload.sessionIsFull) {
      status = 'inProgress'
      if (action.payload.madeMove !== null) {
        status = 'waitFinish'
      }
    }
    state.data = {
      id: action.meta.arg.gameId,
      status,
      madeMove: action.payload.madeMove,
      playerNum: action.payload.playerNum,
    }
  })

export default extraReducer
