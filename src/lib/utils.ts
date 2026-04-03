import type { Board, Cell, Player } from '@/types'

const WINNING_COMBINATIONS: [number, number, number][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

export function checkWinner(
  board: Board,
): { winner: Player; cells: [number, number, number] } | null {
  for (const [a, b, c] of WINNING_COMBINATIONS) {
    const cell = board[a]
    if (cell && cell === board[b] && cell === board[c]) {
      return { winner: cell as Player, cells: [a, b, c] }
    }
  }
  return null
}

export function checkDraw(board: Board): boolean {
  return board.every((cell: Cell) => cell !== null)
}
