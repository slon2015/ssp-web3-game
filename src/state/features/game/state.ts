import { createSlice } from '@reduxjs/toolkit'
import { GameState } from '@state/features/game/types'
import { extraReducers } from '@state/features/game/reducers'

const initialState: GameState = {
  data: null,
}

const slice = createSlice({
  name: 'game',
  initialState,
  reducers: {},
  extraReducers(builder) {
    extraReducers.forEach((extraReducer) => extraReducer(builder))
  },
})

export default slice.reducer

export const actions = slice.actions
