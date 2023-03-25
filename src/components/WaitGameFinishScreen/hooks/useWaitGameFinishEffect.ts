import config from '@src/config'
import {
  checkGameToFinish,
  checkPlayerToJoin,
  GameState,
} from '@src/state/features/game'
import { InitialaizedWalletState } from '@src/state/features/wallet/types'
import { RootState, useDispatch } from '@src/state/store'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

type State = {
  chainId: number
  gameId: string
  status: NonNullable<GameState['data']>['status']
  playerNum: NonNullable<GameState['data']>['playerNum']
}

export function useWaitGameFinishEffect() {
  const state = useSelector<RootState, State>((state) => ({
    chainId: (state.wallet.data as InitialaizedWalletState).chainId,
    gameId: state.game.data!!.id,
    status: state.game.data!!.status,
    playerNum: state.game.data!!.playerNum,
  }))

  const dispatch = useDispatch()

  useEffect(() => {
    if (state.status === 'waitFinish') {
      dispatch(
        checkGameToFinish({
          playerNum: state.playerNum,
          contractAddress: config.chains[state.chainId].contractAddress,
          gameId: state.gameId,
        })
      )
      const interval = setInterval(() => {
        dispatch(
          checkGameToFinish({
            playerNum: state.playerNum,
            contractAddress: config.chains[state.chainId].contractAddress,
            gameId: state.gameId,
          })
        )
      }, 5000)

      return () => clearInterval(interval)
    }
  }, [state.status, state.chainId, state.gameId])
}
