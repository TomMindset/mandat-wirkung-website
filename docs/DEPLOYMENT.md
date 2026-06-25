# Deployment-Hinweise

## Empfohlene Grundentscheidung

Für die Live-Domain ist die Canonical URL im Projekt auf `https://www.mandat-wirkung.de` ausgerichtet.

Die Apex-Domain sollte auf `www` weiterleiten:

```txt
https://mandat-wirkung.de -> https://www.mandat-wirkung.de
```

## Build-Einstellungen

Für GitHub-basierte Deployments:

```txt
Framework: Astro
Install Command: pnpm install
Build Command: pnpm build
Output Directory: dist
Node Version: aktuelle LTS-Version
```

## GitHub Pages

Der GitHub-Pages-Workflow liegt unter:

```txt
.github/workflows/deploy.yml
```

Im Repository muss im Root Folgendes sichtbar sein:

```txt
.github/workflows/deploy.yml
astro.config.mjs
package.json
pnpm-lock.yaml
public/
src/
tailwind.config.mjs
tsconfig.json
```

In GitHub:

1. Repository öffnen.
2. `Settings` anklicken.
3. `Pages` öffnen.
4. Unter `Build and deployment` als Source `GitHub Actions` wählen.
5. Unter `Custom domain` `www.mandat-wirkung.de` eintragen.
6. Nach erfolgreichem Deployment `Enforce HTTPS` aktivieren, sobald GitHub die Option freigibt.

Die Datei `public/CNAME` enthält die Custom Domain für den Build:

```txt
www.mandat-wirkung.de
```

## STRATO DNS

STRATO kann weiterhin Domain-, DNS- und E-Mail-Anbieter bleiben. Das Website-Hosting läuft in dieser Variante über GitHub Pages.

Für `www.mandat-wirkung.de` wird bei STRATO ein CNAME auf die GitHub-Pages-Default-Domain gesetzt:

```txt
TomMindset.github.io
```

Für die Apex-Domain `mandat-wirkung.de` die von GitHub genannten A-Records setzen:

```txt
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Optional zusätzlich die von GitHub genannten AAAA-Records für IPv6 setzen.

Wichtig: Keine Wildcard-DNS-Einträge wie `*.mandat-wirkung.de` verwenden.

DNS-Änderungen können bis zu 24 Stunden benötigen.

## STRATO Webspace

Nur falls später doch ein STRATO-Paket mit Webspace genutzt wird, kann der Inhalt des Astro-Build-Ordners `dist/` direkt in den Webspace hochgeladen werden. Dann muss die Datenschutzerklärung wieder auf STRATO als Hostinganbieter angepasst werden.

Wichtig:

- Vor dem Upload lokal `pnpm build` ausführen.
- Den Inhalt von `dist/` hochladen, nicht das gesamte Projekt.
- Nach dem Upload prüfen, ob `/`, `/kontakt`, `/impressum` und `/datenschutz` erreichbar sind.
- SSL für `www.mandat-wirkung.de` aktivieren.
- Apex-Domain `mandat-wirkung.de` auf `www.mandat-wirkung.de` weiterleiten.

## Vercel, Netlify oder Cloudflare Pages

Alternativ kann das GitHub Repository mit einem Deployment-Anbieter verbunden werden.

### Vercel

1. GitHub Repository mit Vercel verbinden.
2. Projekt importieren.
3. Build Command: `pnpm build`.
4. Output Directory: `dist`.
5. Domain `www.mandat-wirkung.de` hinzufügen.
6. Apex-Domain `mandat-wirkung.de` hinzufügen und Redirect auf `www` konfigurieren.
7. DNS-Werte exakt aus Vercel übernehmen.

### Netlify

1. GitHub Repository mit Netlify verbinden.
2. Build Command: `pnpm build`.
3. Publish Directory: `dist`.
4. Domain `www.mandat-wirkung.de` unter Domain Management hinzufügen.
5. Apex-Domain ergänzen und Redirect auf `www` prüfen.
6. DNS-Werte exakt aus Netlify übernehmen.

### Cloudflare Pages

1. GitHub Repository mit Cloudflare Pages verbinden.
2. Framework Preset: Astro.
3. Build Command: `pnpm build`.
4. Build Output Directory: `dist`.
5. Custom Domain `www.mandat-wirkung.de` hinzufügen.
6. Apex-Domain und Redirect auf `www` konfigurieren.
7. DNS-Werte exakt aus Cloudflare übernehmen.

## E-Mail

Finale öffentliche Kontaktadresse:

```txt
anfrage@mandat-wirkung.de
```

Vor Livegang prüfen:

- SPF
- DKIM
- DMARC
- Versandtest an Gmail, Outlook und eigene Adresse

## Livegang-Checkliste

- `pnpm check` läuft ohne Fehler.
- `pnpm build` läuft ohne Fehler.
- `/kontakt`, `/impressum` und `/datenschutz` sind erreichbar.
- Datenschutzerklärung enthält das tatsächliche Livegang-Datum.
- SSL ist aktiv.
- Canonical URLs zeigen auf `https://www.mandat-wirkung.de`.
- Weiterleitung von `mandat-wirkung.de` auf `www.mandat-wirkung.de` ist aktiv.
