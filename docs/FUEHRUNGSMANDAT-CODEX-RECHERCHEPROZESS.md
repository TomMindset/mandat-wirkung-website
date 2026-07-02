# Codex-Rechercheprozess für Fuehrungsmandat.de

## Leitentscheidung

Codex ist der Redaktionsraum. GitHub ist die Produktionsstrecke.

Die wissenschaftliche Themenrecherche soll zunächst nicht automatisch in GitHub laufen, sondern als geplante Codex-Aufgabe. Das ist sinnvoller, weil die entscheidende Arbeit nicht das Finden von Quellen ist, sondern die redaktionelle Bewertung:

- Ist die Quelle wirklich führungsrelevant?
- Passt das Thema zu Rolle, Mandat, Verantwortung und Wirkung?
- Wird wissenschaftliche Evidenz vorsichtig genug verwendet?
- Entsteht daraus eine konkrete Führungsfrage?
- Sollte daraus ein Artikel werden, oder nur eine Notiz im Themenradar?

## Empfohlener Rhythmus

### Wöchentlich

Kurzer Themenradar:

- neue Quellen und Fundstellen prüfen,
- 3 bis 5 Themenideen vorschlagen,
- offensichtlich schwache Treffer verwerfen,
- gute Themen in `content-ideas.json` oder `content-ideas-web.json` festhalten.

### Monatlich

Redaktionssitzung:

- Themenideen bündeln,
- 4 bis 6 Artikelkandidaten auswählen,
- Briefings schärfen,
- Quellen freigeben,
- geeignete Themen nach `content-plan.json` übernehmen.

### Quartalsweise

Strategische Prüfung:

- Themencluster ausbalancieren,
- Suchanfragen nachschärfen,
- bestehende Artikel auf Aktualisierungspotenzial prüfen,
- Mandat-&-Wirkung-Brücken bewerten.

## Arbeitsteilung

### Codex

- recherchiert online,
- prüft Quellen,
- verdichtet Themenideen,
- formuliert Mandatsfragen,
- pflegt den Redaktionsplan,
- schlägt Prompt-Anpassungen vor.

### GitHub

- erzeugt Artikel-Drafts aus freigegebenem Plan,
- öffnet Pull Requests,
- führt Content-Checks und Builds aus,
- deployed nach Freigabe.

## Ergebnisformate

Rechercheideen:

- `fuehrungsmandat/content-ideas.json`
- `fuehrungsmandat/content-ideas-web.json`
- `fuehrungsmandat/content-plan-candidates.json`

Quellenmaterial:

- `fuehrungsmandat/research/openalex-sources.json`
- `fuehrungsmandat/research/openai-web-search-response.json`

Redaktionsplan:

- `fuehrungsmandat/content-plan.json`

Aufgabenspezifikation:

- `docs/FUEHRUNGSMANDAT-THEMENRADAR-CODEX-AUFGABE.md`

Wiederverwendbarer Prompt:

- `fuehrungsmandat/prompts/codex-themenradar.md`
- `fuehrungsmandat/prompts/topic-evaluation.md`

Bewertungsagent:

- `docs/FUEHRUNGSMANDAT-BEWERTUNGSAGENT.md`
- `fuehrungsmandat/evaluation/topic-scoring-schema.json`
- `fuehrungsmandat/scripts/evaluate-topics.mjs`

## Freigabelogik

Eine Themenidee wird erst dann produktionsfähig, wenn sie:

1. eine klare Führungsfrage enthält,
2. eine belastbare oder zumindest seriöse Quellenbasis hat,
3. nicht nach Beratungsclaim klingt,
4. zu Fuehrungsmandat.de passt,
5. eine diskrete Brücke zu Mandat & Wirkung erlaubt.

Erst danach wird sie in `content-plan.json` übernommen.

Die technische Übernahme erfolgt über Kandidaten:

1. Themenradar empfiehlt Themen.
2. Kandidaten werden in `content-plan-candidates.json` abgelegt.
3. Redaktion gibt einzelne Kandidaten frei.
4. `pnpm --dir fuehrungsmandat content:promote -- --id=<candidate-id>` übernimmt den Eintrag in `content-plan.json`.

## Datumsplanung für Artikelentwürfe

Ein Thema im `content-plan.json` ist erst dann für die automatische Ausarbeitung fällig, wenn es ein gültiges `draftAfter`-Datum im Format `YYYY-MM-DD` enthält und dieses Datum erreicht ist.

Optionale Planungsfelder:

- `draftAfter`: Datum, ab dem der Auto-Draft-Workflow einen Artikelentwurf erzeugen darf.
- `publishOn`: redaktioneller Zieltermin für Veröffentlichung oder Review-Entscheidung.

Regeln:

- `publishOn` darf nur zusammen mit `draftAfter` gesetzt werden.
- `publishOn` darf nicht vor `draftAfter` liegen.
- Ohne `draftAfter` bleibt ein `planned`-Thema im Plan, wird aber nicht automatisch durch OpenAI ausformuliert.
- Die Veröffentlichung bleibt weiterhin manuell: Ein Artikel geht erst live, wenn `draft: false` gesetzt und der PR nach `main` gemergt wird.

## Geplante Aufgabe

Die geplante Codex-Aufgabe sollte den Auftrag `Fuehrungsmandat Themenradar` verwenden.

Empfohlener Zeitplan:

- wöchentlich montags,
- vormittags,
- Ergebnis als redaktionelle Zusammenfassung im Codex-Thread,
- keine automatische Veröffentlichung,
- keine automatische Änderung an `content-plan.json` ohne redaktionelle Entscheidung.
