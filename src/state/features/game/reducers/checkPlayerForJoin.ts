import { ExtraReducersApply } from '@src/state/types'
import { checkPlayerToJoin } from '../thunks/checkPlayerToJoin'
import { GameState } from '../types'

const extraReducer: ExtraReducersApply<GameState> = (builder) =>
  builder.addCase(checkPlayerToJoin.fulfilled, (state, action) => {
    if (state.data && action.payload) {
      state.data.status = 'inProgress'
    }
  })

export default extraReducer
