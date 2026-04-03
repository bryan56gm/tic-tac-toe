import type { GameStatus as TGameStatus } from '@/types'

interface GameStatusProps {
  status: TGameStatus
}

export function GameStatus({ status }: GameStatusProps) {
  if (status.type === 'won') {
    return (
      <p className="text-2xl font-bold text-yellow-400">
        Jugador {status.winner} gana!
      </p>
    )
  }

  if (status.type === 'draw') {
    return <p className="text-2xl font-bold text-slate-300">Empate!</p>
  }

  return (
    <p className="text-lg text-slate-400">
      Turno del jugador{' '}
      <span className="font-bold text-white">{status.currentPlayer}</span>
    </p>
  )
}
