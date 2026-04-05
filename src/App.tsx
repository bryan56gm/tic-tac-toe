import { useGame } from '@/features/game/useGame'
import { useConfetti } from '@/features/game/useConfetti'
import { usePlayerNames } from '@/features/game/usePlayerNames'
import { GameBoard } from '@/features/game/GameBoard'
import { GameStatus } from '@/features/game/GameStatus'
import { PlayerNames } from '@/features/game/PlayerNames'
import { Button } from '@/components/ui/Button'

export default function App() {
  const { board, status, makeMove, resetGame } = useGame()
  const { names, setName } = usePlayerNames()
  useConfetti(status)

  return (
    <main className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-3xl font-bold text-white tracking-tight">Tres en Raya</h1>

        <PlayerNames names={names} onSetName={setName} />

        <GameStatus status={status} names={names} />

        <GameBoard board={board} status={status} onMove={makeMove} />

        <div className="flex gap-3">
          <Button onClick={resetGame} variant="primary">
            Nueva partida
          </Button>
          <Button onClick={resetGame} variant="danger">
            Reiniciar
          </Button>
        </div>
      </div>
    </main>
  )
}
