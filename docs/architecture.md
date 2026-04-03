# Architecture — tic-tac-toe

## Componentes

```
App
├── GameStatus    ← muestra turno actual, ganador o empate
├── GameBoard     ← grid 3x3
│   └── GameCell  ← celda individual (X, O o vacía)
└── Button        ← acción "Nueva partida"
```

## Flujo de datos

1. `useGame` mantiene el estado: `board` (9 celdas) + `status` (playing/won/draw)
2. El jugador hace clic en `GameCell` → `makeMove(index)`
3. `makeMove` actualiza el tablero, comprueba ganador/empate con `lib/utils.ts`
4. El estado fluye hacia abajo: `App` → `GameBoard` → `GameCell`

## Utilidades

- `checkWinner(board)` — evalúa las 8 combinaciones ganadoras
- `checkDraw(board)` — todas las celdas ocupadas sin ganador

## Sin backend

Estado 100% en memoria. Al recargar la página, la partida se reinicia.
