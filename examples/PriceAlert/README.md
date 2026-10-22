# PriceAlert

Alerta de precio de una ruta con su evolución y el veredicto «¿compro ahora o espero?».

- Props: `from`, `to`, `trip`, `dates`, `price`, `change`, `direction` (`down` | `up`), `since`, `history` (números, el último es hoy), `typical` + `typicalLabel`, `verdict` (`buy` | `wait`), `verdictTitle`, `verdictText`, `confidence` (0–100), `updated`, `actions`.
- El gráfico usa `cielo` para la línea, `sol` para el punto de hoy y una línea punteada `line-strong` para el precio típico. Sin ejes: el número grande ya dice el valor.
- `buy` usa `success`; `wait` usa `warning` (= `sol-ink`). Con `confidence` menor a 60, no muestres veredicto: decí que todavía no hay señal clara.
- `verdictText`: una o dos frases, con el dato que justifica el veredicto y qué va a hacer Pájaro («Te avisamos apenas baje de $ 250.000»).
