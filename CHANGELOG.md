# Change Log

A running log of menu/mod updates and manager changes. **Newest entries go at the top.**

## How to add an entry

Copy this block under `## Updates`, fill it in, and keep the date format `YYYY-MM-DD`:

```md
### YYYY-MM-DD — Menu name
- **Tag:** LEGAL / ILLEGAL / LEGAL + ILLEGAL
- **Version:**
- **What changed:**
- **Download:**
- **Notes:**
```

For menu-specific history, add a dated entry to `WpfApp3/MenuChangeLogs/<mod-id>.md` too. Those files are copied beside the EXE and embedded inside it, so other people can read them from the project or from the mod's **LOG** button.

## Updates

### 2026-11-27 — Fancy theme tooltips

- **Tag:** N/A
- **Version:** Local Windows build + website
- **What changed:** Theme presets and layout options now show polished hover tooltips. The loader shows the palette name, a short description and colour swatches at the mouse, and its circular **?** help buttons now use the same rich tooltip style. The website picker shows a compact glass chip inside the hovered option that follows the pointer and stays within that option (centred there on keyboard focus).
- **Download:** Local build only; the website download currently points to v1.2.1.
- **Notes:** Visual-only change. Saved themes and layouts still apply exactly as before. No DLL, preference, keybind, theme, achievement, room/vote state or per-version config folder is touched.

### 2026-11-27 — EXE icon

- **Tag:** N/A
- **Version:** Local Windows build
- **What changed:** Added a custom Seralyth icon to `Seralyth Remake.exe` — a cyan-to-purple gradient tile with the dark `S` used on the website. The icon is embedded in the single-file EXE, so it shows in Explorer and the taskbar without extra files.
- **Download:** Local build only; the website download currently points to v1.2.1.
- **Notes:** Visual-only change. The icon source and full loader source are not published in this repository. No DLL, preference, keybind, theme, achievement, room/vote state or per-version config folder is touched.

### 2026-11-26 — Loader v1.2.1 released

- **Tag:** N/A
- **Version:** Manager 1.2.1
- **What changed:** Published the refreshed Windows loader with the Lag Menu startup auto updater and the public manager update notifier. The EXE now fetches `http://lagmenu.lol/Install/LagMenu.dll`, verifies it, and uses the cached copy for install/inject; the bundled DLL remains the offline fallback.
- **Download:** https://github.com/1x1x1x1736/Seralyth-Remake-mod-manager/releases/latest/download/Seralyth.Remake.exe
- **Notes:** Published assets contain no Discord token, `config.json`, `loaders.json`, `role-codes.json` or private bot package. No DLL, menu preference, keybind, theme, achievement, room/vote state or per-version config folder is touched.

### 2026-11-26 — Lag Menu auto updater

- **Tag:** ILLEGAL
- **Version:** Latest — lagmenu.lol
- **What changed:** Lag Menu now auto-updates from `http://lagmenu.lol/Install/LagMenu.dll` on manager startup. The DLL is downloaded to a private AppData cache, checked for a valid PE header and SHA-256, and then preferred for both download/install and injection. The bundled copy remains a fallback if the update site is unavailable.
- **Download:** http://lagmenu.lol/Install/LagMenu.dll
- **Notes:** Tag stays ILLEGAL. Protected menu folders, preferences, keybinds, themes, achievements and room/vote state are never touched. No other menu's update source changed.

### 2026-11-26 — Manager update notifier

- **Tag:** N/A
- **Version:** Manager 1.2.0
- **What changed:** The Windows loader now checks public GitHub Releases on startup. When a newer version is published it says "You're in an outdated version. Would you like to update?" **Yes** downloads the new EXE from the same website release asset immediately; **No** waits 5 minutes and then downloads it automatically, even if the loader is closed and reopened during that window. The download uses a `.part` file, a versioned filename and GitHub's SHA-256 digest before it is offered in Downloads.
- **Download:** Local Windows build updated; public EXE not republished yet
- **Notes:** Bump `<Version>` in `WpfApp3/WpfApp3.csproj` when publishing each new tag (for example `v1.2.1`). The private DLL updater is unchanged, and no DLL, menu preference, keybind, theme, achievement, room/vote state or per-version config folder is touched.

### 2026-11-26 — Private in-channel loader code

- **Tag:** N/A
- **Version:** N/A
- **What changed:** The **Show code here (private)** button now replies with an ephemeral Discord message, so only the person who clicked can see the loader key. DM delivery is unchanged. The panel text was updated to say the code is shown privately here or sent in DMs.
- **Download:** Local bot rebuilt and restarted; public release not republished yet
- **Notes:** The old public channel reply that exposed the key to everyone is gone. No DLL, preference, keybind, theme file, achievement, room/vote state or per-version config folder is touched.

### 2026-11-26 — Automatic Linux release build

