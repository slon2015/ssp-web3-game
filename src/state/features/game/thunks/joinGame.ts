import { BackendSmartContract__factory } from '@contracts/factories'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { providers } from 'ethers'
import { onchainToMove } from '../helpers/move'
import { JoinGameRequest, JoinGameResponse } from './types'

export const joinGame = createAsyncThunk(
  'game/join',
  async (action: JoinGameRequest): Promise<JoinGameResponse> => {
    const provider = new providers.Web3Provider(window.ethereum)
    const contract = BackendSmartContract__factory.connect(
      action.contractAddress,
      provider.getSigner()
    )

    const lastBlockNumber = await provider.getBlockNumber()

    const joinedPlayers = (
      await contract.queryFilter(
        contract.filters.PlayerJoined(action.gameId),
        lastBlockNumber - 2000
      )
    ).map((e) => e.args[1])

    const madeMoves = await contract.queryFilter(
      contract.filters.MoveMade(action.gameId, action.playerAddress),
      lastBlockNumber - 2000
    )

    if (
      joinedPlayers.findIndex(
        (p) => p.toLowerCase() === action.playerAddress.toLowerCase()
      ) > -1
    ) {
      return {
        playerNum: (joinedPlayers.findIndex(
          (address) =>
            address.toLowerCase() === action.playerAddress.toLowerCase()
        ) + 1) as 1 | 2,
        sessionIsFull: joinedPlayers.length === 2,
        madeMove:
          madeMoves.length > 0 ? onchainToMove(madeMoves[0].args[2]) : null,
      }
    }
    if (joinedPlayers.length === 2) {
      throw new Error('Session already full')
    } else {
      const tx = await contract.join(action.gameId)
      await tx.wait()
      return {
        playerNum: 2,
        sessionIsFull: true,
        madeMove:
          madeMoves.length > 0 ? onchainToMove(madeMoves[0].args[2]) : null,
      }
    }
  }
)
