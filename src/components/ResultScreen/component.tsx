import { GameState } from '@src/state/features/game'
import { RootState } from '@src/state/store'
import React, { FC } from 'react'
import { useSelector } from 'react-redux'

type State = {
  address: string
  chainId: number
  game: NonNullable<GameState['data']>
}

const Component: FC = () => {
  const state = useSelector<RootState>((state) => {
    if (state.wallet.data.status === 'initialized') {
      return {
        address: state.wallet.data.address,
        chainId: state.wallet.data.chainId,
        game: state.game.data!!,
      }
    }
    return null
  }) as State

  if (state.game.status === 'finishWin') {
    return <h3>You won</h3>
  } else if (state.game.status === 'finishLost') {
    return <h3>You lost</h3>
  } else {
    return <h3>Game finished with pat result</h3>
  }
}

export default Component
