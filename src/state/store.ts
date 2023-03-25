import { configureStore, ThunkDispatch, AnyAction } from '@reduxjs/toolkit'
import wallet from '@state/features/wallet'
import game from '@state/features/game'
import loader from '@state/features/loader'
import { useDispatch as useDispatchHook } from 'react-redux'

export const store = configureStore({
  reducer: {
    wallet,
    game,
    loader,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, void, AnyAction>

export const useDispatch = () => useDispatchHook<AppDispatch>()