- **Tag:** N/A
- **Version:** N/A
- **What changed:** Every Release build of the Windows manager now also publishes the self-contained Avalonia linux-x64 build and refreshes `Website/downloads/Seralyth.Remake.Linux.x64.tar.gz`. Debug builds stay fast; use `-p:SkipLinuxBuild=true` to skip the Linux step when needed.
- **Download:** `Website/downloads/Seralyth.Remake.Linux.x64.tar.gz` refreshed locally; public release tarball not republished yet
- **Notes:** Added `Build-Linux.ps1` and an MSBuild Release target. No files under the protected `Seralyth-Menu-4.8.5 (1)` folder are read for deletion or cleaned. No DLL, preference, keybind, theme file, achievement, room/vote state or per-version config folder is touched.

### 2026-11-26 — Settings category sound

- **Tag:** N/A
- **Version:** N/A
- **What changed:** The Settings page now counts as a loader category, so opening or closing it from the sidebar plays the same navigation tone as All mods, Legal, Illegal, Installed, Ranks and Injecting. The ordinary button click is still suppressed for that navigation so the sounds do not overlap.
- **Download:** Local build updated; public EXE not republished yet
- **Notes:** The suppression now uses a short time window, so programmatic navigation cannot accidentally mute a later unrelated button. No DLL, preference, keybind, theme file, achievement, room/vote state or per-version config folder is touched.

### 2026-11-26 — Obfuscated release build

- **Tag:** N/A
- **Version:** N/A
- **What changed:** Release packaging now runs a safe, rename-only Obfuscar pass over the manager before building the single-file EXE. Private symbols are renamed while public API, XAML bindings, JSON property names, event handlers and string literals stay intact. `Release.ps1` also gained `-SkipObfuscation` and `-NoZip` switches for troubleshooting and low-disk builds.
- **Download:** Local obfuscated build verified; public EXE not republished yet
- **Notes:** The obfuscated EXE was smoke-tested and starts cleanly. No DLL, preference, keybind, theme file, achievement, room/vote state or per-version config folder is touched.

### 2026-11-26 — Full-screen photo fit

- **Tag:** N/A
- **Version:** N/A
- **What changed:** In the full-page mod view, the picture area is taller and uses fit mode, so the whole image is visible instead of only the top strip. Returning to the normal side panel restores the original cropped thumbnail style.
- **Download:** Local build updated; public EXE not republished yet
- **Notes:** Display-only fix. No DLL, preference, keybind, theme file, achievement, room/vote state or per-version config folder is touched.

### 2026-11-26 — Category navigation sound

- **Tag:** N/A
- **Version:** N/A
- **What changed:** Switching loader categories — All mods, Legal, Illegal, Installed, Ranks, Injecting and the filter pills — now plays a short navigation tone. The ordinary button click is suppressed for those controls so the sounds do not overlap.
- **Download:** Local build updated; public EXE not republished yet
- **Notes:** Uses the existing sound toggle and volume setting. No DLL, preference, keybind, theme file, achievement, room/vote state or per-version config folder is touched.

### 2026-11-26 — Full-screen mod details

- **Tag:** N/A
- **Version:** N/A
- **What changed:** Clicking a mod card now opens that mod's details as a full-page view, like Settings. Added a **← Back to mods** button; **Esc**, search, filter changes, Settings and Change log also return to the library. The card **LOG** button opens the same full-page view with the change log expanded.
- **Download:** Local build updated; public EXE not republished yet
- **Notes:** UI-only change. No DLL, preference, keybind, theme file, achievement, room/vote state or per-version config folder is touched. Paid remains inject-only and key-gated.

### 2026-11-26 — Loader theme crash fix

- **Tag:** N/A
- **Version:** N/A
- **What changed:** Fixed a startup crash when the saved theme was applied. The accent resources used by gradients and glows are now stored as colours, with separate brushes for foregrounds and borders, so switching themes updates everything safely.
- **Download:** Local build fixed; public EXE not republished yet
- **Notes:** Display-only fix. No DLL, preference, keybind, theme file, achievement, room/vote state or per-version config folder is touched.

### 2026-11-26 — Website design picker cache fix

- **Tag:** N/A
- **Version:** N/A
- **What changed:** Versioned the website's CSS and JS links so browsers load the new design picker code instead of an older cached copy. Without this, the new Layout buttons could appear but do nothing.
- **Download:** Website published
- **Notes:** Static HTML change only. No DLL, preference, keybind, theme file, achievement, room/vote state or per-version config folder is touched.

### 2026-11-26 — Website layout designs

- **Tag:** N/A
- **Version:** N/A
- **What changed:** Added a **Layout** section to the website design picker with **Default**, **Compact**, **Glassy** and **Bold**. Layout is saved separately from the colour palette, and the picker label now shows both, e.g. `Midnight · Compact`. Compact tightens spacing, Glassy adds translucent panels and stronger blur, Bold uses thicker borders and stronger type.
- **Download:** Website published
- **Notes:** Static CSS/JS only. No DLL, preference, keybind, theme file, achievement, room/vote state or per-version config folder is touched, and no external dependency or payment is required.

### 2026-11-26 — Website-style themes

