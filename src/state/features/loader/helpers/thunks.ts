import { AsyncThunk } from '@reduxjs/toolkit'
import { ExtraReducersApply } from '@src/state/types'
import { LoaderState } from '../types'

export function createReducers<T extends AsyncThunk<any, any, any>>(
  thunk: T
): ExtraReducersApply<LoaderState> {
  return (builder) =>
    builder
      .addCase(thunk.pending, (state) => {
        state.action = thunk.typePrefix
      })
      .addCase(thunk.fulfilled, (state) => {
        state.action = null
      })
      .addCase(thunk.rejected, (state) => {
        state.action = null
      })
}
