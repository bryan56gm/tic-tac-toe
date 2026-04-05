import { useState, useCallback } from 'react'
import type { Board, GameStatus, Player } from '@/types'
import { checkWinner, checkDraw } from '@/lib/utils'

const EMPTY_BOARD: Board = [null, null, null, null, null, null, null, null, null]

export interface Scores {
  X: number
  O: number
  draws: number
}

export function useGame() {
  const [board, setBoard] = useState<Board>([...EMPTY_BOARD])
  const [status, setStatus] = useState<GameStatus>({ type: 'playing', currentPlayer: 'X' })
  const [scores, setScores] = useState<Scores>({ X: 0, O: 0, draws: 0 })

  const makeMove = useCallback(
    (index: number) => {
      if (status.type !== 'playing') return
      if (board[index] !== null) return

      const newBoard: Board = [...board]
      newBoard[index] = status.currentPlayer

      const result = checkWinner(newBoard)
      if (result) {
        setBoard(newBoard)
        setStatus({ type: 'won', winner: result.winner, winningCells: result.cells })
        setScores(prev => ({ ...prev, [result.winner]: prev[result.winner] + 1 }))
        return
      }

      if (checkDraw(newBoard)) {
        setBoard(newBoard)
        setStatus({ type: 'draw' })
        setScores(prev => ({ ...prev, draws: prev.draws + 1 }))
        return
      }

      const nextPlayer: Player = status.currentPlayer === 'X' ? 'O' : 'X'
      setBoard(newBoard)
      setStatus({ type: 'playing', currentPlayer: nextPlayer })
    },
    [board, status],
  )

  const resetGame = useCallback(() => {
    setBoard([...EMPTY_BOARD])
    setStatus({ type: 'playing', currentPlayer: 'X' })
  }, [])

  const resetScores = useCallback(() => {
    setScores({ X: 0, O: 0, draws: 0 })
    setBoard([...EMPTY_BOARD])
    setStatus({ type: 'playing', currentPlayer: 'X' })
  }, [])

  return { board, status, scores, makeMove, resetGame, resetScores }
}
