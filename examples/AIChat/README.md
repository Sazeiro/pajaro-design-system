# AIChat

El chat con el copiloto de Pájaro: encabezado, hilo, sugerencias y compositor.

- Props: `title`, `subtitle`, `messages` (`[{role: 'user' | 'ai', text, options?, note?}]`), `thinking` (muestra los tres puntos), `suggestions` (chips), `placeholder`.
- `options` dentro de una respuesta: `[{title, detail, value, recommended}]`; la sugerida va en `cielo-soft` con badge «Sugerido». Máximo tres.
- La IA responde sin burbuja (`body-lg`); el usuario, en burbuja `surface-sunken` a la derecha.
- `note` cita de dónde salió la información y qué puede hacer la IA a continuación.
- Chips: respuestas probables, cortas, en la voz del usuario («Prefiero el reembolso»).
