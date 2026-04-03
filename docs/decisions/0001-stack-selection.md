# 1. Stack Selection

Date: 2026-04-03
Status: accepted

## Context

Juego de tres en raya para 2 jugadores locales en el mismo dispositivo. Sin necesidad de cuentas de usuario, persistencia de datos ni comunicación en red.

## Decision

Vite + React 18 + TypeScript strict + Tailwind CSS v4. Sin Supabase ni autenticación.

Next.js fue descartado: no hay SSR, rutas dinámicas, ni backend que justifiquen su overhead. Vite ofrece HMR más rápido y un bundle más ligero para una SPA simple.

## Consequences

- Sin persistencia: el historial de partidas no se guarda entre sesiones
- Sin auth: cualquiera que abra la URL puede jugar (aceptable para uso local)
- Bundle final muy pequeño (~50KB gzip estimado)