- **Tag:** N/A
- **Version:** N/A
- **What changed:** Added five colour themes — **Midnight**, **Ember**, **Matrix**, **Rose** and **Arctic** — to the static website, the Windows loader and the Avalonia app. The website has a theme picker in the nav that saves to browser storage; the loaders have matching named presets in Settings that save with the other theme settings. Existing custom background colours still work and are marked **custom**.
- **Download:** Website published; loader EXE not republished yet
- **Notes:** Display-only. No DLL, menu preference, keybind, theme file, achievement, room/vote state or per-version config folder is deleted or rewritten. Paid stays inject-only and key-gated.

### 2026-11-26 — Seralyth Remake author

- **Tag:** N/A
- **Version:** N/A
- **What changed:** Seralyth Remake's author is now shown as **1x1x1x1_VR12** in the loader, Avalonia catalog and static website instead of `Seralyth`.
- **Download:** N/A (metadata change; not republished yet)
- **Notes:** Display-only. No DLL, preference, keybind, theme, achievement, room/vote state or per-version config folder is touched.

### 2026-11-26 — Loader (official / unofficial badges)

- **Tag:** N/A
- **Version:** N/A
- **What changed:** Seralyth Remake now shows an **OFFICIAL** badge on its card and in the detail panel. Every other menu shows **UNOFFICIAL**. The existing LEGAL / ILLEGAL / PAID badges are unchanged, and search now matches the new label too.
- **Download:** N/A (loader UI change; not republished yet)
- **Notes:** This is display-only. No DLL, preference, keybind, theme, achievement, room/vote state or per-version config folder is touched, and Paid remains inject-only and key-gated.

### 2026-11-26 — Loader (Paid injection fix)

- **Tag:** N/A
- **Version:** N/A
- **What changed:** Paid injection no longer requires `SeralythMenu\Plugins\SeralythPlugin.dll`. The companion plugin is now optional: if it exists it is still redirected to the selected build, but if it is missing or cannot be patched the loader continues with only the tiny private bridge. This fixes the Paid key box accepting the key but injection failing in a game folder without that DLL.
- **Download:** N/A (loader source change; not republished yet)
- **Notes:** The Paid DLL is still injected for one session only, never downloaded or installed into `BepInEx\plugins`. No DLL preference, keybind, theme, achievement, room/vote state or per-version config folder is touched.

### 2026-11-26 — Loader (welcome role code)

- **Tag:** N/A
- **Version:** N/A
- **What changed:** The Windows loader now shows a welcome card until the Loader User role is granted. Clicking **Yes, get a code** creates a random 4-digit code with a **Copy code** button; paste it into the Discord bot's **I have a code** box (or `/redeem`) and the bot grants only the Loader User role. The loader checks the private `DiscordBot\role-codes.json` ledger every few seconds and automatically clears the welcome card once the role is granted. Choosing **Paid** now always opens the key-entry box (prefilled with any saved key) above the welcome card and focuses it before the one-session injection.
- **Download:** N/A (loader/bot source change; not republished yet)
- **Notes:** Codes expire after 10 minutes, are single-use, and are limited to five wrong attempts per Discord user. A 4-digit code never grants Buyer or a paid key — longer keys still follow the existing redeem flow. Paid stays inject-only and is still validated every time; no DLL, preference, keybind or per-version config folder is touched.

### 2026-11-26 — Stable public website (GitHub Pages + Releases)

- **Tag:** N/A
- **Version:** N/A
- **What changed:** Published the dependency-free site to the `gh-pages` branch and moved the large downloads to GitHub Releases. The Windows EXE, Linux `.tar.gz` and three menu DLL fallbacks are now served from stable `/releases/latest/download/` URLs. The manager and website both use those URLs instead of the temporary Cloudflare tunnel.
- **Download:** https://1x1x1x1736.github.io/Seralyth-Remake-mod-manager/
- **Notes:** No payment or account card was needed. GitHub renames the EXE asset to `Seralyth.Remake.exe`. The Discord bot folder was intentionally not published because `config.json` contains a live token; `Malachis_Menu_Reborn.dll` was also left out while Defender blocks reading it. The quick-tunnel URL is retired.

### 2026-11-26 — Permanent hosting (setup ready)

- **Tag:** N/A
- **Version:** N/A
- **What changed:** Added a Cloudflare Worker + R2 deployment under `Website\cloudflare` and `Website\deploy-cloudflare.ps1`. Once authenticated, this publishes the site and downloads to a stable `workers.dev` URL that keeps working when this PC is off. The Worker streams EXE/tar.gz/DLL downloads from R2 and serves `index.html` at `/`.
- **Download:** Pending deployment; the quick-tunnel URL remains the temporary fallback until then.
- **Notes:** Cloudflare login is done through `npx wrangler login`; no token is stored in the repo. Large downloads stay in R2 because Cloudflare Pages has a 25 MiB per-file asset limit.

### 2026-11-26 — Website link restored

