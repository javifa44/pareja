# 🎲 El Dado del Amor

Un juego web para parejas: tirá el dado, cumplí la carta y sumá puntos.

## Categorías

| Cara | Categoría | Puntos |
|------|-----------|--------|
| 💋 | Desafío | +10 |
| 💆 | Masaje | +10 |
| 🫣 | Confesión | +10 |
| 🎁 | Favor | +10 |
| 🔥 | Picante | +15 (se puede apagar) |
| ⭐ | Comodín | elegís categoría, +20 |

## Cómo abrirlo en local

Solo abrí `index.html` con doble clic (o `python3 -m http.server` y entrá a `http://localhost:8000`).

Los puntos, nombres e historial se guardan en el navegador (`localStorage`); borralos con el botón **Reiniciar juego**.

## Cómo publicarlo en GitHub Pages

1. Creá un repo en GitHub (público o privado).
2. Desde la terminal:

```bash
cd el-dado-del-amor
git init
git add .
git commit -m "El Dado del Amor ✨"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git push -u origin main
```

3. En GitHub: repo → **Settings** → **Pages** → en *Source* elegí `Deploy from a branch` → rama `main` → carpeta `/ (root)` → **Save**.
4. En unos minutos va a estar online en:
   `https://TU_USUARIO.github.io/TU_REPO/`

## Personalizar

Las cartas están en `app.js` dentro de `const CONTENT`. Cambiá los textos y los puntos a gusto.