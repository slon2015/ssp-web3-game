import { RootState } from '@src/state/store'
import React, { FC, Fragment, PropsWithChildren } from 'react'
import { useSelector } from 'react-redux'

const Loader: FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
  const state: string | null = useSelector<RootState, string | null>(
    (state) => state.loader.action
  )

  if (state) {
    return <span>Loading...</span>
  } else {
    return <Fragment>{children}</Fragment>
  }
}

export default Loader
