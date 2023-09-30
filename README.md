# <img src="./static/img/logo/netzwerk.png" width="35" /> Cubyx Website

## Version V3 - SvelteKit

Dies ist die aktuelle Version der Cubyx Website. Sie befindet sich in eigenständiger Entwicklung und wird durch das Development Team betreuut.

Um das Projekt in dieser Form realisieren zu können, kommen unter Anderem folgende Open Source Projekte zum Einsatz:

- [TypeScript](https://github.com/microsoft/TypeScript)
- [Svelte](https://github.com/sveltejs/svelte)
- [SvelteKit](https://github.com/sveltejs/kit)
- [TailwindCSS](https://github.com/tailwindlabs/tailwindcss)
- [DaisyUI](https://github.com/saadeghi/daisyui)

### Entwicklung

Um an der Website zu arbeiten, muss diese zunächst geklont werden. Nutze dazu entweder die GitHub Desktop App (oder ähnliche Anwendung) oder führe folgenden Befehl in der Konsole aus:

```bash
git clone https://github.com/Cubyx-Network/website.git
```

oder mit SSH:

```bash
git clone git@github.com/Cubyx-Network/website.git
```

Anschließend müssen die Dependencies mit `npm install` installiert werden.

```bash
npm install
```

> ⚠️ Bitte beachte die Nutzung von NPM als Package Manager. Andernfalls könnten fremde lock Dateien (bspw. yarn.lock) in das Repository gelangen.

### Konfiguration und Datenbank

Eine Übersicht über die Konfigurationsmöglichkeiten findest du in `.env.example`. Die Konfiguration findet jedoch in der `.env` statt. Kopiere dazu die Vorlage und füge die entsprechenden Werte ein.

Für die Datenbank kommt PrismaJS in Verbindung mit SQLite zum Einsatz. Sollte einmal die lokale Datenbank aufgrund von Datenbankänderungen nicht mehr im sync sein, oder initial erstellt werden müssen, so führe diesen Befehl aus:

```bash
npm run prisma:deploy
```

### Ausführen

Um die Website lokal zu testen, führe folgenden Befehl aus:

```bash
npm run dev
```

### Bauen

Um die Website zu bauen, führe folgenden Befehl aus:

```bash
npm run build
```

Die fertige SvelteKit App befindet sich anschließend im `build` Ordner.
