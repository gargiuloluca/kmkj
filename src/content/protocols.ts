export const principles = [
  { n: "01", title: "Biomeccanica", en: "Biomechanics", text: "Distribuzione del peso, leve e timing analizzati per ogni tecnica: la forza nasce dal suolo, non dal braccio." },
  { n: "02", title: "Stress inoculation", en: "Stress Inoculation", text: "Protocolli a livelli progressivi per simulare la realtà dell'aggressione senza traumatizzare l'allievo." },
  { n: "03", title: "Standard a 4 fasi", en: "4-Phase Standard", text: "Ingresso, azione, contrattacco, uscita: ogni tecnica segue la stessa struttura, dal primo giorno all'ultimo." },
  { n: "04", title: "Kyusho integrato", en: "Integrated Kyusho", text: "Anatomia d'impatto, vettori di forza e reazione neurologica collegati a ogni singola tecnica." },
];

export const stressLevels = [
  { lvl: "L1", name: "Fatica", en: "Fatigue", bpm: "130–150 bpm", vars: "Pre-affaticamento di 60 s, scenario noto, una sola variabile." },
  { lvl: "L2", name: "Incertezza", en: "Uncertainty", bpm: "150–165 bpm", vars: "Scenario casuale tra 3, comando a sorpresa dell'istruttore." },
  { lvl: "L3", name: "Privazione sensoriale", en: "Sensory Deprivation", bpm: "160–175 bpm", vars: "Occhiali oscurati, rumore di fondo, luci stroboscopiche." },
  { lvl: "L4", name: "Caos", en: "Chaos", bpm: "> 170 bpm", vars: "Più aggressori, armi da allenamento, scelta della via di fuga." },
];

export const stressRule =
  "Si passa al livello successivo solo quando l'allievo mantiene tecnica corretta e decisione entro 2 secondi al livello attuale, per 3 sessioni consecutive.";

/** Adrenalin Management: the first 5 seconds of an assault. */
export const adrenalineTimeline = [
  {
    t: "0–1 s",
    title: "Riconoscere",
    en: "Recognize",
    action: "Accetta che sta succedendo. Il cervello tende a negare ('non può essere vero'): nominare mentalmente la minaccia sblocca il congelamento.",
    phrase: "È reale. Muoviti.",
  },
  {
    t: "1–2 s",
    title: "Espirare e proteggere",
    en: "Exhale & Cover",
    action: "Espirazione forte e sonora mentre le mani salgono a protezione. L'espirazione impedisce l'apnea da panico e stabilizza il tronco per l'impatto.",
    phrase: "Fuori l'aria, su le mani.",
  },
  {
    t: "2–3 s",
    title: "Rompere la visione a tunnel",
    en: "Break Tunnel Vision",
    action: "Con l'adrenalina il campo visivo si restringe sulla minaccia. Un movimento attivo della testa (non solo degli occhi) riapre la visione periferica.",
    phrase: "Testa che gira, occhi che vedono.",
  },
  {
    t: "3–4 s",
    title: "Comando verbale",
    en: "Verbal Command",
    action: "Voce alta e breve: 'Indietro!' / 'Stop!'. Interrompe l'aggressore, richiama testimoni e riattiva la corteccia prefrontale del difensore.",
    phrase: "Una parola, forte.",
  },
  {
    t: "4–5 s",
    title: "Agire con gesti grossolani",
    en: "Gross Motor Action",
    action: "Sotto adrenalina la motricità fine si degrada: scegliere palmi, gomiti, ginocchia e spostamenti semplici. Nessuna tecnica complessa.",
    phrase: "Semplice è veloce.",
  },
];

