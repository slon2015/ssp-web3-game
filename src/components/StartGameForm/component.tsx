import config from '@src/config'
import { GameState, startGame } from '@src/state/features/game'
import { RootState, useDispatch } from '@src/state/store'
import React, { FC, Fragment, useState } from 'react'
import { useSelector } from 'react-redux'

type State = {
  address: string
  chainId: number
  game: GameState['data']
}

const Component: FC = () => {
  const dispatch = useDispatch()
  const state = useSelector<RootState>((state) => {
    if (state.wallet.data.status === 'initialized') {
      return {
        address: state.wallet.data.address,
        chainId: state.wallet.data.chainId,
        game: state.game.data,
      }
    }
    return null
  }) as State

  if (!state.game) {
    const startGameCallback = () =>
      dispatch(
        startGame({
          contractAddress: config.chains[state.chainId].contractAddress,
        })
      )

    return (
      <div>
        <button onClick={startGameCallback}>Start</button>
      </div>
    )
  } else {
    return <div>Your gami id: {state.game.id}</div>
  }

  return <Fragment />
}

export default Component
