import { BackendSmartContract__factory } from '@contracts/factories'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { BigNumber, providers } from 'ethers'
import { randomBytes } from 'ethers/lib/utils'
import { StartGameRequest, StartGameResponse } from './types'

const DEFAULT_BET = BigNumber.from('100000000000000')

export const startGame = createAsyncThunk(
  'game/start',
  async (action: StartGameRequest): Promise<StartGameResponse> => {
    const contract = BackendSmartContract__factory.connect(
      action.contractAddress,
      new providers.Web3Provider(window.ethereum).getSigner()
    )

    const sessionId = BigNumber.from(randomBytes(32))

    const tx = await contract.startSession(sessionId, { value: DEFAULT_BET })
    await tx.wait()

    return {
      gameId: sessionId.toHexString(),
    }
  }
)
