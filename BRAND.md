Pájaro es un comparador de vuelos AI-native para Latinoamérica, que arranca en Argentina. El nombre es un guiño (en Argentina, «pájaro» es el avión), pero la marca maneja la plata y los viajes de la gente: se ve **madura, calma y precisa**. El ingenio está en el nombre y en la tilde, no en el sistema visual.

**Personalidad:** inteligente · calma · optimista · precisa. Nada infantil, nada de clip-art, nada de formas de juguete.

**Promesa:** viajar desde LATAM, sin fricción. Cada pantalla responde una pregunta y explica el porqué.

## Voz y tono

- Hablá en español rioplatense con **voseo**: «Comprá ahora», «Te avisamos», «¿Querés que lo reprograme?». Para otros mercados se localiza; el registro (cercano, adulto) se mantiene.
- **Primero la respuesta, después el porqué.** «Esperá. Esta ruta suele bajar entre 6 y 8 semanas antes de salir.»
- **Números concretos, nunca adjetivos.** «18% debajo del promedio», no «¡precio increíble!».
- **Precio final siempre.** Todo precio que mostramos ya incluye impuestos y percepciones; lo decimos una vez, en `caption`: «Final por persona, con impuestos».
- La IA habla en primera persona y se hace cargo: «Lo saqué de las condiciones de tu tarifa. Si elegís una, la gestiono yo.»
- Sentence case en todo: títulos, botones, menús. Mayúsculas solo en `overline` (2–3 palabras).
- Sin signos de exclamación, sin emojis, sin «¡Ups!». Ante un problema: calma, qué pasó y qué hacemos.

| Sí | No |
| --- | --- |
| Bajó a US$ 742. Es el más bajo en 60 días. | ¡¡Precio bomba!! ✈️🔥 |
| Te cancelaron el vuelo. Tenés dos opciones sin cargo. | ¡Ups! Algo salió mal con tu vuelo 😕 |
| Comprá ahora · Confianza 82% | ¡No te lo pierdas! ¡Últimos lugares! |
| Directo y 3 h más corto por $ 113.400 más. | La mejor experiencia de viaje. |

## Color

Dos colores de marca y muchos neutros. La sofisticación sale de la **proporción**: el sol es un punto de luz, no un bloque.

- **`cielo`** — el azul de un mediodía despejado: medio-oscuro, saturado, con un toque cian. Es la acción primaria, los links, la selección, el foco y la voz de la IA.
- **`sol`** — un amarillo dorado y cálido (más cerca del Sol de Mayo que del limón). Es el pájaro, el «mejor momento» en un gráfico, el badge «Mejor opción». Nunca texto sobre claro: para texto existe `sol-ink`.
- **Neutros cálidos** — `surface` es un papel apenas tostado; `ink` es casi negro, no azul. El contraste cálido/frío hace que el cielo se vea limpio.

**Proporción por pantalla:** ~70% neutros (`surface`, `surface-raised`, `ink`) · ~20% `cielo` · ≤5% `sol` · el resto, estados.

**Cómo nos diferenciamos de Expedia** (azul marino + amarillo limón en bloques):

| | Expedia | Pájaro |
| --- | --- | --- |
| Azul | marino, casi negro, como fondo | cielo medio, luminoso; nunca fondo de UI salvo piezas de marca |
| Amarillo | limón, en bloques y botones | sol dorado, solo como acento puntual |
| Neutros | blanco frío | papel cálido + tinta casi negra |
| Combinación | azul + amarillo a partes iguales | 70 / 20 / 5 |

Reglas:

- Usá `cielo` para una sola acción primaria por vista (`Button` primary). Lo demás va en secondary o ghost.
- Texto sobre `cielo` relleno: `on-cielo` (blanco de día, tinta de noche; nunca hardcodear blanco). Texto sobre `sol`: `on-sol`.
- `brand-cielo` y `brand-sol` son **fijos**: no cambian con el tema. Usalos para el ícono, slides y piezas de marca. En la UI usá los semánticos (`cielo`, `sol`), que se ajustan de noche.
- Estados: `success` (bajó, aprobado, comprá), `danger` (subió, cancelado, error), `warning` = `sol-ink` (esperá, atención), `info` = `cielo`. Cada estado lleva **siempre** ícono o palabra: verde y rojo nunca se distinguen solo por color.
- Fondos teñidos: cada color de texto tiene su `-soft` (`cielo-soft`, `success-soft`, `danger-soft`, `sol-soft`) con ≥4.5:1 en ambos temas.
- Tema «Noche»: superficies grafito (`#0e1317`), no azul marino. El cielo se aclara a `#5aa6ec` y el texto encima pasa a oscuro.

## Tipografía

Una sola familia: **Geist** (títulos, cuerpo, números) y **Geist Mono** para lo que la gente copia o compara: códigos IATA, número de vuelo, código de reserva. Son open source (OFL) y están en `fonts/`.

- Títulos en 600 con tracking negativo (`title-1` … `title-4`); cuerpo en 400 (`body`, `body-lg` para las respuestas de la IA).
- `display-xl` y `display` solo en pitch, marketing y onboarding.
- **Todo precio y horario con `font-variant-numeric: tabular-nums`** (`price-xl`, `price`, `time`).
- Formato de números (es-AR): `$ 1.412.300` para pesos, `US$ 742` para dólares, punto de miles, sin decimales salvo que importen. Horarios en 24 h (`06:10`), día siguiente como `+1` en `sol-ink`. Fechas cortas: `12 – 26 ene`.
- Jerarquía por tamaño y peso, no por color: una pantalla tiene un `title-1`, y el resto baja en escalones.

