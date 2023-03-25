import { BackendSmartContract__factory } from '@contracts/factories'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { providers } from 'ethers'
import { moveToOnchain } from '../helpers/move'
import { MakeMoveRequest } from './types'

export const makeMove = createAsyncThunk<void, MakeMoveRequest>(
  'game/makeMove',
  async (action) => {
    const contract = BackendSmartContract__factory.connect(
      action.contractAddress,
      new providers.Web3Provider(window.ethereum).getSigner()
    )

    const tx = await contract.makeMove(
      action.gameId,
      moveToOnchain(action.move)
    )
    await tx.wait()
  }
)
