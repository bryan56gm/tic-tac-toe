import { useEffect } from 'react'
import confetti from 'canvas-confetti'
import type { GameStatus } from '@/types'

export function useConfetti(status: GameStatus) {
  useEffect(() => {
    if (status.type !== 'won') return

    const burst = () => {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#6366f1', '#f59e0b', '#10b981', '#f43f5e', '#3b82f6'],
      })
    }

    burst()
    const t1 = setTimeout(() => burst(), 300)
    const t2 = setTimeout(() => burst(), 600)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [status.type])
}