## Espacio, forma y elevación

- Base 4px (`space-1` … `space-24`). Mucho aire: entre secciones nunca menos de `space-8`; padding de tarjeta `space-6` (desktop) / `space-5` (mobile).
- Radios suaves pero precisos: `radius-sm` (8) botones e inputs, `radius-md` (12) burbujas y bloques internos, `radius-lg` (16) tarjetas, `radius-xl` (24) modales y slides. Nada de píldoras gigantes ni formas infladas.
- Elevación corta y fría (`shadow-sm` en reposo, `shadow-md` en hover, `shadow-lg` para lo que flota). La jerarquía la hacen el aire y la tipografía, no las sombras.
- Bordes: `line` para divisores decorativos; `line-strong` para bordes de controles (3:1).
- Foco: `focus-ring` — 2px del color de página y 2px sólidos de `cielo`. Visible en todas las superficies, ambos temas.
- Movimiento: 150–250 ms, ease-out, sin rebotes. El único gesto «expresivo» es el pájaro: entra en diagonal ascendente (45°). Respetá `prefers-reduced-motion`.

## Marca: el pájaro

**Concepto.** Una golondrina vista en planta — desde abajo, en vuelo — que es a la vez la silueta de un avión: alas en flecha, cuerpo central, cola bifurcada. Es el juego del nombre («pájaro» = avión) dicho con geometría, sin caricatura. La golondrina es además el ave migratoria de Sudamérica: viaja, vuelve, sabe cuándo moverse.

**Construcción.** Grilla de 100. Cada ala es una media luna entre dos arcos (radio 46 en el borde de ataque, 54 en el de fuga), la cabeza es un óvalo de 14 de ancho y la cola se bifurca en dos puntas. La marca se rota 45°: siempre asciende hacia arriba a la derecha. Nunca se rota hacia abajo ni se espeja.

**Logotipo.** «pájaro» en minúscula, Geist SemiBold con tracking −2%, convertido a curvas. **La tilde es la firma:** va en color (`brand-sol` sobre cielo u oscuro, `brand-cielo` sobre claro), como un pájaro que despega de la palabra. La tilde nunca se quita: sin ella, es otra palabra.

**Ícono de app.** Pájaro `brand-sol` al 78% sobre un cuadrado `brand-cielo` con radio de 22.5%. Es el único lugar donde sol y cielo aparecen en bloque.

Assets (grupo Logos):

| Archivo | Dónde |
| --- | --- |
| `pajaro-icon.svg` | Ícono de app, favicon, avatar de redes. |
| `pajaro-lockup-light.svg` | Marca + logotipo sobre `surface`, `surface-raised` y blanco. |
| `pajaro-lockup-dark.svg` | Marca + logotipo sobre `brand-cielo` o el tema Noche. |
| `pajaro-wordmark-ink.svg` / `-white.svg` | Logotipo solo, cuando la marca ya aparece cerca. |
| `pajaro-mark-cielo.svg` / `-sol.svg` | Pájaro solo: avatar de la IA, loaders, estados vacíos. |

- Área de respeto: el alto de la cabeza del pájaro × 2 alrededor del lockup.
- Tamaño mínimo: ícono 16px, lockup 88px de ancho, logotipo 64px.
- No: cambiar colores fuera de cielo/sol/tinta/blanco, agregar degradés o sombras, poner el pájaro amarillo sobre fondo claro, rotarlo hacia abajo, ponerle ojos o expresión.

## Iconografía

Línea de 1.5px en grilla de 20, extremos y uniones redondeadas, sin rellenos. El set mínimo vive en el bundle (`Pajaro.Icon`: flechas, check, campana, reloj, enviar, valija). Para el resto, usá **Lucide** a `strokeWidth={1.5}` — es una recomendación, no un set propio todavía. Íconos en `ink-muted` en reposo y `cielo` cuando son interactivos. Nunca emojis en la interfaz.

## La IA

- La IA no tiene cara ni mascota: su avatar es el pájaro en `cielo` sobre `cielo-soft`.
- **Siempre explica.** Toda recomendación lleva «Por qué te lo recomiendo» con 2–4 razones medibles (tiempo, plata, flexibilidad, historial de precio) y la base del cálculo («Comparamos 214 vuelos de 9 aerolíneas»).
- **Muestra su confianza** en las predicciones (`PriceAlert`: «Confianza 82%»). Por debajo de 60% no da veredicto: dice que no está segura y propone una alerta.
- Las respuestas de la IA van sin burbuja, en `body-lg`; las del usuario, en burbuja `surface-sunken`. Las opciones accionables van como filas dentro de la respuesta, con la sugerida en `cielo-soft`.

## Componentes

Los componentes viven en `components/bundle.js` como `window.Pajaro` (React 18). `FlightCard` (resultado con «Por qué te lo recomiendo»), `PriceAlert` (alerta + veredicto ¿compro o espero?), `AIChat` (copiloto), y las bases `Button`, `Badge`, `Mark`. `PitchCover` y `PitchSix` son las dos slides de muestra del deck: fondo `brand-cielo` para portadas, `surface` para contenido, márgenes `space-16`, numeración en mono.
