import type { Cell } from '@/types'

interface GameCellProps {
  value: Cell
  index: number
  isWinning: boolean
  disabled: boolean
  currentPlayer: Cell
  onClick: (index: number) => void
}

const cellStyle: Record<NonNullable<Cell>, string> = {
  X: 'bg-indigo-900 text-indigo-300 border-2 border-indigo-500',
  O: 'bg-rose-900 text-rose-300 border-2 border-rose-500',
}

const ghostStyle: Record<NonNullable<Cell>, string> = {
  X: 'text-indigo-800',
  O: 'text-rose-800',
}

export function GameCell({ value, index, isWinning, disabled, currentPlayer, onClick }: GameCellProps) {
  return (
    <button
      onClick={() => onClick(index)}
      disabled={disabled || value !== null}
      className={[
        'group relative flex items-center justify-center',
        'w-24 h-24 text-4xl font-bold rounded-xl',
        'transition-all duration-200',
        isWinning
          ? 'bg-yellow-400 text-white scale-110 border-2 border-yellow-300 animate-pulse shadow-lg shadow-yellow-400/40'
          : value
            ? cellStyle[value]
            : 'bg-slate-800 text-slate-400 border-2 border-slate-700 hover:bg-slate-750 hover:border-slate-500 hover:scale-105 cursor-pointer',
        disabled && value === null ? 'opacity-40 cursor-not-allowed' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      aria-label={`Celda ${index + 1}${value ? `, ${value}` : ''}`}
    >
      {value ? (
        value
      ) : (
        !disabled && currentPlayer && (
          <span className={`opacity-0 group-hover:opacity-30 transition-opacity duration-150 select-none ${ghostStyle[currentPlayer]}`}>
            {currentPlayer}
          </span>
        )
      )}
    </button>
  )
}
