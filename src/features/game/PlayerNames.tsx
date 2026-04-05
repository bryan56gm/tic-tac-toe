import { useState } from 'react'
import type { PlayerNames } from './usePlayerNames'
import type { Player } from '@/types'

interface PlayerNamesProps {
  names: PlayerNames
  onSetName: (player: Player, name: string) => void
}

interface EditableNameProps {
  player: Player
  name: string
  colorClass: string
  dotClass: string
  onSetName: (player: Player, name: string) => void
}

function EditableName({ player, name, colorClass, dotClass, onSetName }: EditableNameProps) {
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(name)

  function handleBlur() {
    onSetName(player, draft)
    setEditing(false)
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      onSetName(player, draft)
      setEditing(false)
    }
    if (e.key === 'Escape') {
      setDraft(name)
      setEditing(false)
    }
  }

  return (
    <span className={`flex items-center gap-1.5 text-sm font-semibold ${colorClass}`}>
      <span className={`w-2 h-2 rounded-full ${dotClass}`} />
      {player} —{' '}
      {editing ? (
        <input
          autoFocus
          value={draft}
          onChange={e => setDraft(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className="bg-transparent border-b border-current outline-none w-24 text-sm"
          maxLength={20}
        />
      ) : (
        <button
          onClick={() => { setDraft(name); setEditing(true) }}
          className="underline underline-offset-2 decoration-dotted hover:opacity-80 transition-opacity cursor-pointer"
          title="Clic para editar nombre"
        >
          {name}
        </button>
      )}
    </span>
  )
}

export function PlayerNames({ names, onSetName }: PlayerNamesProps) {
  return (
    <div className="flex gap-6">
      <EditableName player="X" name={names.X} colorClass="text-indigo-400" dotClass="bg-indigo-400" onSetName={onSetName} />
      <EditableName player="O" name={names.O} colorClass="text-rose-400" dotClass="bg-rose-400" onSetName={onSetName} />
    </div>
  )
}
