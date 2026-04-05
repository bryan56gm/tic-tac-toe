import type { GameStatus as TGameStatus } from '@/types'
import type { PlayerNames } from './usePlayerNames'

interface GameStatusProps {
  status: TGameStatus
  names: PlayerNames
}

const playerColor: Record<'X' | 'O', string> = {
  X: 'text-indigo-400',
  O: 'text-rose-400',
}

const playerDot: Record<'X' | 'O', string> = {
  X: 'bg-indigo-400',
  O: 'bg-rose-400',
}

export function GameStatus({ status, names }: GameStatusProps) {
  if (status.type === 'won') {
    return (
      <p className={`text-2xl font-bold animate-bounce ${playerColor[status.winner]}`}>
        🏆 {names[status.winner]} gana!
      </p>
    )
  }

  if (status.type === 'draw') {
    return <p className="text-2xl font-bold text-slate-300">🤝 Empate!</p>
  }

  return (
    <div className="flex items-center gap-2 text-lg text-slate-400">
      <span
        className={`w-2.5 h-2.5 rounded-full animate-pulse ${playerDot[status.currentPlayer]}`}
      />
      <span>
        Turno de{' '}
        <span className={`font-bold ${playerColor[status.currentPlayer]}`}>
          {names[status.currentPlayer]}
        </span>
      </span>
    </div>
  )
}
