# Seralyth Remake Mod Manager

A mod manager for Gorilla Tag with an animated interface, version pickers, LEGAL/ILLEGAL tags, embedded screenshots, local install counts, ranks, settings, guided tours, sounds, and session-only injection.

The repository contains two apps:

- `WpfApp3\` — the original Windows WPF manager.
- `Seralyth.Remake.Avalonia\` — the cross-platform Avalonia 11 manager for Windows, Linux and macOS.

Both apps share the same catalog, models and services, so features and tags stay in sync.

## Download

Stable site: **https://1x1x1x1736.github.io/Seralyth-Remake-mod-manager/** (GitHub Pages + GitHub Releases, no payment required).

Windows: get the portable `Seralyth.Remake.exe` from [GitHub Releases](https://github.com/1x1x1x1736/Seralyth-Remake-mod-manager/releases/latest). The installed build puts the manager in `%LOCALAPPDATA%\Seralyth Remake`, creates Start Menu and desktop shortcuts, and adds an entry to Apps & features.

Linux x64: download `Seralyth.Remake.Linux.x64.tar.gz` from [GitHub Releases](https://github.com/1x1x1x1736/Seralyth-Remake-mod-manager/releases/latest). Extract it, then run `Seralyth Remake` from the extracted folder. It is self-contained, so no .NET install is needed.

The manager bundles the updated Novalight, Malachi Reborn, Lag Menu and StupidTemplate DLLs; Lag Menu, Novalight and StupidTemplate also have stable GitHub Releases fallbacks. The Discord bot folder is not published because its `config.json` contains a live token — add your own private copy beside the EXE if you use the access bot.

macOS and other Linux architectures: build the Avalonia app with `Publish-CrossPlatform.ps1` (see below).

## Features

- One card per mod, with a version picker for mods that have multiple builds.
- LEGAL / ILLEGAL badges, including both badges where a mod has mixed versions.
- Download buttons point to the current release files; no source-code button is shown.
- Ranks category with a 1st / 2nd / 3rd podium.
- Local install counts, saved beside the EXE with a per-user fallback.
- Settings page for the plugins folder, app name, theme colour, five website-style palettes (Midnight, Ember, Matrix, Rose, Arctic), button sounds and a volume slider that goes up to 300%.
- Static website design picker: five colour palettes plus four layouts (Default, Compact, Glassy, Bold), saved per browser.
- Optional private GitHub auto-updates: point the manager at a private repo with `versions.json`, sign in with a GitHub device code, and changed DLLs are hash-verified before replacing existing installs. See [PRIVATE_GITHUB_UPDATES.md](PRIVATE_GITHUB_UPDATES.md).
- Public manager update notifier: on startup the Windows loader compares its version with the newest GitHub release. **Yes** downloads the new EXE from the website release now; **No** waits 5 minutes and then downloads it automatically. Downloads are checksum-verified and use a versioned filename.
- Lag Menu auto updater: on startup the manager fetches `http://lagmenu.lol/Install/LagMenu.dll`, verifies it, and uses the cached latest copy for install/inject. The bundled copy remains a fallback offline.
- Bundled Discord bot: the manager starts it on launch and stops it on exit. It creates an access panel with the loader-user role, code entry, code delivery in the channel or DMs, and **Redeem key** for paid access. The loader can also show a welcome card that issues a 4-digit role code; pasting it into **I have a code** grants Loader User only. Redeeming a purchased key grants the Buyer role and reuses your `LOADER-...` key. The bot config is kept private and is not included in the public download.
- Seralyth Remake now has 14 builds, including a key-gated **Paid** build that injects only. PAID badges appear on the card and details panel.
- Full screen with the title-bar button, **F11**, or double-clicking the title bar.
- Nine guided tours covering search, tags, the library, details, pictures, installing, injecting and settings.
- Pictures can be added from a file picker or dragged onto a card; embedded copies are used when files are missing.
- **Injecting** category: every mod can be loaded for one game session. Injection briefly stages the DLL in plugins, restarts Gorilla Tag through Steam so BepInEx loads it, then removes the DLL from plugins. The menu disappears when the game closes — press Inject again next time.
- Injection README text lives in code; your own notes are typed in the app and autosaved.

