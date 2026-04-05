import { useState, useCallback } from 'react'
import type { Player } from '@/types'

export interface PlayerNames {
  X: string
  O: string
}

const DEFAULT_NAMES: PlayerNames = { X: 'Jugador 1', O: 'Jugador 2' }

export function usePlayerNames() {
  const [names, setNames] = useState<PlayerNames>({ ...DEFAULT_NAMES })

  const setName = useCallback((player: Player, name: string) => {
    const trimmed = name.trim()
    if (trimmed.length === 0) return
    setNames(prev => ({ ...prev, [player]: trimmed }))
  }, [])

  return { names, setName }
}
