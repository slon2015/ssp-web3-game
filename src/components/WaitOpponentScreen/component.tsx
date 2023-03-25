import { RootState } from '@src/state/store'
import React, { FC, Fragment } from 'react'
import { useSelector } from 'react-redux'
import { useWaitOpponentEffect } from './hooks/useWaitOpponentEffect'

const Component: FC = () => {
  useWaitOpponentEffect()
  const state = useSelector<RootState, { sessionId: string }>((state) => ({
    sessionId: state.game.data!!.id,
  }))

  return (
    <Fragment>
      <span>Your game id is: {state.sessionId}</span>
      <br />
      <span>Waiting for opponent</span>
    </Fragment>
  )
}

export default Component