- **Tag:** N/A
- **Version:** N/A
- **What changed:** Restarted the static site and Cloudflare quick tunnel after the old tunnel stopped resolving. Updated the manager's fallback mirror URL and the README/changelog links.
- **Download:** https://uses-then-shift-pursue.trycloudflare.com/
- **Notes:** Quick-tunnel URLs are temporary and change whenever the tunnel is restarted. A permanent R2/Pages deployment is still needed for a stable link.

### 2026-11-26 — Manager / Discord bot (saved key)

- **Tag:** N/A
- **Version:** N/A
- **What changed:** Added a **Your key** suggestion under the Paid key box in the Windows and Avalonia managers. When the key field is focused, a chip shows the saved `LOADER-...` key; clicking it pastes the key back into the box like an autofill suggestion. The Discord access panel and the **Get Loader Key** follow-up now also have a **Your key** button that re-shows the existing key without generating a new one.
- **Download:** N/A (manager/bot source change)
- **Notes:** Entering and unlocking a Paid key still saves it. No key is sent to the website or stored in a new location.

### 2026-11-26 — Lag Menu (updated DLL)

- **Tag:** ILLEGAL
- **Version:** Latest (updated 2026-11-26 DLL)
- **What changed:** Replaced the bundled `LagMenu.dll` with the updated file you supplied. Added: nothing. Removed: Halloween Category and Deafen Gun (never worked).
- **Download:** Cloudflare mirror: https://uses-then-shift-pursue.trycloudflare.com/downloads/mods/LagMenu.dll (local copy: `WpfApp3\Assets\Mods\LagMenu.dll`)
- **Notes:** Tag stays ILLEGAL. Manager rebuilds are still blocked until `Malachis_Menu_Reborn.dll` is restored/unblocked.

### 2026-11-25 — Manager (antivirus false positive)

- **Tag:** N/A
- **Version:** N/A
- **What changed:** Removed the embedded copies of the four updated menu DLLs from the WPF and Avalonia assemblies. Windows Defender was quarantining `Seralyth Remake.dll` because it contained `Malachis_Menu_Reborn.dll` as a managed resource (`Trojan:Win32/Kepavll!rfn`). The DLLs still ship loose beside the EXE and inside the Linux tarball, with Downloads and Cloudflare fallbacks.
- **Download:** https://uses-then-shift-pursue.trycloudflare.com/downloads/Seralyth%20Remake.exe
- **Notes:** No antivirus setting needs to be disabled. A manager EXE copied without its `Assets\Mods` folder will use the Downloads copies or the Cloudflare mirror; the file picker also works.

### 2026-11-25 — Novalight / Malachi Reborn / Lag Menu / StupidTemplate (updated DLLs)

- **Tag:** ILLEGAL
- **Version:** Updated 2026-11-25 files you supplied
- **What changed:** Replaced the four expired Discord CDN links. The updated DLLs now ship bundled with the manager (`WpfApp3\Assets\Mods`) and install locally; Cloudflare mirrors and the Downloads folder remain as fallbacks. Both the Windows and Avalonia/Linux catalogs were updated.
- **Download:** https://uses-then-shift-pursue.trycloudflare.com/downloads/mods/ (local copies: `WpfApp3\Assets\Mods\` and `Website\downloads\mods\`)
- **Notes:** Tags stay ILLEGAL. No preferences, keybinds or config folders were touched.

### 2026-11-25 — Website + manager (Linux download)

- **Tag:** N/A
- **Version:** N/A
- **What changed:** Added a self-contained Linux x64 build of the Avalonia manager as `Seralyth.Remake.Linux.x64.tar.gz` in `Website\downloads`, with a second download button on the static website.
- **Download:** Cloudflare link: https://uses-then-shift-pursue.trycloudflare.com/downloads/Seralyth.Remake.Linux.x64.tar.gz (local copy: `Website\downloads\Seralyth.Remake.Linux.x64.tar.gz`)
- **Notes:** Extract the archive and run `Seralyth Remake` from the extracted folder. No .NET install is needed. The bundled Discord access bot ships with the Windows EXE only.

### 2026-11-25 — Website + manager (ranks)

- **Tag:** N/A
- **Version:** N/A
- **What changed:** Skidalyth is now 2nd place in the catalog order. The website has a 1st / 2nd / 3rd podium with medals and a Ranks nav link; mod cards now show ranks from explicit `rank` values instead of array position. 1st Seralyth Remake, 2nd Skidalyth, 3rd Novalight.
- **Download:** Bundled in `Seralyth Remake.exe` and on the static website
- **Notes:** The manager's Ranks page, nav tooltip and status text now match the website podium. Existing install state, preferences and per-version config folders are untouched.

### 2026-11-25 — Manager (private GitHub auto-updates)

