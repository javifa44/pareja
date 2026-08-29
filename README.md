# 🎲 El Dado del Amor

Un juego web para parejas: tirá el dado, cumplí la carta y sumá puntos hasta llegar a la **meta de la temporada**.

## Cómo funciona

- Dos jugadores: **💙 Alex** y **💗 Majo** (los nombres se pueden editar tocándolos).
- Cada turno se tira el dado y sale una carta:

| Cara | Categoría | Puntos |
|------|-----------|--------|
| 💋 | Desafío | +10 |
| 💆 | Masaje | +10 |
| 🫣 | Confesión | +10 |
| 🎁 | Favor | +10 |
| 🔥 | Picante | +15 (se puede apagar) |
| ⭐ | Comodín | elegís categoría, +20 |

- Si cumplís la carta, sumás los puntos. Si no, la salteás y pasa el turno.

## Meta y premio

- Hay una **meta de puntos por temporada** (por defecto **100**) que se muestra desde el inicio.
- Para ganar no alcanza con llegar a la meta: hay que sacar la **ventaja** (por defecto **20** pts) → se puede ir a desempate.
- Quien gana elige una **categoría de premio** (la que crea que al otro más le gustaría) y responde una **pregunta personal** sobre el otro: si acierta gana el **Nivel 2**, si no, el **Nivel 1**.

| Categoría | Nivel 1 · Simple | Nivel 2 · Épica |
|-----------|------------------|-----------------|
| 🧳 Aventura | Un día fuera de la rutina que arma el perdedor. | Una escapada de verdad planeada por el perdedor. |
| 🥂 Noche premium | El perdedor paga, el ganador elige el plan. | Experiencia inolvidable (teatro, concierto, spa…). |
| 🃏 Carta blanca | Un deseo libre (lógico y legal, pero creativo). | Carta blanca total: el ganador escribe su deseo más tentador. |

- Los **6 premios** (3 categorías × 2 niveles) se editan en ⚙️ Ajustes.
- El ganador pasa al **salón de la fama** y se arranca una **nueva temporada**.

Los puntos, ajustes, historial y campeones se guardan en el navegador (`localStorage`).

## Cómo abrirlo en local

Abrí `index.html` con doble clic (o `python3 -m http.server` y entrá a `http://localhost:8000`).

## Cómo publicarlo en GitHub Pages

El repo ya está preparado para publicarse en main (rama `main`):

1. Subí los archivos con `git add . && git commit -m "mensaje" && git push`.
2. En GitHub: **Settings → Pages** → *Source*: `Deploy from a branch` → `main` → `/ (root)` → **Save**.
3. Queda online en `https://TU_USUARIO.github.io/TU_REPO/`.

## Personalizar

Las cartas están en `app.js` dentro de `const CONTENT`. La meta, la ventaja y los premios se editan desde el botón ⚙️ del juego.