import { ExtraReducersApply } from '@src/state/types'
import { GameState } from '@state/features/game/types'
import StartGame from './startGame'
import CheckPlayerForJoin from './checkPlayerForJoin'
import CheckGameToFinish from './checkGameToFinish'
import JoinGame from './joinGame'
import MakeMove from './makeMove'

export const extraReducers: Array<ExtraReducersApply<GameState>> = [
  StartGame,
  CheckPlayerForJoin,
  CheckGameToFinish,
  JoinGame,
  MakeMove,
]
