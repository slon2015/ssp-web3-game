import { useMetaMask } from 'metamask-react'
import React, { Fragment, PropsWithChildren, FC } from 'react'
import { useWatchWeb3Wallet } from './hooks/useWatchWeb3Wallet'

const MetamaskConnect: FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren) => {
  const { status, connect } = useMetaMask()
  useWatchWeb3Wallet()
  if (status === 'connected') {
    return <Fragment>{children}</Fragment>
  } else if (status === 'unavailable') {
    return <h3>Metamask unavailable</h3>
  } else if (status === 'connecting' || status === 'initializing') {
    return <span>Loading...</span>
  } else {
    return <button onClick={connect}>Connect Metamask</button>
  }
}

export default MetamaskConnect
