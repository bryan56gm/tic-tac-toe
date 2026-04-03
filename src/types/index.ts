export type Player = 'X' | 'O'
export type Cell = Player | null
export type Board = [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell]

export type GameStatus =
  | { type: 'playing'; currentPlayer: Player }
  | { type: 'won'; winner: Player; winningCells: [number, number, number] }
  | { type: 'draw' }
