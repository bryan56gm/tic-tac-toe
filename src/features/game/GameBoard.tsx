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
  const currentPlayer = status.type === 'playing' ? status.currentPlayer : null

  return (
    <div className="grid grid-cols-3 gap-3 p-4 bg-slate-800/30 rounded-2xl border border-slate-700/50 shadow-xl shadow-slate-900/50">
      {board.map((cell, i) => (
        <GameCell
          key={i}
          value={cell}
          index={i}
          isWinning={winningCells.has(i)}
          disabled={disabled}
          currentPlayer={currentPlayer}
          onClick={onMove}
        />
      ))}
    </div>
  )
}
