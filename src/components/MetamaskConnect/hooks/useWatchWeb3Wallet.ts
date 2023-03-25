import {
  connectWallet,
  loadWallet,
  walletUnavailable,
} from '@src/state/features/wallet'
import { useDispatch } from '@state/store'
import { useMetaMask } from 'metamask-react'
import { useEffect } from 'react'

export function useWatchWeb3Wallet() {
  const dispatch = useDispatch()
  const { account, chainId, status } = useMetaMask()

  useEffect(() => {
    if (status === 'connected') {
      dispatch(
        connectWallet({
          address: account,
          chainId: Number(chainId),
        })
      )
    }
    if (status === 'connecting' || status === 'initializing') {
      dispatch(loadWallet())
    }
    if (status === 'unavailable') {
      dispatch(walletUnavailable())
    }
  }, [status, chainId, account])
}
