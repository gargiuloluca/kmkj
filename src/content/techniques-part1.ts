import type { TechniqueSheet } from "./types";

export const part1Techniques: TechniqueSheet[] = [
  {
    slug: "guardia-dead-zone",
    part: 1,
    chapter: 1,
    title: "Guardia passiva e ingresso in Dead Zone",
    en: "Passive Stance & Dead Zone Entry",
    level: "Base",
    summary:
      "Guardia a mani aperte, non provocatoria, da cui ci si sposta fuori dalla linea d'attacco verso la zona cieca dell'aggressore (lato esterno del braccio dominante), dove le sue armi naturali perdono efficacia.",
    biomechanics: {
      weight: "55% avanti / 45% dietro, talloni leggermente sollevati, ginocchia flesse: il baricentro resta dentro la base d'appoggio in ogni direzione.",
      lever: "Gomiti chiusi davanti alle costole: gli avambracci formano un cuneo che protegge mento e linea centrale con il minimo sforzo muscolare.",
      timing: "L'ingresso parte sul primo segnale d'intenzione (spalla che arretra, peso che carica), non sul colpo già lanciato.",
    },
    phases: [
      {
        steps: [
          "Piedi alla larghezza delle spalle, piede debole avanti di mezzo passo, punte a 45°.",
          "Mani aperte all'altezza del petto, palmi in avanti (guardia 'di dialogo').",
          "Mento basso, sguardo periferico sulle spalle e sulle mani dell'aggressore.",
        ],
        cue: "Sembri calmo, sei pronto.",
      },
      {
        steps: [
          "Al segnale d'attacco, passo diagonale avanti-esterno con il piede del lato verso cui ci si muove.",
          "Il piede posteriore segue per ricostruire la guardia: mai incrociare i piedi.",
          "Il braccio più vicino intercetta e controlla il gomito o il tricipite dell'aggressore.",
        ],
        cue: "Fuori dalla linea, dentro la distanza.",
      },
      {
        steps: [
          "Dalla Dead Zone colpire i bersagli esposti: lato del collo, mandibola, rotula posteriore.",
          "Mantenere il controllo sul gomito per impedire la rotazione dell'aggressore verso di sé.",
        ],
        cue: "Lui deve girarsi per trovarti; tu no.",
      },
      {
        steps: [
          "Spinta sul gomito per creare distanza, arretrare in diagonale.",
          "Scanning a 360°: sinistra, destra, alle spalle; cercare altri aggressori e vie di fuga.",
        ],
        cue: "Distanza, sguardo, uscita.",
      },
    ],
    errors: [
      "Pugni chiusi e alti in fase pre-conflitto: comunicano aggressività e irrigidiscono le spalle.",
      "Passo laterale puro senza componente in avanti: si resta nella portata del secondo colpo.",
      "Guardare solo il volto dell'aggressore invece delle mani.",
    ],
    kyusho: {
      point: "GB-20",
      note: "La Dead Zone espone la nuca e la base del cranio: è il punto d'ingresso naturale per un colpo a martello su GB-20.",
    },
    drill: [
      "Shadow: 3 × 2 min di ingressi diagonali alternati a comando vocale.",
      "Con partner: il partner simula un pugno lento al petto, l'allievo entra in Dead Zone e tocca il gomito.",
      "Velocità piena con guantoni: il partner sceglie il braccio senza preavviso.",
    ],
    clip: {
      seconds: 8,
      shots: [
        { t: "0–2 s", desc: "Inquadratura frontale: guardia passiva, mani aperte." },
        { t: "2–5 s", desc: "Vista dall'alto: passo diagonale, linea d'attacco e Dead Zone disegnate a terra." },
        { t: "5–8 s", desc: "Laterale: controllo del gomito e arretramento con scanning." },
      ],
      overlays: ["Triangolo della Dead Zone in rosso", "Freccia del passo diagonale", "Proiezione del baricentro a terra"],
    },
    image: "hero",
  },
  {
    slug: "pendulum-step",
    part: 1,
    chapter: 1,
    title: "Pendulum step e scivolamenti sotto stress",
    en: "Pendulum Step & Stress Slides",
    level: "Base",
    summary:
      "Spostamento oscillante avanti/indietro che permette di entrare e uscire dalla distanza di colpo mantenendo la guardia intatta, anche in condizioni di affaticamento.",
    biomechanics: {
      weight: "Il peso oscilla tra avampiede anteriore e posteriore senza mai fermarsi a 50/50 sui talloni.",
      lever: "Le anche guidano il movimento, le spalle restano sopra le anche: nessuna inclinazione del busto.",
      timing: "L'ingresso coincide con il ritorno dell'aggressore dopo un suo colpo mancato (finestra di 0,3–0,5 s).",
    },
    phases: [
      {
        steps: [
          "Guardia attiva, peso sugli avampiedi.",
          "Piccoli rimbalzi ritmici di 2–3 cm, sempre con la stessa larghezza di base.",
        ],
        cue: "Leggero sui piedi, pesante nel centro.",
      },
      {
        steps: [
          "Spinta del piede posteriore: il piede anteriore scivola avanti di 20–30 cm.",
          "Il piede posteriore recupera la stessa distanza: la base non cambia.",
          "Uscita inversa: spinta del piede anteriore, scivolamento indietro.",
        ],
        cue: "Il primo piede che si muove è quello verso la direzione.",
      },
      {
        steps: [
          "Sull'ingresso, colpo di palmo o diretto sincronizzato con l'appoggio del piede anteriore.",
          "Uscita immediata dopo il colpo: entrare, colpire, uscire.",
        ],
        cue: "Il colpo arriva con il piede, non dopo.",
      },
      {
        steps: [
          "Arretrare di due pendoli fuori distanza.",
          "Scanning e verifica dell'assetto: mani alte, respiro controllato.",
        ],
        cue: "Fuori distanza, guardia intatta.",
      },
    ],
    errors: [
      "Saltare verso l'alto invece di scivolare in avanti.",
      "Avvicinare i piedi durante lo spostamento, perdendo la base.",
      "Abbassare le mani quando arriva la fatica.",
    ],
    drill: [
      "Scala di agilità: 6 ripetizioni avanti/indietro mantenendo la guardia.",
      "Pendolo + colpo su pao al segnale sonoro dell'istruttore.",
      "Versione sotto stress: 30 burpee e subito 1 min di pendoli con colpi su pao.",
    ],
    clip: {
      seconds: 6,
      shots: [
        { t: "0–2 s", desc: "Laterale stretto sui piedi: ritmo del pendolo." },
        { t: "2–4 s", desc: "Laterale intero: ingresso e colpo sincronizzato con l'appoggio." },
        { t: "4–6 s", desc: "Uscita e ritorno in guardia." },
      ],
      overlays: ["Linea della base costante tra i piedi", "Marcatore del momento d'impatto"],
    },
    image: "beginner",
  },
  {
    slug: "drill-reazione-condizionata",
    part: 1,
    chapter: 1,
    title: "Drill di reazione condizionata",
    en: "Conditioned Reaction Drill",
    level: "Base",
    summary:
      "Allenamento della risposta istintiva a stimoli visivi e sonori imprevedibili: l'obiettivo è trasformare il riflesso di sussulto naturale (flinch) in una guardia protettiva utile.",
    biomechanics: {
      weight: "Al sussulto il corpo si abbassa e si chiude: il drill insegna ad abbassare il baricentro invece di arretrare sui talloni.",
      lever: "Le braccia salgono a 'casco' attorno alla testa; i gomiti deviano, non bloccano.",
      timing: "Si misura il tempo tra stimolo e risposta: obiettivo sotto 0,4 s con risposta corretta.",
    },
    phases: [
      {
        steps: [
          "Posizione neutra, mani basse e rilassate (situazione quotidiana).",
          "Occhi su un punto fisso; l'istruttore si muove in visione periferica.",
        ],
        cue: "Nessuna anticipazione.",
      },
      {
        steps: [
          "Stimolo casuale: battito di mani, luce, colpo di pao, comando vocale.",
          "Risposta: mani alte a protezione, abbassamento del baricentro, passo fuori linea.",
        ],
        cue: "Il corpo si protegge, la mente si riaccende.",
      },
      {
        steps: [
          "Dopo la protezione, contrattacco immediato su pao (2–3 colpi).",
          "La sequenza deve diventare un unico gesto: protezione → attacco.",
        ],
        cue: "Dal sussulto all'offensiva senza pausa.",
      },
      {
        steps: ["Uscita verso la via di fuga indicata dall'istruttore.", "Scanning e conteggio ad alta voce degli elementi visti."],
        cue: "Esci e racconta cosa hai visto.",
      },
    ],
    errors: [
      "Indovinare lo stimolo: l'istruttore deve variare ritmo e tipo.",
      "Arretrare in linea retta dopo il sussulto.",
      "Fermarsi dopo la protezione senza contrattaccare.",
    ],
    drill: [
      "Livello 1: stimolo sonoro, risposta solo protettiva.",
      "Livello 2: stimolo visivo + contrattacco su pao.",
      "Livello 3: ad occhi chiusi, stimolo tattile (spinta) e risposta completa.",
    ],
    clip: {
      seconds: 6,
      shots: [
        { t: "0–2 s", desc: "Allievo rilassato, istruttore fuori fuoco sullo sfondo." },
        { t: "2–3 s", desc: "Stimolo improvviso e sussulto protettivo (rallentato 50%)." },
        { t: "3–6 s", desc: "Contrattacco su pao e uscita." },
      ],
      overlays: ["Cronometro stimolo → risposta", "Freccia del passo fuori linea"],
    },
    image: "stress",
  },
  {
    slug: "palm-strike",
    part: 1,
    chapter: 2,
    title: "Colpo di palmo (Palm Strike)",
    en: "Palm Heel Strike",
    level: "Base",
    summary:
      "Colpo con la base del palmo a dita flesse: trasferisce la potenza della catena cinetica senza rischio di frattura delle ossa della mano, ed è efficace su mento, naso e sterno.",
    biomechanics: {
      weight: "Il peso passa dal piede posteriore all'anteriore durante la rotazione: circa il 70% sull'avampiede anteriore all'impatto.",
      lever: "Catena cinetica piede → anca → spalla → palmo; polso esteso a 90° con l'avambraccio allineato dietro la base del palmo.",
      timing: "L'anca ruota prima della spalla; l'impatto avviene a gomito quasi disteso, con espirazione breve.",
    },
    phases: [
      {
        steps: ["Guardia attiva, distanza di un braccio.", "Mano posteriore aperta, dita leggermente flesse, pollice contro il palmo."],
        cue: "Mano a 'artiglio' rilassato.",
      },
      {
        steps: [
          "Spinta del piede posteriore e rotazione del tallone verso l'esterno.",
          "Rotazione dell'anca seguita dalla spalla; il palmo parte in linea retta dal mento.",
          "Impatto con la base del palmo, polso esteso, dita verso l'alto.",
        ],
        cue: "Il pavimento spinge, il palmo consegna.",
      },
      {
        steps: [
          "Follow-up: ginocchiata frontale mentre si tira la testa dell'aggressore verso il basso.",
          "In alternativa: secondo palmo con la mano anteriore.",
        ],
        cue: "Un colpo apre, la combinazione chiude.",
      },
      { steps: ["Ritorno in guardia lungo la stessa traiettoria.", "Distanza e scanning."], cue: "Torna dove sei partito." },
    ],
    errors: [
      "Colpire con le dita o il centro del palmo: perdita di trasferimento e rischio per le dita.",
      "Spingere invece di colpire: l'impatto deve penetrare 5–10 cm e tornare.",
      "Ruotare la spalla senza l'anca: colpo 'di braccio'.",
    ],
    kyusho: {
      point: "ST-9",
      note: "Una variante a mano tagliente diretta lateralmente sul collo sfrutta la stessa catena cinetica; in allenamento solo localizzazione, mai impatto.",
    },
    drill: [
      "Shadow lento 20 ripetizioni per lato, controllando l'ordine della catena cinetica.",
      "Su sacco pesante: 3 × 10 colpi con espirazione.",
      "Combinazione palmo + ginocchiata su scudo da impatto, 3 × 1 min.",
    ],
    clip: {
      seconds: 6,
      shots: [
        { t: "0–2 s", desc: "Laterale intero: guardia e carico." },
        { t: "2–4 s", desc: "Ralenti 30%: rotazione piede → anca → spalla → palmo." },
        { t: "4–6 s", desc: "Velocità reale: palmo + ginocchiata su scudo." },
      ],
      overlays: ["Frecce sequenziali sulla catena cinetica", "Allineamento avambraccio–palmo", "Spostamento del baricentro"],
    },
    image: "beginner",
  },
  {
    slug: "hammerfist",
    part: 1,
    chapter: 2,
    title: "Colpo a martello (Hammerfist)",
    en: "Hammerfist",
    level: "Base",
    summary:
      "Colpo con la parte carnosa del pugno (lato mignolo), in traiettoria discendente, orizzontale o all'indietro. È il colpo più sicuro per la mano e funziona anche a distanza ravvicinata o da terra.",
    biomechanics: {
      weight: "Nella versione discendente il peso cade con il colpo: piccola flessione delle ginocchia all'impatto.",
      lever: "Il gomito è il fulcro; l'avambraccio funziona come un martello. La rotazione del busto aggiunge velocità angolare.",
      timing: "Il pugno si chiude solo al momento dell'impatto per mantenere velocità.",
    },
    phases: [
      { steps: ["Guardia o posizione di presa ravvicinata.", "Pugno sciolto, gomito flesso a circa 90°."], cue: "Braccio carico come una frusta." },
      {
        steps: [
          "Traiettoria discendente: il pugno sale sopra la spalla e scende con il peso.",
          "Traiettoria orizzontale: rotazione del busto, impatto con il lato del pugno.",
          "Impatto con la parte carnosa, non con le nocche.",
        ],
        cue: "Il corpo cade, il pugno segue.",
      },
      {
        steps: ["Bersagli: naso, clavicola, base del cranio, avambraccio che impugna un'arma.", "Combinare con controllo dell'arto dell'aggressore."],
        cue: "Colpisci ciò che è esposto.",
      },
      { steps: ["Disimpegno con spinta.", "Scanning a 360°."], cue: "Colpisci, spingi, esci." },
    ],
    errors: [
      "Colpire con il polso piegato.",
      "Caricare troppo il colpo, rendendolo visibile.",
      "Fermare il colpo sulla superficie invece di attraversare il bersaglio.",
    ],
    kyusho: {
      point: "GB-20",
      note: "Hammerfist orizzontale dalla Dead Zone verso la base del cranio, con vettore diretto verso l'occhio opposto.",
    },
    drill: [
      "Su sacco a terra: 3 × 20 colpi discendenti alternati.",
      "Su pao tenuto lateralmente: hammerfist orizzontale con rotazione del busto.",
      "Da posizione supina: hammerfist su scudo tenuto dal partner.",
    ],
    clip: {
      seconds: 5,
      shots: [
        { t: "0–2 s", desc: "Frontale: traiettoria discendente." },
        { t: "2–4 s", desc: "Dall'alto: traiettoria orizzontale con rotazione del busto." },
        { t: "4–5 s", desc: "Dettaglio della superficie d'impatto." },
      ],
      overlays: ["Arco della traiettoria", "Evidenziazione della superficie d'impatto"],
    },
    image: "beginner",
  },
  {
    slug: "calcio-bersagli-bassi",
    part: 1,
    chapter: 2,
    title: "Calcio frontale ai bersagli bassi e ginocchiata",
    en: "Groin Kick & Front Knee",
    level: "Base",
    summary:
      "Calcio frontale con collo del piede o avampiede verso genitali e ginocchio, seguito da ginocchiata a corta distanza. Massima efficacia con il minimo rischio di perdere l'equilibrio.",
    biomechanics: {
      weight: "Il peso resta sulla gamba d'appoggio con il ginocchio flesso; il busto si inclina leggermente indietro per bilanciare.",
      lever: "L'anca spinge in avanti; la gamba agisce come una frusta con il ginocchio come snodo.",
      timing: "Il calcio parte senza caricamento visibile, dalla guardia; la ginocchiata quando la testa dell'aggressore scende.",
    },
    phases: [
      { steps: ["Guardia, distanza di una gamba.", "Peso spostato sulla gamba anteriore se si calcia con la posteriore."], cue: "Nessun preavviso." },
      {
        steps: [
          "Ginocchio sale verso il bersaglio, gamba distesa a frusta.",
          "Impatto con il collo del piede (genitali) o con la pianta/avampiede (ginocchio).",
          "Ritorno rapido del piede.",
        ],
        cue: "Su, fuori, giù.",
      },
      {
        steps: [
          "Afferrare testa o spalle dell'aggressore che si piega in avanti.",
          "Ginocchiata frontale con spinta dell'anca, tirando la testa verso il ginocchio.",
        ],
        cue: "Tira giù, spingi su.",
      },
      { steps: ["Spinta via, arretramento.", "Scanning e fuga."], cue: "Non restare a guardare." },
    ],
    errors: [
      "Calciare con la punta del piede nudo o in scarpe morbide (rischio fratture alle dita).",
      "Alzare il calcio troppo: bersaglio alto = equilibrio basso.",
      "Lasciare cadere le mani durante il calcio.",
    ],
    drill: [
      "Su scudo da impatto tenuto basso: 3 × 10 per gamba.",
      "Combinazione palmo + calcio + ginocchiata su scudo.",
      "Partner con protezione: calcio al segnale da distanza variabile.",
    ],
    clip: {
      seconds: 7,
      shots: [
        { t: "0–2 s", desc: "Laterale: calcio frontale su scudo basso." },
        { t: "2–5 s", desc: "Laterale: presa della testa e ginocchiata." },
        { t: "5–7 s", desc: "Spinta via e uscita." },
      ],
      overlays: ["Arco della gamba a frusta", "Vettore di trazione della testa"],
    },
    image: "beginner",
  },
  {
    slug: "rilascio-presa-polso",
    part: 1,
    chapter: 3,
    title: "Rilascio da presa ai polsi",
    en: "Wrist Grab Release",
    level: "Base",
    summary:
      "Liberazione dalla presa ai polsi sfruttando l'apertura tra pollice e dita dell'aggressore, la linea di minor resistenza articolare, seguita da contrattacco immediato.",
    biomechanics: {
      weight: "Abbassare il baricentro al momento del rilascio: il peso del corpo si somma alla forza del braccio.",
      lever: "Il gomito dell'allievo si avvicina al gomito dell'aggressore: l'avambraccio diventa una leva che ruota contro il pollice.",
      timing: "Il rilascio è un'azione esplosiva di 0,2 s, non una trazione prolungata.",
    },
    phases: [
      {
        steps: ["Identificare dove si trova il pollice dell'aggressore.", "Mano afferrata aperta e tesa (dita distese per irrobustire il polso)."],
        cue: "Trova il pollice.",
      },
      {
        steps: [
          "Ruotare il polso verso il pollice dell'aggressore.",
          "Portare il gomito verso il suo gomito con un piccolo passo in avanti.",
          "Strappo netto attraverso l'apertura pollice-dita.",
        ],
        cue: "Gira verso il pollice, esci dal buco.",
      },
      {
        steps: [
          "La mano liberata prosegue in un colpo di palmo o hammerfist.",
          "Calcio basso simultaneo se la distanza lo consente.",
        ],
        cue: "Il rilascio è già un colpo.",
      },
      { steps: ["Arretramento in diagonale.", "Scanning e fuga."], cue: "Liberato è solo metà del lavoro." },
    ],
    errors: [
      "Tirare indietro il braccio contro la presa (forza contro forza).",
      "Rilasciare senza contrattaccare: l'aggressore riafferra.",
      "Mano chiusa a pugno durante il rilascio.",
    ],
    kyusho: {
      point: "LI-10",
      note: "Prima del rilascio, una percussione con le nocche sull'avambraccio dell'aggressore (nervo radiale) indebolisce la presa.",
    },
    drill: [
      "Presa a una mano, poi a due mani, poi presa incrociata: 10 ripetizioni ciascuna.",
      "Il partner aumenta progressivamente la forza della presa.",
      "Presa a sorpresa da dietro con occhi chiusi.",
    ],
    clip: {
      seconds: 6,
      shots: [
        { t: "0–2 s", desc: "Dettaglio della presa: evidenziazione del pollice." },
        { t: "2–4 s", desc: "Ralenti: rotazione del polso e avvicinamento dei gomiti." },
        { t: "4–6 s", desc: "Velocità reale: rilascio + colpo di palmo." },
      ],
      overlays: ["Cerchio sull'apertura pollice-dita", "Freccia di rotazione", "Vettore di uscita"],
    },
    image: "beginner",
  },
  {
    slug: "strangolamento-frontale",
    part: 1,
    chapter: 3,
    title: "Protocollo anti-strangolamento frontale",
    en: "Front Choke Defense — Pluck",
    level: "Base",
    summary:
      "Difesa da strangolamento frontale a due mani: 'pizzicata' (pluck) delle mani dell'aggressore all'altezza dei pollici, con contrattacco simultaneo ai bersagli bassi.",
    biomechanics: {
      weight: "Peso in avanti verso l'aggressore: arretrare significa farsi trascinare.",
      lever: "Le mani agiscono a uncino sui pollici, il punto debole di ogni presa; il mento basso riduce la pressione sulla trachea.",
      timing: "Pizzicata e calcio quasi simultanei; la priorità assoluta è l'aria entro i primi 2 secondi.",
    },
    phases: [
      { steps: ["Riconoscere la presa: mani attorno al collo, pollici sulla trachea.", "Mento basso, spalle alte."], cue: "Proteggi l'aria." },
      {
        steps: [
          "Mani a uncino sopra le spalle dell'aggressore, dita sui suoi pollici.",
          "Strappo esplosivo verso il basso e l'esterno.",
          "Contemporaneo calcio ai genitali o ginocchiata.",
        ],
        cue: "Pizzica e calcia.",
      },
      {
        steps: ["Mantenere il controllo di un braccio.", "Serie di colpi di palmo o ginocchiate fino a creare spazio."],
        cue: "Non lasciargli riprendere la presa.",
      },
      { steps: ["Spinta via e arretramento.", "Scanning: l'aggressore potrebbe non essere solo."], cue: "Respira, guarda, esci." },
    ],
    errors: [
      "Afferrare i polsi invece dei pollici.",
      "Arretrare durante la presa.",
      "Ritardare il contrattacco dopo il rilascio.",
    ],
    drill: [
      "Partner applica presa lenta, allievo esegue la pizzicata: 10 ripetizioni.",
      "Il partner spinge contro un muro: stessa difesa con spalle a muro.",
      "Sotto stress: presa a sorpresa dopo 1 min di sforzo intenso.",
    ],
    clip: {
      seconds: 6,
      shots: [
        { t: "0–2 s", desc: "Frontale: la presa si chiude." },
        { t: "2–4 s", desc: "Laterale: pizzicata dei pollici + calcio." },
        { t: "4–6 s", desc: "Contrattacco e uscita." },
      ],
      overlays: ["Evidenziazione dei pollici", "Vettore di strappo verso il basso"],
    },
    image: "beginner",
  },
  {
    slug: "strangolamento-posteriore",
    part: 1,
    chapter: 3,
    title: "Difesa da strangolamento laterale e posteriore",
    en: "Side & Rear Choke Defense",
    level: "Intermedio",
    summary:
      "Difesa da strangolamento con braccio attorno al collo (da lato o da dietro): protezione delle vie aeree, abbassamento del baricentro e rotazione verso l'interno del braccio avvolgente.",
    biomechanics: {
      weight: "Baricentro basso e spostato in avanti per non essere sollevati o trascinati all'indietro.",
      lever: "Mani a uncino sull'avambraccio dell'aggressore; la rotazione del mento verso il suo gomito apre lo spazio per respirare.",
      timing: "Reazione entro 1–2 s: oltre questa finestra la perdita di coscienza diventa un rischio reale.",
    },
    phases: [
      {
        steps: ["Mani immediatamente sull'avambraccio che stringe.", "Mento girato verso il gomito dell'aggressore.", "Ginocchia flesse."],
        cue: "Mani al braccio, mento al gomito.",
      },
      {
        steps: [
          "Strappo verso il basso dell'avambraccio.",
          "Colpi con il gomito libero o hammerfist all'inguine.",
          "Passo laterale per uscire con la testa sotto il braccio avvolgente.",
        ],
        cue: "Tira, colpisci, esci da sotto.",
      },
      {
        steps: ["Una volta usciti, controllo del braccio e ginocchiate.", "Possibile leva al gomito."],
        cue: "Ora sei tu dietro di lui.",
      },
      { steps: ["Disimpegno e scanning.", "Valutare lo stato respiratorio prima di muoversi."], cue: "Respira prima di correre." },
    ],
    errors: [
      "Tirare il braccio senza girare il mento.",
      "Restare in piedi dritti: l'aggressore solleva e controlla.",
      "Uscire dal lato sbagliato (verso la mano libera dell'aggressore).",
    ],
    drill: [
      "Presa lenta e controllata con tap immediato al segnale: sicurezza prima di tutto.",
      "Difesa da posizione in ginocchio.",
      "Ad occhi chiusi, presa a sorpresa dal lato o da dietro.",
    ],
    clip: {
      seconds: 8,
      shots: [
        { t: "0–2 s", desc: "Posteriore: la presa si chiude." },
        { t: "2–5 s", desc: "Laterale: mani all'avambraccio, mento al gomito, abbassamento." },
        { t: "5–8 s", desc: "Uscita da sotto il braccio e contrattacco." },
      ],
      overlays: ["Freccia di rotazione del mento", "Abbassamento del baricentro"],
    },
    image: "beginner",
  },
];
