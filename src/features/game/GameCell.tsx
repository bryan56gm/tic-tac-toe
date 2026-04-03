import type { Cell } from '@/types'

interface GameCellProps {
  value: Cell
  index: number
  isWinning: boolean
  disabled: boolean
  onClick: (index: number) => void
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
          ? 'bg-yellow-400 text-white scale-105'
          : value
            ? 'bg-slate-700 text-white cursor-default'
            : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white cursor-pointer',
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
