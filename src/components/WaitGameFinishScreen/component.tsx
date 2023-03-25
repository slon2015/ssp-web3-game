import React, { FC } from 'react'
import { useWaitGameFinishEffect } from './hooks/useWaitGameFinishEffect'

const Component: FC = () => {
  useWaitGameFinishEffect()

  return <span>Waiting for game to finish</span>
}

export default Component
