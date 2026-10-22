# Pájaro — design system

Fuente de verdad del design system de Pájaro (comparador de vuelos AI-native para LATAM).

- `tokens.json` — colores (temas Día/Noche), tipografía, espaciado, radios, sombras.
- `src/tokens.css` — los tokens como variables CSS (`[data-theme="dark"]` para Noche).
- `src/pajaro.css` + `src/pajaro.js` — componentes React 18 en `window.Pajaro` (Mark, Button, Badge, FlightCard, PriceAlert, AIChat). Tipos en `src/index.d.ts`.
- `fonts/` — Geist y Geist Mono (OFL).
- `assets/logos/` — ícono, lockups, logotipo y pájaro en SVG.
- `examples/` — una página de muestra por componente, más las dos slides del pitch.
- `BRAND.md` — reglas de uso: voz, color, tipografía, marca, IA.

## Uso

```html
<link rel="stylesheet" href="src/tokens.css">
<link rel="stylesheet" href="src/pajaro.css">
<script src="https://cdn.jsdelivr.net/npm/react@18.3.1/umd/react.production.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/react-dom@18.3.1/umd/react-dom.production.min.js"></script>
<script src="src/pajaro.js"></script>
```
