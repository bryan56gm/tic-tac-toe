import { useGame } from '@/features/game/useGame'
import { useConfetti } from '@/features/game/useConfetti'
import { GameBoard } from '@/features/game/GameBoard'
import { GameStatus } from '@/features/game/GameStatus'
import { Button } from '@/components/ui/Button'

export default function App() {
  const { board, status, makeMove, resetGame } = useGame()
  useConfetti(status)

  return (
    <main className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-3xl font-bold text-white tracking-tight">Tres en Raya</h1>

        <div className="flex gap-6 text-sm font-semibold">
          <span className="text-indigo-400">X — Jugador 1</span>
          <span className="text-rose-400">O — Jugador 2</span>
        </div>

        <GameStatus status={status} />

        <GameBoard board={board} status={status} onMove={makeMove} />

        <Button onClick={resetGame} variant={status.type !== 'playing' ? 'primary' : 'ghost'}>
          Nueva partida
        </Button>
      </div>
    </main>
  )
}
