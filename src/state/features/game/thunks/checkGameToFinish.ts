import { BackendSmartContract__factory } from '@contracts/factories'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { providers } from 'ethers'
import { CheckGameToFinishRequest, CheckGameToFinishResponse } from './types'

export const checkGameToFinish = createAsyncThunk<
  CheckGameToFinishResponse,
  CheckGameToFinishRequest
>('game/checkGameToFinish', async (action) => {
  const provider = new providers.Web3Provider(window.ethereum)
  const contract = BackendSmartContract__factory.connect(
    action.contractAddress,
    provider.getSigner()
  )

  const lastBlockNumber = await provider.getBlockNumber()

  const filter = contract.filters.GameFinished(action.gameId)

  const events = await contract.queryFilter(filter, lastBlockNumber - 2000)
  if (events.length > 0) {
    const finishEvent = events[0]
    if (finishEvent.args[1].eq(0)) {
      return {
        result: 'PAT',
      }
    } else if (finishEvent.args[1].eq(1) || finishEvent.args[1].eq(2)) {
      return {
        result:
          action.playerNum === finishEvent.args[1].toNumber()
            ? 'YOU'
            : 'OPPONENT',
      }
    } else {
      throw new Error('Invalid game result')
    }
  } else {
    return {
      result: 'IN_PROGRESS',
    }
  }
})
