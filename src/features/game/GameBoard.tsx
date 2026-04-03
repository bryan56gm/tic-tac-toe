import type { Board, GameStatus } from '@/types'
import { GameCell } from './GameCell'

interface GameBoardProps {
  board: Board
  status: GameStatus
  onMove: (index: number) => void
}

export function GameBoard({ board, status, onMove }: GameBoardProps) {
  const winningCells =
    status.type === 'won' ? new Set(status.winningCells) : new Set<number>()
  const disabled = status.type !== 'playing'

  return (
    <div className="grid grid-cols-3 gap-3">
      {board.map((cell, i) => (
        <GameCell
          key={i}
          value={cell}
          index={i}
          isWinning={winningCells.has(i)}
          disabled={disabled}
          onClick={onMove}
        />
      ))}
    </div>
  )
}
