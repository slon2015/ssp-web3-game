import { createSlice } from '@reduxjs/toolkit'
import { LoaderState } from '@state/features/loader/types'
import { extraReducers } from '@state/features/loader/reducers'

const initialState: LoaderState = {
  action: null,
}

const slice = createSlice({
  name: 'loader',
  initialState,
  reducers: {},
  extraReducers(builder) {
    extraReducers.forEach((extraReducer) => extraReducer(builder))
  },
})

export default slice.reducer

export const actions = slice.actions
