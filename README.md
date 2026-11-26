# Seralyth Remake website

A dependency-free static landing page for the loader/manager and its bundled Discord bot.

## Public link (stable)

<https://1x1x1x1736.github.io/Seralyth-Remake-mod-manager/>

The site is published from the `gh-pages` branch. Large downloads are GitHub Releases assets, so they are not committed to the site branch and the link keeps working when this PC is off.

## Preview locally

From this folder:

```powershell
node serve.js 8081
```

Then open <http://localhost:8081> if you are on this PC. No packages need installing — `serve.js` is a tiny built-in-Node static server.

Any static host works — GitHub Pages, Netlify, Cloudflare Pages, or a simple IIS folder. There is no build step.

## Files

- `index.html` — page structure
- `styles.css` — dark glassmorphism theme, animations, responsive layout
- `script.js` — mod cards, change-log rendering, scroll effects, tilt interaction
- `CHANGELOG.md` — copy of the project change log, fetched by the page
- `assets/mods/` — copies of the mod card images
- `downloads/` — local copies used by `serve.js`; the public site uses GitHub Releases instead
- `downloads/mods/` — updated menu DLLs mirrored locally and published as Releases fallbacks

## Download links

`script.js` builds both buttons from `RELEASE_BASE` at the top of the file:

```js
const RELEASE_BASE =
  'https://github.com/1x1x1x1736/Seralyth-Remake-mod-manager/releases/latest/download/';
```

GitHub renames a space in the EXE filename to a dot, so the Windows asset is `Seralyth.Remake.exe`. The Discord bot folder is not published because its `config.json` contains a live token. There is no source-code button on the site.

## Refresh bundled files

After changing the manager:

```powershell
Copy-Item ..\CHANGELOG.md .\CHANGELOG.md -Force
Copy-Item ..\WpfApp3\Assets\Mods\*.png .\assets\mods\ -Force
```

The change log parser shows the three newest entries with a link to the full file.
