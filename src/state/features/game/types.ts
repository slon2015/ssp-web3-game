export enum Move {
  STONE,
  PAPER,
  SCISSORS,
}

export type GameState = {
  data: {
    id: string
    status:
      | 'waitPlayer'
      | 'inProgress'
      | 'waitFinish'
      | `finish${'Win' | 'Lost' | 'Pat'}`
    madeMove: Move | null
    playerNum: 1 | 2
  } | null
}
