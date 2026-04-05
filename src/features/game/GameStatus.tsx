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

export function GameStatus({ status, names }: GameStatusProps) {
  if (status.type === 'won') {
    return (
      <p className={`text-2xl font-bold ${playerColor[status.winner]}`}>
        {names[status.winner]} gana! 🏆
      </p>
    )
  }

  if (status.type === 'draw') {
    return <p className="text-2xl font-bold text-slate-300">Empate! 🤝</p>
  }

  return (
    <p className="text-lg text-slate-400">
      Turno de{' '}
      <span className={`font-bold ${playerColor[status.currentPlayer]}`}>
        {names[status.currentPlayer]}
      </span>
    </p>
  )
}