- **Tag:** N/A
- **Version:** N/A
- **What changed:** Added private GitHub update support. Set the repo owner/name, branch, `versions.json` path, and GitHub OAuth client ID in Settings, then connect with GitHub device login. On startup the manager checks the manifest, downloads changed DLLs to a temp file, verifies SHA-256, and replaces only files that already exist in the plugins folder or private injection cache.
- **Download:** Bundled in `Seralyth Remake.exe`
- **Notes:** No token or client secret is bundled with the EXE. Paid DLLs are never auto-updated. Setup guide and `versions.example.json` are in the repository root. Existing preferences, keybinds, themes, and per-version config folders are untouched.

### 2026-11-25 — Manager (library card sound)

- **Tag:** N/A
- **Version:** N/A
- **What changed:** Clicking any mod card in the mod library now plays the UI click sound, matching the other buttons.
- **Download:** Bundled in `Seralyth Remake.exe`
- **Notes:** Mute and volume settings still apply.

### 2026-11-25 — Manager (instant button sounds)

- **Tag:** N/A
- **Version:** N/A
- **What changed:** Button clicks now play through Windows audio in-process instead of starting PowerShell and loading a sound player. The sound starts immediately; no 1-second wait.
- **Download:** Bundled in `Seralyth Remake.exe`
- **Notes:** Volume and mute settings are unchanged.

### 2026-11-25 — Seralyth Remake (updated 14 DLLs)

- **Tag:** LEGAL + ILLEGAL + PAID
- **Version:** 10.0.6
- **What changed:** All 14 picker versions now resolve to the exact updated files you supplied. The bundled and cached PAID DLL was refreshed from your updated `Seralyth Remake Paid.dll`.
- **Download:** Exact source paths under `...\Seralyth-Menu-4.8.5\bin\Debug\netstandard2.1`
- **Notes:** No menu preferences, keybinds, themes, achievements or old version folders were touched.

### 2026-11-25 — Poison Menu (Legal fallback)

- **Tag:** LEGAL + ILLEGAL
- **Version:** 5.1.8beta
- **What changed:** Poison Menu Legal no longer fails when `Poison.Menu.Legal.dll` is missing from Downloads. It uses the local DLL when present, otherwise it downloads the official GitHub release. The downloaded file keeps the name `Poison.Menu.Legal.dll` for both install and inject.
- **Download:** https://github.com/heycanihavethis/Poison/releases/download/5.1.8beta/Poison.Menu.Legal.dll
- **Notes:** Illegal still uses `Poison.Menu.dll` from the same release. Both remain one card with a Legal/Illegal version picker.

### 2026-11-25 — Seralyth Remake (injector preference restored)

- **Tag:** LEGAL + ILLEGAL + PAID
- **Version:** 14 builds
- **What changed:** Restored the normal download/install button and kept Inject as its own separate action. The Injecting page still has click-to-inject version buttons, but nothing replaces the existing download/install preference.
- **Download:** Bundled DLL at `Assets\Mods\Seralyth\Seralyth Remake Paid.dll`
- **Notes:** All 14 versions still use the exact DLL paths you supplied; injection remains session-only.

### 2026-11-25 — Seralyth Remake (one-click injector versions)

- **Tag:** LEGAL + ILLEGAL + PAID
- **Version:** 14 builds
- **What changed:** The Injecting page now shows all 14 Seralyth versions as click-to-inject buttons. Clicking a version injects its exact DLL immediately; clicking the Seralyth card also opens the version list in injection mode. The version popup now says when it is injecting instead of installing.
- **Download:** Bundled DLL at `Assets\Mods\Seralyth\Seralyth Remake Paid.dll`
- **Notes:** Still one version-picker card with mixed tags. Paid still asks for the loader key first and is injected from the private cache.

### 2026-11-25 — Seralyth Remake (exact injection paths)

- **Tag:** LEGAL + ILLEGAL + PAID
- **Version:** 14 builds
- **What changed:** All 14 picker choices now map to the exact DLL paths you supplied for injection. `Classic`, `Client`, `Debug`, `Free`, `Legacy`, `Legal`, `Lite`, `Paid`, `Pro`, `Reborn`, `Redux`, `Reforged`, `Trial`, and `Ultra` each resolve directly to their own file instead of being discovered by name.
- **Download:** Bundled DLL at `Assets\Mods\Seralyth\Seralyth Remake Paid.dll`
- **Notes:** Still one version-picker card with mixed tags. Paid keeps its bundled/embedded fallback when the local path is unavailable.

### 2026-11-25 — Seralyth Remake (all versions inject correctly)

- **Tag:** LEGAL + ILLEGAL + PAID
- **Version:** 14 builds
- **What changed:** Every Seralyth version now gets the companion-plugin reference redirected to the selected assembly, so choosing Classic, Client, Free, etc. no longer loads Debug. All builds are staged directly in `BepInEx\plugins` with a random `__gtmm_...dll` name; no `SeralythMenu\Plugins` subfolder or real filename is used.
- **Download:** Bundled DLL at `Assets\Mods\Seralyth\Seralyth Remake Paid.dll`
- **Notes:** Paid still loads from the private cache through the compiled bridge. The original `SeralythPlugin.dll` is backed up and restored after every injection.

