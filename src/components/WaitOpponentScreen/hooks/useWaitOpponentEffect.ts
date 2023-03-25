import config from '@src/config'
import { checkPlayerToJoin, GameState } from '@src/state/features/game'
import { InitialaizedWalletState } from '@src/state/features/wallet/types'
import { RootState, useDispatch } from '@src/state/store'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

type State = {
  chainId: number
  gameId: string
  status: NonNullable<GameState['data']>['status']
}

export function useWaitOpponentEffect() {
  const state = useSelector<RootState, State>((state) => ({
    chainId: (state.wallet.data as InitialaizedWalletState).chainId,
    gameId: state.game.data!!.id,
    status: state.game.data!!.status,
  }))

  const dispatch = useDispatch()

  useEffect(() => {
    if (state.status === 'waitPlayer') {
      dispatch(
        checkPlayerToJoin({
          contractAddress: config.chains[state.chainId].contractAddress,
          gameId: state.gameId,
        })
      )
      const interval = setInterval(() => {
        dispatch(
          checkPlayerToJoin({
            contractAddress: config.chains[state.chainId].contractAddress,
            gameId: state.gameId,
          })
        )
      }, 5000)

      return () => clearInterval(interval)
    }
  }, [state.status, state.chainId, state.gameId])
}
