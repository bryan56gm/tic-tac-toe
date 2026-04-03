# /release — Checklist Pre-Release

Antes de hacer deploy:

1. `pnpm typecheck` — sin errores TS
2. `pnpm lint` — sin warnings
3. `pnpm build` — build exitoso
4. Smoke test manual: partida completa, empate, nueva partida
5. Bump version en `package.json`
6. Tag git: `git tag v{version}`
