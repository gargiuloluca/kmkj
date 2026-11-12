import type { Part } from "./types";

export const parts: Part[] = [
  {
    id: 1,
    roman: "I",
    path: "/fondamenta",
    title: "Fondamenta",
    en: "Fundamentals & Drills",
    focus:
      "Postura, biomeccanica e riflessi condizionati: costruire un corpo che si protegge da solo prima ancora che la mente decida.",
    image: "beginner",
    chapters: [
      {
        n: 1,
        title: "Postura, biomeccanica e mobilità dinamica",
        en: "Stance, Biomechanics & Dynamic Mobility",
        intro:
          "La postura è la piattaforma di ogni tecnica. Studiamo come il baricentro, la base d'appoggio e la posizione rispetto all'aggressore decidono chi ha il vantaggio prima del primo contatto.",
        topics: [
          {
            title: "Baricentro e base d'appoggio",
            en: "Center of Mass",
            text: "Il baricentro deve restare sempre all'interno del poligono formato dai piedi. Ginocchia flesse e peso sugli avampiedi permettono di spostarlo in ogni direzione senza perdere stabilità.",
            points: ["Base alla larghezza delle spalle", "Peso 55/45 avanti-dietro", "Spalle sopra le anche"],
          },
          {
            title: "La Dead Zone",
            en: "Dead Zone",
            text: "La zona cieca dell'aggressore è il lato esterno del suo braccio, dietro la spalla. Da lì non può colpire con entrambe le mani senza ruotare: il difensore guadagna tempo e bersagli.",
          },
          {
            title: "Footwork tattico",
            en: "Tactical Footwork",
            text: "Pendulum step per entrare e uscire, passi diagonali per lasciare la linea d'attacco, passi incrociati protettivi solo per cambi di direzione rapidi e mai in distanza di colpo.",
          },
        ],
        techniques: ["guardia-dead-zone", "pendulum-step", "drill-reazione-condizionata"],
      },
      {
        n: 2,
        title: "Dinamica dei colpi primari",
        en: "Striking Mechanics",
        intro:
          "La potenza non nasce dal braccio ma dal suolo. Ogni colpo è un trasferimento di energia lungo la catena cinetica, con la superficie d'impatto scelta per proteggere la propria mano.",
        topics: [
          {
            title: "Catena cinetica",
            en: "Kinetic Chain",
            text: "Piede → anca → spalla → nocche/palmo. Ogni segmento accelera il successivo: se uno manca, la potenza cade drasticamente.",
            points: ["Spinta dal suolo", "Rotazione dell'anca", "Spalla che segue", "Impatto con espirazione"],
          },
          {
            title: "Palmo contro pugno chiuso",
            en: "Palm vs Fist",
            text: "Il palmo trasmette una forza simile al pugno con un rischio molto minore per le ossa metacarpali (la classica 'frattura del pugile'). Il pugno chiuso si riserva ai bersagli morbidi.",
          },
          {
            title: "Traiettorie e bersagli primari",
            en: "Primary Targets",
            text: "Traiettorie lineari verso occhi, naso e gola; circolari verso mandibola e lato del collo; basse verso genitali e rotula. Il bersaglio si sceglie per efficacia, non per abitudine.",
          },
        ],
        techniques: ["palm-strike", "hammerfist", "calcio-bersagli-bassi"],
      },
      {
        n: 3,
        title: "Gestione delle prese e rilasci istintivi",
        en: "Grab Management & Instinctive Releases",
        intro:
          "Ogni presa ha un punto debole: il pollice. Usiamo le linee di minor resistenza articolare invece della forza e trasformiamo ogni rilascio in un contrattacco.",
        topics: [
          {
            title: "Il pollice come punto debole",
            en: "Thumb Line",
            text: "La presa si apre dove pollice e dita si incontrano. Ruotare verso il pollice dell'aggressore richiede una frazione della forza necessaria a tirare via il braccio.",
          },
          {
            title: "Protocollo anti-strangolamento",
            en: "Anti-Choke Protocol",
            text: "Tre priorità in ordine: aria, contrattacco, uscita. Lo stesso protocollo si adatta a strangolamento frontale, laterale e posteriore.",
            points: ["1. Liberare le vie aeree", "2. Colpire simultaneamente", "3. Uscire e fare scanning"],
          },
        ],
        techniques: ["rilascio-presa-polso", "strangolamento-frontale", "strangolamento-posteriore"],
      },
    ],
  },
  {
    id: 2,
    roman: "II",
    path: "/esperti",
    title: "Esperti & Tactical Combat",
    en: "Advanced & Tactical",
    focus:
      "Sopravvivenza a terra, armi bianche e da fuoco, decisioni sotto pressione: il programma per chi ha già automatizzato le fondamenta.",
    image: "expert",
    chapters: [
      {
        n: 1,
        title: "Combattimento a terra e gestione della caduta",
        en: "Ground Survival",
        intro:
          "In strada il suolo non è un tatami: è asfalto, vetro, possibili altri aggressori. L'obiettivo a terra non è vincere la lotta ma tornare in piedi il prima possibile.",
        topics: [
          {
            title: "Cadute su superfici rigide",
            en: "Hard-Surface Breakfalls",
            text: "Su superfici rigide si riduce la battuta delle braccia e si aumenta la rotolata, per distribuire l'energia nel tempo invece che in un solo istante.",
          },
          {
            title: "Psicologia del terreno",
            en: "Never Stay Under",
            text: "Mai restare sotto. Ogni secondo a terra aumenta il rischio di colpi, calci di terzi e armi nascoste. La mentalità è: proteggi, ribalta, rialzati.",
          },
          {
            title: "Controllo dei polsi a terra",
            en: "Wrist Control",
            text: "Controllare i polsi dell'aggressore neutralizza i suoi colpi e prepara il ribaltamento. Si controlla sopra il polso, mai le dita.",
          },
        ],
        techniques: ["breakfall-posteriore", "bridge-and-roll", "technical-stand-up"],
      },
      {
        n: 2,
        title: "Difesa da armi bianche e minacce letali",
        en: "Edged Weapons & Lethal Threats",
        intro:
          "Contro un'arma l'obiettivo è sopravvivere. Si impara a leggere l'aggressione prima che avvenga, a deviare e contrattaccare nello stesso tempo e a gestire le ferite dopo.",
        topics: [
          {
            title: "Lettura pre-conflittuale",
            en: "Pre-Conflict Cues",
            text: "Mani nascoste o in tasca, spalla che arretra, sguardo verso un bersaglio, distanza che si accorcia senza motivo, tono che cambia improvvisamente: segnali di un'estrazione imminente.",
            points: ["Mani nascoste", "Asimmetria della postura", "Avvicinamento laterale", "Sguardo di verifica intorno"],
          },
          {
            title: "Sincronizzazione parata–contrattacco",
            en: "Simultaneous Defense",
            text: "Deviazione e contrattacco devono partire insieme. Un secondo tempo concede all'aggressore il secondo affondo.",
          },
          {
            title: "Gestione del sanguinamento",
            en: "Bleeding Control",
            text: "Dopo un confronto con arma bianca, controllare braccia, mani e tronco: l'adrenalina nasconde le ferite. Compressione diretta forte e continua sulla ferita; per emorragie gravi agli arti, laccio emostatico sopra la ferita. Chiamare subito il 112.",
            points: ["Autocontrollo delle ferite", "Pressione diretta", "Laccio emostatico agli arti", "112"],
          },
        ],
        techniques: ["difesa-coltello-360", "minaccia-arma-fuoco-frontale"],
      },
      {
        n: 3,
        title: "Stress inoculation drills & sparring controllato",
        en: "Stress Inoculation",
        intro:
          "Sotto adrenalina la motricità fine si degrada, la visione si restringe e il tempo si deforma. L'inoculazione dello stress espone l'allievo a dosi crescenti di pressione per mantenere la capacità decisionale.",
        topics: [
          {
            title: "Effetti fisiologici dello stress",
            en: "Stress Physiology",
            text: "Oltre una certa frequenza cardiaca compaiono visione a tunnel, esclusione uditiva e perdita della coordinazione fine. Per questo il programma usa gesti grossolani e semplici.",
          },
          {
            title: "Progressione delle dosi",
            en: "Graded Exposure",
            text: "Lo stress si aumenta una variabile alla volta: prima la fatica, poi l'incertezza, poi la privazione sensoriale, infine più aggressori.",
          },
          {
            title: "Respirazione tattica",
            en: "Box Breathing",
            text: "Inspira 4 s, trattieni 4 s, espira 4 s, trattieni 4 s. Si usa prima e dopo ogni scenario per riportare il controllo.",
          },
        ],
        techniques: ["scenario-stress-inoculation"],
      },
    ],
  },
  {
    id: 3,
    roman: "III",
    path: "/kyusho",
    title: "Kyusho Jutsu applicato",
    en: "Applied Kyusho Jutsu",
    focus:
      "Anatomia d'impatto, vettori di forza e reazione neurologica: colpire dove il sistema nervoso risponde, non dove il corpo resiste.",
    image: "kyusho",
    chapters: [
      {
        n: 1,
        title: "Fondamenti neuro-anatomici",
        en: "Neuro-anatomical Foundations",
        intro:
          "Il Kyusho lavora sul sistema nervoso: recettori di pressione, nervi superficiali e riflessi automatici che il corpo non può controllare volontariamente.",
        topics: [
          {
            title: "Sistema nervoso autonomo e barocettori",
            en: "Autonomic Response",
            text: "Alcune strutture, come il seno carotideo, informano il cervello su pressione e posizione. Uno stimolo mirato provoca una risposta riflessa: rallentamento cardiaco, calo pressorio, perdita del tono posturale.",
          },
          {
            title: "Nervi periferici superficiali",
            en: "Peripheral Nerves",
            text: "Nei punti in cui un nervo passa vicino alla superficie e sopra un osso, una percussione mirata genera una scarica che indebolisce temporaneamente il muscolo collegato.",
          },
          {
            title: "Knockout strutturale e neurologico",
            en: "Structural vs Neurological",
            text: "Il knockout strutturale nasce dal trauma meccanico (accelerazione della testa). Quello neurologico nasce dal sovraccarico sensoriale: meno forza, ma precisione di punto, angolo e tempo.",
            points: ["Strutturale: forza e massa", "Neurologico: punto, vettore, timing"],
          },
          {
            title: "Polarità e bilateralità",
            en: "Bilateral Principle",
            text: "Molti punti sono simmetrici: stimolarli su entrambi i lati, o in rapida sequenza, crea un sovraccarico sensoriale nel sistema nervoso centrale.",
          },
        ],
        techniques: [],
      },
      {
        n: 2,
        title: "Atlante dei punti chiave e vettori d'impatto",
        en: "Pressure Point Atlas",
        intro:
          "Ogni punto ha una localizzazione, un vettore e una reazione attesa. La forza conta meno dell'angolo: lo stesso colpo con il vettore sbagliato non produce effetto.",
        topics: [],
        techniques: [],
      },
    ],
  },
];