export const adrenalineGuidelines = [
  { title: "Respirazione tattica (box breathing)", text: "Inspira 4 s, trattieni 4 s, espira 4 s, trattieni 4 s. Da praticare prima e dopo ogni scenario e nei momenti di attesa: abbassa la frequenza cardiaca in 1–2 minuti." },
  { title: "Esclusione uditiva e distorsione del tempo", text: "Sotto stress si può non sentire chi grida e percepire il tempo rallentato. Saperlo in anticipo evita il panico quando accade." },
  { title: "Tremore post-evento", text: "Dopo l'aggressione tremori, nausea e pianto sono risposte normali al calo di adrenalina. Sedersi in luogo sicuro, respirare, chiamare il 112." },
  { title: "Dialogo interno", text: "Sostituire 'non ce la faccio' con istruzioni operative brevi ('mani su', 'esci a destra'). Il cervello sotto stress esegue comandi, non ragionamenti." },
];

export type ChecklistGroup = { group: string; items: string[] };

export const instructorChecklist: ChecklistGroup[] = [
  {
    group: "Ambiente",
    items: [
      "Tatami integro, senza spazi tra i pannelli; area libera da ostacoli e spigoli.",
      "Uscite di emergenza libere e note a tutti i partecipanti.",
    ],
  },
  {
    group: "Partecipanti",
    items: [
      "Certificato medico sportivo valido per tutti i partecipanti.",
      "Verifica di infortuni, condizioni cardiache, gravidanza o farmaci in corso.",
      "Rimossi anelli, orecchini, orologi; unghie corte.",
      "Parola di stop e segnale di tap concordati e ripetuti ad alta voce.",
    ],
  },
  {
    group: "Attrezzatura",
    items: [
      "Paradenti, conchiglia, casco e guantoni controllati per misura e integrità.",
      "Armi da allenamento solo in gomma o plastica; nessuna arma reale nella sala.",
    ],
  },
  {
    group: "Kyusho e punti di pressione",
    items: [
      "Nessun colpo e nessuna pressione prolungata sul collo (ST-9, CV-23) del partner.",
      "Pressioni dosate e progressive; il partner fa tap al primo fastidio.",
      "Impatti pieni solo su manichini da percussione.",
    ],
  },
  {
    group: "Emergenza",
    items: [
      "Kit di primo soccorso e laccio emostatico a portata di mano.",
      "Almeno una persona presente con formazione BLSD; DAE (defibrillatore) raggiungibile.",
      "Telefono carico e numero 112 pronto.",
    ],
  },
];

export const beginnerFaq = [
  {
    q: "Ho paura di essere colpito. È normale?",
    a: "Sì, ed è utile: la paura è il sistema d'allarme del corpo. Il programma la riduce per gradi: prima colpi su pao, poi contatti leggeri con protezioni, solo dopo sparring controllato. Nessuno viene esposto a impatti per cui non è pronto.",
  },
  {
    q: "Mi blocco quando qualcuno mi afferra. Come si supera?",
    a: "Il blocco (freeze) è una risposta automatica. Si supera ripetendo lo stesso rilascio centinaia di volte, finché diventa un riflesso che parte prima della paura. Inizia con prese lente e annunciate, poi a sorpresa.",
  },
  {
    q: "Non sono abbastanza forte o in forma per iniziare?",
    a: "Il Krav Maga è progettato per chi è più debole dell'aggressore: leve, timing e bersagli vulnerabili contano più della forza. La forma fisica arriva con l'allenamento, non è un requisito per cominciare.",
  },
  {
    q: "Come smetto di chiudere gli occhi quando arriva un colpo?",
    a: "Con il drill di reazione condizionata: stimoli lenti e prevedibili, poi più veloci. Gli occhi imparano a restare aperti quando il cervello registra, ripetizione dopo ripetizione, che il colpo è gestibile.",
  },
  {
    q: "Ho paura di fare male al partner.",
    a: "È un segno di controllo. In allenamento si lavora al 30–50% della velocità e si colpisce su protezioni; l'istruttore regola l'intensità. Fare male al partner non è mai l'obiettivo.",
  },
  {
    q: "Dopo una sessione intensa mi sento agitato o scosso.",
    a: "È il calo di adrenalina. Usa la respirazione tattica 4-4-4-4 per 2 minuti e parlane nel debriefing di fine lezione: dare un nome a ciò che si è provato accelera l'adattamento.",
  },
];
