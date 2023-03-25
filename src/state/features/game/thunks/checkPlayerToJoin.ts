import { BackendSmartContract__factory } from '@contracts/factories'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { providers } from 'ethers'
import { WaitPlayerJoinRequest } from './types'

export const checkPlayerToJoin = createAsyncThunk(
  'game/checkPlayerJoin',
  async (action: WaitPlayerJoinRequest): Promise<boolean> => {
    const provider = new providers.Web3Provider(window.ethereum)
    const contract = BackendSmartContract__factory.connect(
      action.contractAddress,
      provider.getSigner()
    )

    const lastBlockNumber = await provider.getBlockNumber()

    const filter = contract.filters.PlayerJoined(action.gameId)

    const events = await contract.queryFilter(filter, lastBlockNumber - 2000)
    return events.length === 2
  }
)
