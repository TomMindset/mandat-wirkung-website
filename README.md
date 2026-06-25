# Mandat & Wirkung

Moderne, statisch generierte Astro-Website für die diskrete Premium-Coaching-Marke **Mandat & Wirkung**.

## Stack

- Astro
- TypeScript
- Tailwind CSS
- statische Seitengenerierung
- SEO-Metadaten pro Seite
- lokale Styles, keine externen Fonts
- keine Analytics und kein Tracking im Startzustand

## Domain und Kontakt

- Primäre Domain: `https://www.mandat-wirkung.de`
- Kontakt: `anfrage@mandat-wirkung.de`
- Hosting: GitHub Pages
- Domain/DNS und E-Mail: STRATO möglich

## Entwicklung

```bash
pnpm install
pnpm dev
```

## Build und Checks

```bash
pnpm check
pnpm build
pnpm preview
```

## Seiten

- `/`
- `/anlaesse`
- `/coaching`
- `/arbeitsweise`
- `/ueber`
- `/kontakt`
- `/impressum`
- `/datenschutz`
- `/fuehrungskraefte-coaching`
- `/laterale-fuehrung-coaching`
- `/rollenklaerung-fuehrungskraft`
- `/coaching-transformation-fuehrungskraft`
- `/coaching-digitale-transformation`
- `/ki-transformation-fuehrung`

## Deployment

Details stehen in [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).

Für GitHub Pages ist der Workflow unter `.github/workflows/deploy.yml` vorbereitet.

Für manuelle Build-Prüfungen:

```txt
Install Command: pnpm install
Build Command: pnpm build
Output Directory: dist
```

## Offene TODOs

- Datum des Livegangs in `/datenschutz` eintragen.
- Falls später ein Kontaktformular, Terminbuchungstool, Analytics oder externe Inhalte eingesetzt werden, Datenschutz entsprechend ergänzen.
- Finale rechtliche Prüfung von `/impressum` und `/datenschutz` vor Veröffentlichung durchführen.
