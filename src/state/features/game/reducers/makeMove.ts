import { ExtraReducersApply } from '@src/state/types'
import { makeMove } from '../thunks/makeMove'
import { GameState } from '../types'

const extraReducer: ExtraReducersApply<GameState> = (builder) =>
  builder.addCase(makeMove.fulfilled, (state, action) => {
    if (state.data) {
      state.data.status = 'waitFinish'
      state.data.madeMove = action.meta.arg.move
    }
  })

export default extraReducer
