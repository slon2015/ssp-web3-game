import { BigNumber, BigNumberish } from 'ethers'
import { Move } from '../types'

export function moveToOnchain(move: Move): BigNumberish {
  if (move === Move.STONE) return 1
  if (move === Move.PAPER) return 2
  if (move === Move.SCISSORS) return 3
  throw new Error('Invalid move')
}

export function onchainToMove(onchain: BigNumberish): Move {
  const onchainBn = BigNumber.from(onchain)
  if (onchainBn.eq(1)) return Move.STONE
  if (onchainBn.eq(2)) return Move.PAPER
  if (onchainBn.eq(3)) return Move.SCISSORS
  throw new Error('Invalid move')
}