### 2026-11-25 — Seralyth Remake (Paid DLL from fresh CDN link)

- **Tag:** LEGAL + ILLEGAL + PAID
- **Version:** 14 builds
- **What changed:** Replaced the bundled `Seralyth Remake Paid.dll` with the fresh CDN download you supplied for the Paid choice. The asset and private injection cache now match the supplied file exactly (SHA-256 `3EE13FDB36F04FF6DC86271D7A1D67AAB4114F937B50AD126DB6EF959B84AE6A`).
- **Download:** Bundled DLL at `Assets\Mods\Seralyth\Seralyth Remake Paid.dll`
- **Notes:** Tagged ILLEGAL as requested. Still inject-only, still loaded from the private cache through the compiled bridge, and never copied into `BepInEx\plugins`.

### 2026-11-25 — Seralyth Remake (compiled Paid loader)

- **Tag:** LEGAL + ILLEGAL + PAID
- **Version:** 14 builds
- **What changed:** Paid injection now stages a tiny precompiled BepInEx bridge and patches only its embedded path literal at runtime. The 30 MB paid DLL remains in the private cache and is never copied into `BepInEx\plugins`. Temporary build caches and duplicate publish folders were removed to free disk space.
- **Download:** Bundled DLL at `Assets\Mods\Seralyth\Seralyth Remake Paid.dll`
- **Notes:** Fixes the `BadImageFormatException` crash caused by the hand-generated shim, resolves MelonLoader from the game's existing folder for the Paid type scan, and only treats the specific missing-Debug assembly error as a failure. In-game log confirms `Patched with 0 errors`, `Notifications loaded`, and `Loaded menuButtonIndex: 0`.

### 2026-11-25 — Seralyth Remake (Paid loader redirect)

- **Tag:** LEGAL + ILLEGAL + PAID
- **Version:** 14 builds
- **What changed:** The PAID build now temporarily redirects Seralyth's `SeralythPlugin.dll` from `Seralyth Remake Debug` to the bundled `Seralyth Remake Paid` assembly while the game runs. Mono.Cecil is bundled with the manager for this one-time patch; the original plugin is backed up and restored after the session.
- **Download:** Local DLL at `Assets\Mods\Seralyth\Seralyth Remake Paid.dll`
- **Notes:** Fixes `Could not load file or assembly 'Seralyth Remake Debug, Version=10.0.4.0'` and no longer reports success while the menu plugin failed.

### 2026-11-25 — Seralyth Remake (Paid DLL bundled)

- **Tag:** LEGAL + ILLEGAL + PAID
- **Version:** 14 builds
- **What changed:** The exact `Seralyth Remake Paid.dll` you supplied is now copied into `Assets\Mods\Seralyth` and embedded in the EXE. Paid injection uses that bundled DLL first, extracting it from the single-file build when there is no loose copy.
- **Download:** Bundled DLL at `Assets\Mods\Seralyth\Seralyth Remake Paid.dll`
- **Notes:** The old absolute Downloads path remains only as a development fallback.

### 2026-11-25 — Seralyth Remake (Paid staging fix)

- **Tag:** LEGAL + ILLEGAL + PAID
- **Version:** 14 builds
- **What changed:** Seralyth version packs now stage the DLL into `BepInEx\plugins\SeralythMenu\Plugins` with its real filename, so Seralyth's own loader can resolve it. The Paid choice uses exactly `Seralyth Remake Paid.dll`; an existing file there is backed up and restored after the session.
- **Download:** Local DLL at `C:\Users\kalew\Downloads\Seralyth-Menu-4.8.5 (1)\Seralyth-Menu-4.8.5\bin\Debug\netstandard2.1\Seralyth Remake Paid.dll`
- **Notes:** Fixes the `Could not load file or assembly 'Seralyth Remake Debug'` error and the false “did not load” result.

### 2026-11-25 — Manager (Paid injection fix)

- **Tag:** Not a mod (manager)
- **Version:** —
- **What changed:** The staged injector now detects BepInEx's `Loading [Seralyth Remake ...]` and `Chainloader startup complete` lines, so a successful Paid injection is no longer reported as a failure. The exact attached `Seralyth Remake Paid.dll` path is checked first for the Paid version.
- **Download:** Project source
- **Notes:** Applies to both WPF and Avalonia loaders.

### 2026-11-25 — Seralyth Remake (Paid build)

- **Tag:** LEGAL + ILLEGAL + PAID
- **Version:** 14 builds — adds `Paid` alongside the original 13
- **What changed:** Added a key-gated **Paid** choice to the existing Seralyth Remake version picker. It injects `Seralyth Remake Paid.dll` for one session only; it never downloads or installs anything. The card and details panel now show a PAID badge, and the loader asks for the same `LOADER-...` key the bot gives from **Get Loader Key** or after redemption.
- **Download:** Local DLL at `C:\Users\kalew\Downloads\Seralyth-Menu-4.8.5 (1)\Seralyth-Menu-4.8.5\bin\Debug\netstandard2.1\Seralyth Remake Paid.dll`
- **Notes:** Choose **Paid** from either **Download / Install** or **Inject** — both routes force injection. The accepted key is cached in `paid-access.json` beside the EXE, with an AppData fallback.

