import { useGame } from '@/features/game/useGame'
import { useConfetti } from '@/features/game/useConfetti'
import { GameBoard } from '@/features/game/GameBoard'
import { GameStatus } from '@/features/game/GameStatus'
import { ScoreBoard } from '@/features/game/ScoreBoard'
import { Button } from '@/components/ui/Button'

export default function App() {
  const { board, status, scores, makeMove, resetGame, resetScores } = useGame()
  useConfetti(status)

  return (
    <main className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-3xl font-bold text-white tracking-tight">Tres en Raya</h1>

        <div className="flex gap-6 text-sm font-semibold">
          <span className="text-indigo-400">X — Jugador 1</span>
          <span className="text-rose-400">O — Jugador 2</span>
        </div>

        <ScoreBoard scores={scores} />

        <GameStatus status={status} />

        <GameBoard board={board} status={status} onMove={makeMove} />

        <div className="flex gap-3">
          <Button onClick={resetGame} variant="primary">
            Nueva partida
          </Button>
          <Button onClick={resetScores} variant="danger">
            Reiniciar puntuación
          </Button>
        </div>
      </div>
    </main>
  )
}
