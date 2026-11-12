import type { TechniqueSheet } from "./types";

export const part2Techniques: TechniqueSheet[] = [
  {
    slug: "breakfall-posteriore",
    part: 2,
    chapter: 1,
    title: "Caduta protettiva posteriore e laterale",
    en: "Back & Side Breakfall",
    level: "Intermedio",
    summary:
      "Caduta ammortizzata che distribuisce l'impatto su grandi superfici muscolari, protegge testa e colonna e lascia il praticante pronto a difendersi da terra.",
    biomechanics: {
      weight: "Abbassare il baricentro prima della caduta: ogni centimetro in meno riduce l'energia d'impatto.",
      lever: "Rotolare lungo la schiena come un dondolo (sacro → dorso) invece di cadere piatti.",
      timing: "Le braccia toccano terra un istante prima del dorso, a 45° dal busto, con palmi aperti.",
    },
    phases: [
      { steps: ["Ginocchia flesse, mento al petto.", "Braccia davanti al corpo, incrociate o avanti."], cue: "Mento giù, sempre." },
      {
        steps: [
          "Sedersi vicino al tallone e rotolare all'indietro sulla schiena arrotondata.",
          "Braccia a 45°, palmi battono a terra per dissipare l'energia.",
          "Su superfici rigide: ridurre il battito, aumentare la rotolata.",
        ],
        cue: "Rotola, non cadere.",
      },
      {
        steps: ["Gambe subito in guardia a terra: piedi verso l'aggressore.", "Calci di arresto alle ginocchia se si avvicina."],
        cue: "A terra con i piedi tra te e lui.",
      },
      { steps: ["Rialzata tattica (vedi Technical Stand-up).", "Scanning prima e dopo la rialzata."], cue: "Su, in guardia, guarda." },
    ],
    errors: ["Mettere le mani dietro per fermare la caduta (rischio frattura del polso).", "Testa che rimbalza a terra.", "Cadere rigidi e piatti."],
    drill: [
      "Da seduti, poi accovacciati, poi in piedi: 10 ripetizioni per livello.",
      "Caduta laterale alternata destra/sinistra.",
      "Caduta su spinta inattesa del partner (su tatami).",
    ],
    clip: {
      seconds: 6,
      shots: [
        { t: "0–2 s", desc: "Laterale: abbassamento e mento al petto." },
        { t: "2–4 s", desc: "Ralenti: rotolata e battuta delle braccia a 45°." },
        { t: "4–6 s", desc: "Guardia a terra con piedi alti." },
      ],
      overlays: ["Arco della schiena arrotondata", "Angolo delle braccia a 45°"],
    },
    image: "ground",
  },
  {
    slug: "bridge-and-roll",
    part: 2,
    chapter: 1,
    title: "Uscita dalla monta: Bridge & Roll",
    en: "Mount Escape — Bridge & Roll",
    level: "Intermedio",
    summary:
      "Fuga dalla posizione di monta (aggressore seduto sul busto) bloccando un braccio e una gamba dello stesso lato, poi esplodendo con il ponte per ribaltarlo.",
    biomechanics: {
      weight: "Il peso dell'aggressore poggia sulle anche del difensore: il ponte lo solleva e lo sposta avanti, sbilanciandolo.",
      lever: "Bloccare braccio e piede dello stesso lato elimina la sua base d'appoggio: si rotola verso il lato senza sostegno.",
      timing: "Il ponte parte quando l'aggressore si sbilancia in avanti (es. mentre colpisce o strangola).",
    },
    phases: [
      { steps: ["Gomiti stretti, avambracci a protezione del volto.", "Piedi vicino ai glutei."], cue: "Proteggi, poi muovi." },
      {
        steps: [
          "Agganciare il braccio dell'aggressore (sopra il gomito) al proprio petto.",
          "Piede dello stesso lato bloccato all'esterno del suo piede.",
          "Ponte esplosivo verso l'alto e diagonale sulla spalla opposta.",
        ],
        cue: "Blocca, ponte, gira.",
      },
      {
        steps: ["Atterrare nella sua guardia con postura alta.", "Colpi di palmo o hammerfist, poi rialzata."],
        cue: "Sopra non si resta: si colpisce e ci si alza.",
      },
      { steps: ["Technical stand-up per rialzarsi.", "Scanning e distanza."], cue: "Mai restare a terra più del necessario." },
    ],
    errors: ["Ponte senza bloccare braccio e piede: l'aggressore mette la base.", "Spingere con le braccia distese (rischio leva al gomito).", "Rotolare verso il lato sbagliato."],
    drill: [
      "Ponte isolato: 3 × 15 ripetizioni.",
      "Partner in monta passiva: tecnica completa 10 per lato.",
      "Partner in monta con colpi leggeri con guantoni: uscita sotto pressione.",
    ],
    clip: {
      seconds: 8,
      shots: [
        { t: "0–2 s", desc: "Dall'alto: posizione di monta." },
        { t: "2–5 s", desc: "Dettaglio: blocco braccio e piede dello stesso lato." },
        { t: "5–8 s", desc: "Laterale: ponte e ribaltamento." },
      ],
      overlays: ["Triangolo della base dell'aggressore con il lato tolto", "Vettore del ponte in diagonale"],
    },
    image: "ground",
  },
  {
    slug: "technical-stand-up",
    part: 2,
    chapter: 1,
    title: "Rialzata tattica",
    en: "Technical Stand-up",
    level: "Intermedio",
    summary:
      "Metodo per rialzarsi da terra mantenendo protezione e distanza: una mano a terra, l'altra in guardia, gamba che calcia e si ritira dietro la linea del corpo.",
    biomechanics: {
      weight: "Il peso è su tre appoggi (mano, piede, anca) e passa a due (mano, piede) prima di tornare in piedi.",
      lever: "L'anca sollevata passa sotto il corpo, creando un ponte: la testa resta sempre dietro la linea dei piedi.",
      timing: "Si esegue quando l'aggressore è fuori distanza di calcio o dopo un calcio d'arresto.",
    },
    phases: [
      { steps: ["Seduti di lato, mano posteriore a terra dietro l'anca.", "Mano anteriore in guardia, gamba anteriore alta a protezione."], cue: "Tre appoggi, un occhio su di lui." },
      {
        steps: ["Sollevare l'anca su mano e piede di base.", "La gamba libera passa sotto e dietro.", "Arrivare in guardia con il piede appena ritirato dietro."],
        cue: "Anca su, gamba dietro.",
      },
      { steps: ["Se l'aggressore si avvicina: calcio d'arresto prima di rialzarsi.", "Già in piedi: colpo d'arresto con le mani."], cue: "Prima tieni lontano, poi alzati." },
      { steps: ["Arretrare di due passi.", "Scanning completo."], cue: "In piedi, a distanza, attento." },
    ],
    errors: ["Rialzarsi in avanti con la testa verso l'aggressore.", "Togliere entrambe le mani da terra troppo presto.", "Rialzarsi senza guardare."],
    drill: ["10 rialzate per lato, lente.", "Il partner si avvicina a ritmo variabile: calcio d'arresto o rialzata.", "Dopo 30 s di lavoro a terra, rialzata e sprint verso un'uscita."],
    clip: {
      seconds: 5,
      shots: [
        { t: "0–2 s", desc: "Laterale: posizione a tre appoggi." },
        { t: "2–5 s", desc: "Passaggio della gamba e ritorno in guardia." },
      ],
      overlays: ["Linea testa–piedi", "Tre appoggi evidenziati"],
    },
    image: "ground",
  },
  {
    slug: "difesa-coltello-360",
    part: 2,
    chapter: 2,
    title: "Difesa a 360° da attacco con coltello",
    en: "360° Knife Defense",
    level: "Avanzato",
    summary:
      "Sistema di deviazione con l'avambraccio per attacchi da ogni angolo (sopra, lato, sotto), sincronizzato con contrattacco simultaneo e controllo del braccio armato.",
    biomechanics: {
      weight: "Il peso va verso l'aggressore: la deviazione funziona solo se ci si chiude dentro la sua distanza.",
      lever: "L'avambraccio deviante incontra il braccio armato sopra il polso, con il gomito a 90°: è l'angolo più robusto.",
      timing: "Deviazione e contrattacco sono simultanei (burst): lo stesso tempo, non due tempi.",
    },
    phases: [
      {
        steps: ["Lettura pre-conflitto: mano nascosta, spalla che arretra, sguardo verso il bersaglio.", "Guardia passiva con mani alte e aperte."],
        cue: "Vedere l'arma prima che sia vista.",
      },
      {
        steps: [
          "Deviazione con l'avambraccio corrispondente all'angolo d'attacco (7 angoli del 360°).",
          "Contemporaneo colpo di palmo o pugno al volto con l'altra mano.",
          "Passo in avanti a chiudere la distanza.",
        ],
        cue: "Devia e colpisci insieme.",
      },
      {
        steps: [
          "Controllo del braccio armato: avvolgere sopra il gomito, bloccarlo al proprio corpo.",
          "Ginocchiate e colpi fino a neutralizzazione.",
          "Disarmo solo quando il controllo è totale.",
        ],
        cue: "Controlla il braccio, non il coltello.",
      },
      {
        steps: ["Uscita con o senza arma, verso una via di fuga.", "Scanning e autocontrollo delle ferite (vedi gestione del sanguinamento)."],
        cue: "Controlla te stesso: l'adrenalina nasconde i tagli.",
      },
    ],
    errors: [
      "Cercare di afferrare la lama o il polso in movimento.",
      "Deviare e poi colpire (due tempi).",
      "Tentare il disarmo prima di aver neutralizzato.",
    ],
    kyusho: { point: "LI-10", note: "Durante il controllo, percussione sul nervo radiale per indurre il rilascio involontario dell'arma." },
    drill: [
      "Angoli del 360° senza partner: 7 deviazioni a ritmo crescente.",
      "Con coltello da allenamento in gomma, attacco lento a angolo noto.",
      "Angolo casuale a velocità reale con occhiali protettivi; verifica dei 'tagli' con coltello marcatore.",
    ],
    clip: {
      seconds: 8,
      shots: [
        { t: "0–2 s", desc: "Frontale: i 7 angoli del 360° disegnati come raggi." },
        { t: "2–5 s", desc: "Ralenti: deviazione e contrattacco simultanei." },
        { t: "5–8 s", desc: "Laterale: avvolgimento del braccio armato e ginocchiate." },
      ],
      overlays: ["Raggi dei 7 angoli d'attacco", "Punto d'impatto avambraccio-polso", "Marcatore di simultaneità"],
    },
    image: "expert",
  },
  {
    slug: "minaccia-arma-fuoco-frontale",
    part: 2,
    chapter: 2,
    title: "Minaccia frontale con arma da fuoco",
    en: "Frontal Gun Threat Defense",
    level: "Avanzato",
    summary:
      "Risposta a minaccia ravvicinata (arma a contatto o entro portata del braccio): deviazione istantanea della linea di fuoco, controllo della canna e neutralizzazione. Da eseguire solo quando la cooperazione non è un'opzione sicura.",
    biomechanics: {
      weight: "Il corpo esce dalla linea mentre le mani deviano: due movimenti, un solo istante.",
      lever: "La mano afferra la canna dall'alto; la rotazione del polso dell'aggressore verso il suo pollice ne rompe la presa.",
      timing: "Si agisce quando l'attenzione dell'aggressore è altrove (mentre parla, chiede, guarda): il tempo di reazione umano è circa 0,25 s.",
    },
    phases: [
      {
        steps: ["Valutare: richiesta materiale? Rispettare se possibile.", "Mani alte in segno di resa, vicino all'arma."],
        cue: "La resa è anche una posizione di partenza.",
      },
      {
        steps: [
          "Deviazione della canna fuori dalla linea del corpo.",
          "Contemporanea rotazione del busto fuori linea.",
          "Afferrare la canna e bloccarla.",
        ],
        cue: "Fuori dalla linea, prima di tutto.",
      },
      {
        steps: ["Contrattacco al volto con la mano libera.", "Rotazione dell'arma verso il pollice dell'aggressore per il disarmo, mantenendo la linea di fuoco lontana."],
        cue: "Linea di fuoco sempre fuori.",
      },
      { steps: ["Distanza con l'arma: mai restare nella sua portata.", "Scanning, ricerca di riparo, chiamata al 112."], cue: "Distanza, riparo, aiuto." },
    ],
    errors: ["Muovere prima il corpo o prima le mani (devono essere simultanei).", "Riportare la linea di fuoco sul proprio corpo o su terzi.", "Lottare per l'arma senza contrattaccare."],
    drill: [
      "Solo con armi da allenamento in plastica, mai con armi reali.",
      "Deviazione su comando verbale del partner.",
      "Scenario con distrazione: il partner parla e chiede, l'allievo sceglie il momento.",
    ],
    clip: {
      seconds: 7,
      shots: [
        { t: "0–2 s", desc: "Frontale: minaccia e mani in segno di resa." },
        { t: "2–4 s", desc: "Dall'alto: deviazione e rotazione del busto, linea di fuoco tracciata." },
        { t: "4–7 s", desc: "Disarmo e uscita a distanza." },
      ],
      overlays: ["Linea di fuoco in rosso", "Freccia di deviazione", "Area di sicurezza"],
    },
    image: "expert",
  },
  {
    slug: "scenario-stress-inoculation",
    part: 2,
    chapter: 3,
    title: "Scenario a sorpresa con occhiali oscurati",
    en: "Blackout Goggles Surprise Scenario",
    level: "Avanzato",
    summary:
      "Drill di inoculazione dello stress: l'allievo, privato della vista e affaticato, deve riconoscere un'aggressione appena tolti gli occhiali e scegliere la risposta corretta in meno di 2 secondi.",
    biomechanics: {
      weight: "La fatica sposta il peso sui talloni: il drill rinforza il ritorno sugli avampiedi.",
      lever: "Con la motricità fine degradata dallo stress si usano solo gesti grossolani: palmi, gomiti, ginocchia.",
      timing: "Stimolo → decisione → azione entro 2 s; valutazione video della latenza.",
    },
    phases: [
      {
        steps: [
          "Pre-affaticamento: 60–90 s di lavoro ad alta intensità.",
          "Occhiali oscurati, rotazione su se stessi guidata dall'istruttore.",
          "Protezioni: casco, paradenti, conchiglia; parola di stop concordata.",
        ],
        cue: "Il corpo sotto stress, la sicurezza sotto controllo.",
      },
      {
        steps: [
          "Al segnale: togliere gli occhiali e leggere lo scenario (presa, minaccia, colpo, più aggressori).",
          "Scegliere e applicare la tecnica del programma corrispondente.",
        ],
        cue: "Riconosci, decidi, agisci.",
      },
      {
        steps: ["Contrattacco su scudi o con partner protetto.", "Continuare fino al comando di stop."],
        cue: "Non ci si ferma finché la minaccia non è finita.",
      },
      {
        steps: ["Uscita verso la porta indicata.", "Debriefing: cosa hai visto, cosa hai deciso, perché.", "Controllo del respiro tattico (4-4-4-4)."],
        cue: "Il drill finisce con la parola, non con il colpo.",
      },
    ],
    errors: ["Aumentare lo stress senza progressione: blocco e apprendimento negativo.", "Saltare il debriefing.", "Allenare scenari che l'allievo non conosce ancora tecnicamente."],
    drill: [
      "Livello 1: scenario unico noto, solo fatica.",
      "Livello 2: scenario casuale tra 3, occhiali oscurati.",
      "Livello 3: più aggressori, rumore e luci, scelta della via di fuga.",
    ],
    clip: {
      seconds: 10,
      shots: [
        { t: "0–3 s", desc: "Allievo affaticato con occhiali oscurati." },
        { t: "3–5 s", desc: "Soggettiva: occhiali via, scenario rivelato." },
        { t: "5–10 s", desc: "Reazione, contrattacco su scudo, uscita." },
      ],
      overlays: ["Battito cardiaco stimato", "Cronometro di latenza decisionale"],
    },
    image: "stress",
  },
];
