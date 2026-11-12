export type Technique = { name: string; en?: string; text: string };
export type Lesson = {
  n: string;
  title: string;
  en: string;
  description?: string;
  techniques?: Technique[];
  visual: string;
};

export const beginnerLessons: Lesson[] = [
  {
    n: "01",
    title: "Postura e Spostamenti",
    en: "Stance & Footwork",
    description:
      "Posizione neutra da combattimento (guardia difensiva), protezione del mento, mani aperte per prevenire tensioni muscolari e favorire riflessi rapidi. Spostamenti lineari e circolari senza incrociare i piedi.",
    visual: "Esecuzione corretta della guardia da combattimento e passi scivolati avanti/indietro",
  },
  {
    n: "02",
    title: "Colpi Fondamentali",
    en: "Striking",
    techniques: [
      {
        name: "Pugno diretto e colpo di palmo",
        en: "Palming & Straight Punch",
        text: "Colpire con la base del palmo (per evitare fratture alle falangi) o con le prime due nocche.",
      },
      {
        name: "Colpo a martello",
        en: "Hammerfist",
        text: "Movimento discendente o circolare utilizzando la parte inferiore del pugno (lato mignolo).",
      },
      {
        name: "Calci alle ginocchia e ai genitali",
        en: "Knees & Groin Kicks",
        text: "Calcio frontale con la punta o l'avampiede mirato ai bersagli bassi.",
      },
    ],
    visual: "Sequenza colpo di palmo + ginocchiata frontale",
  },
  {
    n: "03",
    title: "Difesa da Prese e Rilasci",
    en: "Releases",
    techniques: [
      {
        name: "Liberazione da presa ai polsi",
        en: "Wrist Grabs",
        text: "Sfruttare la direzione del pollice (punto debole della presa) per effettuare una torsione netta e repentina.",
      },
      {
        name: "Liberazione da strangolamento frontale",
        en: "Choke from the front",
        text: "Placcaggio delle braccia dell'aggressore, rotazione dell'anca e contemporaneo attacco ai genitali o agli occhi.",
      },
    ],
    visual: "Rotazione del polso per rompere la presa e contrattacco",
  },
];

export const expertLessons: Lesson[] = [
  {
    n: "01",
    title: "Difesa da Armi Bianche e Minacce",
    en: "Weapon Defense",
    techniques: [
      {
        name: "Difesa da coltello",
        en: "Knife Threat & Attack",
        text: "Deviazione a 360 gradi del braccio armato, controllo del polso, neutralizzazione dell'aggressore e disarmo rapido.",
      },
      {
        name: "Minacce da arma da fuoco",
        en: "Gun Defenses",
        text: "Linea di fuoco deviata istantaneamente, controllo della canna e controllo dell'arma combinato a leve articolari.",
      },
    ],
    visual: "Deviazione a 360° e controllo del braccio armato di coltello",
  },
  {
    n: "02",
    title: "Combattimento a Terra",
    en: "Ground Fighting",
    techniques: [
      {
        name: "Gestione della caduta",
        en: "Breakfalls",
        text: "Cadute ammortizzate in avanti, indietro e lateralmente per proteggere la testa e la colonna vertebrale.",
      },
      {
        name: "Uscita dalla monta",
        en: "Mount Escapes",
        text: "Utilizzo del ponte e del rollaggio (Bridge & Roll) per riconquistare la posizione dominante o la fuga.",
      },
    ],
    visual: "Tecnica del ponte per rovesciare l'avversario dalla monta",
  },
];

export const kyushoPrinciples: Technique[] = [
  {
    name: "Principio di polarità e bilaterale",
    text: "Molti punti sono simmetrici; stimolarli su entrambi i lati crea un sovraccarico sensoriale nel sistema nervoso centrale.",
  },
  {
    name: "Angolazione della pressione",
    text: "I colpi o le pressioni non devono essere solo forti, ma direzionati secondo specifici angoli (verso il centro, verso il basso o verso l'alto) per massimizzare l'efficacia.",
  },
];

export const kyushoPoints = [
  {
    code: "GB-20",
    name: "Gallbladder 20",
    area: "Base del cranio / Nuca",
    text: "Un colpo a martello o a palmo aperto in quest'area provoca un immediato disequilibrio e disorientamento vestibolare.",
    // position on the anatomy illustration, in %
    x: 41,
    y: 19,
  },
  {
    code: "ST-9",
    name: "Stomach 9",
    area: "Carotide / Seno carotideo",
    text: "Pressione o colpo rapido per causare un temporaneo calo della pressione sanguigna e cedimento delle ginocchia.",
    x: 52,
    y: 29,
  },
  {
    code: "LR-13 / LI-10",
    name: "Braccio e costato",
    area: "Nervi periferici",
    text: "Colpi di percussione mirati ai nervi periferici (es. nervo radiale) per causare il rilascio immediato della presa di un'arma o il blocco temporaneo dell'arto.",
    x: 87,
    y: 85,
  },
];
