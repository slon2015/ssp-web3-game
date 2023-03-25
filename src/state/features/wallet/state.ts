import { createSlice } from '@reduxjs/toolkit'
import { WalletState } from '@state/features/wallet/types'
import {
  extraReducers,
  connectWallet,
  loadWallet,
  walletUnavailable,
} from '@state/features/wallet/reducers'

const initialState: WalletState = {
  data: {
    status: 'none',
  },
}

const slice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    connectWallet,
    loadWallet,
    walletUnavailable,
  },
  extraReducers(builder) {
    extraReducers.forEach((extraReducer) => extraReducer(builder))
  },
})

export default slice.reducer

export const actions = slice.actions