See [INJECTING.md](INJECTING.md) for step-by-step injection instructions and troubleshooting.
See [CHANGELOG.md](CHANGELOG.md) for a log of all menu updates, and [MenuChangeLogs](WpfApp3/MenuChangeLogs/README.md) for one change log per menu. Each menu's log is also available from its **LOG** button in the manager.

## Build from source

Requirements:

- .NET 9 SDK (the repo pins SDK `9.0.316` in `global.json`).
- Windows additionally needs the WPF workload for the original app.

Build both projects on Windows:

```cmd
dotnet build WpfApp3.slnx
```

Build only the cross-platform app on Linux or macOS:

```bash
dotnet build Seralyth.Remake.Avalonia/Seralyth.Remake.Avalonia.csproj
```

Run the Avalonia app:

```bash
dotnet run --project Seralyth.Remake.Avalonia/Seralyth.Remake.Avalonia.csproj
```

Run the Windows WPF debug build:

```cmd
WpfApp3\bin\Debug\net9.0-windows\Seralyth Remake.exe
```

### Windows portable build

```cmd
Release.cmd
```

This publishes a self-contained `win-x64` WPF build, verifies the required pictures, refreshes the ZIP in your Downloads folder, and creates the stable `publish\` folder used by the installers.

### Cross-platform builds

On Windows (PowerShell) or Linux/macOS (PowerShell 7 / `pwsh`):

```powershell
./Publish-CrossPlatform.ps1
```

This publishes self-contained Avalonia builds to:

```text
artifacts/win-x64
artifacts/linux-x64
artifacts/osx-arm64
artifacts/osx-x64
```

Add `-FrameworkDependent` for smaller folders if the target already has .NET 9 installed. Add `-RuntimeIdentifiers linux-x64` to publish just one platform.

Every **Release** build of the Windows manager also refreshes the self-contained Linux x64 package at
`Website/downloads/Seralyth.Remake.Linux.x64.tar.gz` through `Build-Linux.ps1`. Debug builds stay fast. Pass
`-p:SkipLinuxBuild=true` to `dotnet build` when you only want the Windows binary.

## Installers (Windows)

### Setup.exe

Install [Inno Setup 6](https://jrsoftware.org/isinfo.php), then run:

```cmd
Installer\BuildInstaller.cmd
```

The installer is written to `Installer\Output\Seralyth Remake Setup.exe`.

### No-dependency install

After running `Release.cmd`, double-click:

```cmd
Installer\Install.cmd
```

To remove it, run `Installer\Uninstall.cmd` from the installed folder, or use Apps & features.

## Layout

- `WpfApp3\` — Windows WPF app, XAML, converters, models, services, and embedded images.
- `Seralyth.Remake.Avalonia\` — Avalonia UI, AXAML, converters and app entry point.
- `WpfApp3\Services\` and `WpfApp3\Models\` — shared catalog, install/injection logic and persistence.
- `Installer\` — Inno Setup script, PowerShell installer/uninstaller, and build script.
- `Release.cmd` / `Release.ps1` — Windows portable WPF publish, image verification and ZIP creation.
- `Publish-CrossPlatform.ps1` — Avalonia builds for Windows, Linux and macOS.
- `WpfApp3.slnx` — solution file containing both apps.

## Notes

- Downloads and installs copy DLLs into the configured BepInEx plugins folder. Set it in Settings; defaults are:
  - Windows: `C:\Program Files (x86)\Steam\steamapps\common\Gorilla Tag\BepInEx\plugins`
  - Linux: `~/.steam/steam/steamapps/common/Gorilla Tag/BepInEx/plugins`
  - macOS: `~/Library/Application Support/Steam/steamapps/common/Gorilla Tag/BepInEx/plugins`
- Install counts are local to this app; there is no online counter.
- Injection closes and relaunches Gorilla Tag (Steam must be installed), then deletes the staged DLL once BepInEx has loaded it. If the menu doesn't appear, check `BepInEx\LogOutput.log`. Cached DLLs are stored under the per-user app-data folder.
- Native `CreateRemoteThread` injection is Windows-only; managed BepInEx DLLs use the staged path on every platform.
- Some hosted download links may expire over time. Ask for a fresh link if a download fails.