### 2026-11-25 — Manager (Discord paid access)

- **Tag:** Not a mod (manager)
- **Version:** —
- **What changed:** The Discord panel now has a **Redeem key** button and modal in addition to `/redeem`. Redeeming grants the Buyer role (`1548833356504899595`) and the loader-user role, then reuses or creates the user's `LOADER-...` key in `loaders.json`. The Windows and Avalonia loaders validate that key before injecting the Paid build.
- **Download:** Project source
- **Notes:** The bot config still contains the token and is bundled with releases — keep the release private. The Buyer role ID was corrected from the old value; an already-running bot is reused rather than duplicated.

### 2026-11-25 — Manager (website)

- **Tag:** Not a mod (manager)
- **Version:** —
- **What changed:** Added a dependency-free static website under `Website/` with the loader features, mod gallery, Discord access flow, newest change-log entries and download section. It includes animated gradients, glass cards, scroll reveals, 3D tilt and a responsive layout.
- **Download:** Project source
- **Notes:** Set `RELEASE_URL` and `SOURCE_URL` in `Website/script.js` before publishing. The page fetches its own copy of `CHANGELOG.md`.

### 2026-11-25 — Manager (bundled Discord bot)

- **Tag:** Not a mod (manager)
- **Version:** —
- **What changed:** The manager now starts the Discord bot automatically when it launches and stops it on exit. The bot is published into `DiscordBot\` beside the manager and includes the access panel with the loader-user role, code entry, and choose-here-or-DM code delivery. The bot's own self-chat replies were removed.
- **Download:** Project source
- **Notes:** The bot's `config.json` is bundled too, so keep the release private — it contains the bot token. An already-running bot is reused instead of starting a duplicate.

### 2026-11-25 — Manager (sound volume)

- **Tag:** Not a mod (manager)
- **Version:** —
- **What changed:** Added a volume slider in Settings for button sounds. It scales the generated chirps from mute to 300%, saves beside the EXE with an AppData fallback, and is available in both the Windows and cross-platform managers.
- **Download:** Project source
- **Notes:** The speaker button still mutes/unmutes; the slider controls loudness. Old settings files keep the original volume until changed.

### 2026-11-25 — Skidalyth

- **Tag:** ILLEGAL
- **Version:** Latest — GitHub `Mod` release (`skidalyth.dll`)
- **What changed:** Added a new card with the GitHub release download, a source-code button and the screenshot you sent. Installs as `skidalyth.dll`.
- **Download:** https://github.com/Chillzmodz/skidalyth/releases/download/Mod/skidalyth.dll
- **Notes:** Source: https://github.com/Chillzmodz/skidalyth. Verified HTTP 200 and `application/octet-stream` (5,040,128 bytes) when added. Tag confirmed as ILLEGAL.

### 2026-11-25 — ZynxGTGold (updated DLL)

- **Tag:** ILLEGAL
- **Version:** Latest — updated `ZynxGTGold.dll` (48,128 bytes)
- **What changed:** Replaced the download with the fresh DLL link. The menu's design was changed and its mods were fixed. Tag confirmed as ILLEGAL.
- **Download:** https://cdn.discordapp.com/attachments/1527853345144832041/1575292911942373467/ZynxGTGold.dll?ex=6b08c159&is=6b076fd9&hm=5b5d88e4324717aa5d28700280ce8a6f2c0a6d7ea59919cdae9883d912bed509&
- **Notes:** Verified HTTP 200 and `application/x-msdos-program` when added. Discord CDN links expire — ask for a fresh link if the download stops working.

### 2026-11-25 — Manager (menu change logs)

- **Tag:** Not a mod (manager)
- **Version:** —
- **What changed:** Added `WpfApp3/MenuChangeLogs/*.md` — one change log per menu. The manager reads them on each mod's **LOG** button; the files are copied to the output/publish folders and embedded in the EXE so a portable build still shows them.
- **Download:** Project source — `WpfApp3/MenuChangeLogs/`
- **Notes:** Newest entries go at the top of each menu file. Adding a file with the mod id (for example `poison-menu.md`) is enough to wire it up.

### 2026-11-25 — Poison Menu

- **Version:** Room Information Overlay 2.0
- **Added:** Room Information Overlay — Map (City, Forest, Mountains, Vstump, etc), Players (5/10), Gamemode (Casual, Infection, etc), Queue (Default, Competitive, Minigames, etc), and room status so you know if you're still in a code (Yes / Maybe / No-left).
- **Removed:** Nothing.
- **Fixed:** Vstump room codes showing a `C` at the start without the `@` (codes like `CSNAKE764` now display properly); platform indicator saying everyone is on Steam (Quest players show correctly now); internal game API drift so the menu keeps working after the last game update.
- **Known issue:** The platform indicator is still a best guess — some players may show the wrong platform.

### 2026-11-25 — ZynxGTGold

- **Tag:** ILLEGAL
- **Version:** Latest — `ZynxGTGold.dll` (48,128 bytes)
- **What changed:** Added a new card with a direct download link, ILLEGAL badge and screenshot (`zynxgtgold.png`).
- **Download:** https://cdn.discordapp.com/attachments/1532383449682546729/1575268932925923408/ZynxGTGold.dll?ex=6b08ab04&is=6b075984&hm=ea67496d262e5afc0bb7fe6ae0cf11db8fe7f1c27f93f69907da8d3ec0002f69&
- **Notes:** Superseded by the updated `ZynxGTGold.dll` entry above. Discord CDN links expire — ask for a fresh link if the download stops working. Verified HTTP 200 when added.

### 2026-11-25 — Manager

- **What changed:** Added this change log. It is copied into both the Windows portable release and the cross-platform builds.

## All menus

These are the menus already in the manager. Add new dated entries above as they are updated.

### Seralyth Remake

- **Tag:** LEGAL + ILLEGAL (mixed — depends on the build)
- **Version:** All builds — 13 versions in one card
- **What changed:** One card with a version picker; picks `Seralyth Remake <version>.dll` from the configured folders, otherwise asks for the file.
- **Download:** Local DLLs; source https://github.com/1x1x1x1736/api
- **Notes:** Builds: Classic, Client, Debug, Free, Legacy, Legal, Lite, Pro, Reborn, Redux, Reforged, Trial, Ultra.

### Novalight

- **Tag:** ILLEGAL
- **Version:** 1.0.0
- **What changed:** Added with a direct download link and screenshot; installs as `Novalight.dll`.
- **Download:** https://cdn.discordapp.com/attachments/1562658015532941434/1574965563552174110/Novalight.dll?ex=6b07907b&is=6b063efb&hm=d96f22f25805b31ce151fec69ee05dbd2aa151052e1b7a39a85a449e3fa7b008
- **Notes:** Discord CDN link — may expire; ask for a fresh link if needed.

### Spectral

- **Tag:** ILLEGAL
- **Version:** 1.0.0
- **What changed:** Added as a local DLL card with screenshot; installs as `Spectral Menu.dll`.
- **Download:** Local file — `~/Downloads/Spectral Menu.dll`
- **Notes:** No file picker needed while the local file exists.

### Malachi Reborn

- **Tag:** ILLEGAL
- **Version:** 1.0.0
- **What changed:** Added with a direct download link and screenshot; installs as `Malachis_Menu_Reborn.dll`.
- **Download:** https://cdn.discordapp.com/attachments/1186432105656373308/1572742092583735386/Malachis_Menu_Reborn.dll?ex=6b0762b7&is=6b061137&hm=e0cb374f717a17c0c8e1f6266c5e4f1acad0907696afcdb390bc130517a38314
- **Notes:** Discord CDN link — may expire; ask for a fresh link if needed.

### Bark

- **Tag:** LEGAL
- **Version:** 3.0.2
- **What changed:** Added from the GitHub 3.0.2 release with a source-code button; installs as `Bark.dll`.
- **Download:** https://github.com/NgbatzYT/Bark/releases/download/3.0.2/Bark.dll
- **Notes:** Source: https://github.com/NgbatzYT/Bark

### Poison Menu

- **Tag:** LEGAL + ILLEGAL (mixed — depends on the build)
- **Version:** All builds — Legal and Illegal in one card
- **What changed:** One card with a version picker; Legal uses the local DLL, Illegal downloads the GitHub release.
- **Download:** https://github.com/heycanihavethis/Poison/releases/download/5.1.8beta/Poison.Menu.dll
- **Notes:** Source: https://github.com/heycanihavethis/Poison
- **Latest update:** Room Information Overlay 2.0 — see the dated entry above.

### Lag Menu

- **Tag:** ILLEGAL
- **Version:** Latest
- **What changed:** Added with a direct download link, source-code button and screenshot; installs as `LagMenu.dll`.
- **Download:** https://cdn.discordapp.com/attachments/1571355396935917660/1575025462684553296/LagMenu.dll?ex=6b07c844&is=6b0676c4&hm=a943194a2c7c33a6e1d5b70b03536b1a323001d606324652b7974cd13ee2ab4e
- **Notes:** Source: https://gitlab.com/Mrlag/lagmenu

### StupidTemplate

- **Tag:** ILLEGAL
- **Version:** Latest
- **What changed:** Added with a direct download link; installs as `StupidTemplate.dll`.
- **Download:** https://cdn.discordapp.com/attachments/1516375659419537478/1575036467502383197/StupidTemplate.dll?ex=6b07d284&is=6b068104&hm=b79df84af84ea2fde6d0ad987c841f6cb11dc454e3879ae17b08dfcbdd0cc6fb&
- **Notes:** Discord CDN link — may expire; ask for a fresh link if needed.
