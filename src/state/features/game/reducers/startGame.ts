import { ExtraReducersApply } from '@src/state/types'
import { startGame } from '../thunks/startGame'
import { GameState } from '../types'

const extraReducer: ExtraReducersApply<GameState> = (builder) =>
  builder.addCase(startGame.fulfilled, (state, action) => {
    state.data = {
      id: action.payload.gameId,
      status: 'waitPlayer',
      madeMove: null,
      playerNum: 1,
    }
  })

export default extraReducer
