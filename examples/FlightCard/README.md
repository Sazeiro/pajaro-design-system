# FlightCard

Tarjeta de resultado de vuelo con la explicación de la IA: horario, ruta, duración, escalas, precio final y la sección «Por qué te lo recomiendo».

- Props: `airline`, `flightNumber`, `from`, `to`, `depart`, `arrive`, `dayShift` («+1»), `duration`, `stops` (número), `stopsAt` (códigos IATA), `price` (string ya formateado), `priceNote`, `label`, `recommended`, `reasons` (`[{title, detail}]`), `basis`, `baggage`, `cta`, `actions` (false para ocultar el pie).
- Solo la tarjeta `recommended` lleva borde `cielo`, badge `sol` y botón primary; el resto, secondary.
- `reasons`: 2–4 razones medibles, el dato en `title` (negrita) y el contexto en `detail`. Nunca razones genéricas («gran opción»).
- `basis` dice sobre qué se calculó la recomendación; mostralo siempre que haya `reasons`.
- El precio es final (impuestos y percepciones incluidos) y en tabular-nums.
