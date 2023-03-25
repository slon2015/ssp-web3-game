import { ActionReducerMapBuilder } from '@reduxjs/toolkit'

export type ExtraReducersApply<S> = (
  builder: ActionReducerMapBuilder<S>
) => ActionReducerMapBuilder<S>
