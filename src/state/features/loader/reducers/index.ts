import { createReducers } from '../helpers/thunks'
import { joinGame, startGame, makeMove } from '@state/features/game'

export const extraReducers = [joinGame, startGame, makeMove].map((thunk) =>
  createReducers(thunk)
)
