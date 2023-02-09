# Musik Plattform zum Connecten [Name?]

// Adesso Notebook Projekt konfiguriert

- Problem: Musiker außerhalb der eigenen Bubble finden?
- Lösung:
- Musiker zusammenbringen

  - Was kann die Person?
  - Was sucht die Person?

- Registrierung [optional]
  - Single Sign-On
  - Auth0
- Onboarding Wizard
  - Pseudonym [Künstlernamen] (mandatory)
  - Welche Instrument spielt man selbst
  - Selbsteinschätzung mit dem Instrument
  - Abfrage nach Genres (optional)
    - 0-3 Genres
- Profilansicht (Konsument)
  - Avataranzeige
  - Pseudonym
    - oder Vollnamen, falls vorhanden
  - Hauptinstrument anzeigen
  - Expertengrad
  - Audiospuren (veröffentlicht)
- Profilverwaltung (Domäne)

  - Persönliche Details verwalten
    - Pseudonym (mandatory)
    - Vollname (optional)
    - Genres (optional)
    - Avatar-Auswahl (Gravatar)
    - Hauptinstrument einstellen
      - Auswahl aus der Instrumenten gruppe
    - Erfahrung (optional)
      - 1 Jahr, 2 Jahre.. etc
  - Instrumenteverwaltung
    - Instrument hinzufügen
      - Instrument auswählen
        - Aus vordefinierter Liste
      - Musikinstrumentunterteilung (Definition finden)
        - Vordefinierte Liste aus Unterkategorien des Instruments
      - Erfahrung (optional)
        - 1 Jahr, 2 Jahre.. etc
      - Selbsteinschätzung (optional)
        - Anfänger, Fortgeschritten, Experte
  - Audiospurenverwaltung [Erfordert backend für echte Umsetzung]
    - Filter
    - Audiospur erstellen
      - Titel (mandatory)
      - Länge/Dauer (mandatory, wird aus der Tonspur ausgelesen)
      - Genre (mandatory)
      - Interpreten -> andere Profile (optional)
      - Coverbild-Upload (optional)
      - Audiospur-Upload (mandatory)
      - Veröffentlichen (optional)
    - Audiospur editieren
      - Alles kann editiert
    - Audiospur löschen

- Online-Jamen
  - Live-Music
- Andere Musikpeers
- Upload von Musik/Videos
- Music Wall (Instagram, Algo)
