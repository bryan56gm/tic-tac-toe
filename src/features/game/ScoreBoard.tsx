import type { Scores } from './useGame'

interface ScoreBoardProps {
  scores: Scores
}

export function ScoreBoard({ scores }: ScoreBoardProps) {
  return (
    <div className="flex gap-4 text-center">
      <div className="flex flex-col items-center bg-indigo-900/40 border border-indigo-700/50 rounded-xl px-6 py-3 min-w-[80px]">
        <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Jugador X</span>
        <span className="text-3xl font-bold text-indigo-300 mt-1">{scores.X}</span>
      </div>

      <div className="flex flex-col items-center bg-slate-800/50 border border-slate-700/50 rounded-xl px-6 py-3 min-w-[80px]">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Empates</span>
        <span className="text-3xl font-bold text-slate-300 mt-1">{scores.draws}</span>
      </div>

      <div className="flex flex-col items-center bg-rose-900/40 border border-rose-700/50 rounded-xl px-6 py-3 min-w-[80px]">
        <span className="text-xs font-semibold text-rose-400 uppercase tracking-wider">Jugador O</span>
        <span className="text-3xl font-bold text-rose-300 mt-1">{scores.O}</span>
      </div>
    </div>
  )
}
