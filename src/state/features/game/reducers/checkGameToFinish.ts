import { ExtraReducersApply } from '@src/state/types'
import { checkGameToFinish } from '../thunks/checkGameToFinish'
import { GameState } from '../types'

const extraReducer: ExtraReducersApply<GameState> = (builder) =>
  builder.addCase(checkGameToFinish.fulfilled, (state, action) => {
    if (state.data && action.payload.result !== 'IN_PROGRESS') {
      if (action.payload.result === 'PAT') {
        state.data.status = 'finishPat'
      } else if (action.payload.result === 'OPPONENT') {
        state.data.status = 'finishLost'
      } else {
        state.data.status = 'finishWin'
      }
    }
  })

export default extraReducer
