import config from '@src/config'
import { joinGame } from '@src/state/features/game'
import { RootState, useDispatch } from '@src/state/store'
import React, { FC, Fragment, useState } from 'react'
import { useSelector } from 'react-redux'

type State = {
  address: string
  chainId: number
}

const JoinToGameForm: FC = () => {
  const dispatch = useDispatch()
  const state = useSelector<RootState, State | null>((state) => {
    if (state.wallet.data.status === 'initialized') {
      return {
        address: state.wallet.data.address,
        chainId: state.wallet.data.chainId,
      }
    }
    return null
  })
  const [gameId, setGameId] = useState('0')
  if (state) {
    const joinToGame = () =>
      dispatch(
        joinGame({
          contractAddress: config.chains[state.chainId].contractAddress,
          gameId,
          playerAddress: state.address,
        })
      )

    return (
      <div>
        <input
          type="text"
          onChange={(e) => setGameId(e.target.value)}
          value={gameId}
        />
        <br />
        <button onClick={joinToGame}>Join</button>
      </div>
    )
  }

  return <Fragment />
}

export default JoinToGameForm
