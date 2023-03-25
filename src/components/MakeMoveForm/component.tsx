import config from '@src/config'
import { makeMove, Move } from '@src/state/features/game'
import { InitialaizedWalletState } from '@src/state/features/wallet/types'
import { RootState, useDispatch } from '@src/state/store'
import React, { FC, Fragment, useState } from 'react'
import { useSelector } from 'react-redux'

type State = {
  chainId: number
  gameId: string
}

const Component: FC = () => {
  const dispatch = useDispatch()
  const state = useSelector<RootState, State | null>((state) => ({
    chainId: (state.wallet.data as InitialaizedWalletState).chainId,
    gameId: state.game.data!!.id,
  }))
  if (state) {
    const makeMoveCallback = (move: Move) =>
      dispatch(
        makeMove({
          contractAddress: config.chains[state.chainId].contractAddress,
          gameId: state.gameId,
          move,
        })
      )

    return (
      <div>
        <h3>Make your move</h3>
        <br />
        <button onClick={() => makeMoveCallback(Move.STONE)}>Stone</button>
        <br />
        <button onClick={() => makeMoveCallback(Move.SCISSORS)}>
          Scissors
        </button>
        <br />
        <button onClick={() => makeMoveCallback(Move.PAPER)}>Paper</button>
        <br />
      </div>
    )
  }

  return <Fragment />
}

export default Component
