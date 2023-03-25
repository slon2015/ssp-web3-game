import { Move } from '../types'

export type StartGameRequest = {
  contractAddress: string
}

export type StartGameResponse = {
  gameId: string
}

export type JoinGameRequest = {
  playerAddress: string
  gameId: string
  contractAddress: string
}

export type JoinGameResponse = {
  playerNum: 1 | 2
  sessionIsFull: boolean
  madeMove: Move | null
}

export type WaitPlayerJoinRequest = {
  gameId: string
  contractAddress: string
}

export type MakeMoveRequest = {
  contractAddress: string
  gameId: string
  move: Move
}

export type CheckGameToFinishRequest = {
  contractAddress: string
  gameId: string
  playerNum: 1 | 2
}

export type CheckGameToFinishResponse = {
  result: 'YOU' | 'OPPONENT' | 'PAT' | 'IN_PROGRESS'
}
