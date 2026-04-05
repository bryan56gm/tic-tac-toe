import { useGame } from '@/features/game/useGame'
import { useConfetti } from '@/features/game/useConfetti'
import { usePlayerNames } from '@/features/game/usePlayerNames'
import { GameBoard } from '@/features/game/GameBoard'
import { GameStatus } from '@/features/game/GameStatus'
import { ScoreBoard } from '@/features/game/ScoreBoard'
import { PlayerNames } from '@/features/game/PlayerNames'
import { Button } from '@/components/ui/Button'

export default function App() {
  const { board, status, scores, makeMove, resetGame, resetScores } = useGame()
  const { names, setName } = usePlayerNames()
  useConfetti(status)

  return (
    <main className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-rose-400 bg-clip-text text-transparent">
          Tres en Raya
        </h1>

        <PlayerNames names={names} onSetName={setName} />

        <ScoreBoard scores={scores} />

        <GameStatus status={status} names={names} />

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
