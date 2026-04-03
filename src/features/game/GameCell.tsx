import type { Cell } from '@/types'

interface GameCellProps {
  value: Cell
  index: number
  isWinning: boolean
  disabled: boolean
  onClick: (index: number) => void
}

const cellStyle: Record<NonNullable<Cell>, string> = {
  X: 'bg-indigo-900 text-indigo-300 border-2 border-indigo-500',
  O: 'bg-rose-900 text-rose-300 border-2 border-rose-500',
}

export function GameCell({ value, index, isWinning, disabled, onClick }: GameCellProps) {
  return (
    <button
      onClick={() => onClick(index)}
      disabled={disabled || value !== null}
      className={[
        'flex items-center justify-center',
        'w-24 h-24 text-4xl font-bold rounded-xl',
        'transition-all duration-150',
        isWinning
          ? 'bg-yellow-400 text-white scale-105 border-2 border-yellow-300'
          : value
            ? cellStyle[value]
            : 'bg-slate-800 text-slate-400 border-2 border-slate-700 hover:bg-slate-700 hover:text-white hover:border-slate-500 cursor-pointer',
        disabled && value === null ? 'opacity-40 cursor-not-allowed' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      aria-label={`Celda ${index + 1}${value ? `, ${value}` : ''}`}
    >
      {value}
    </button>
  )
}
