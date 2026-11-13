import { Activity, ShieldCheck } from "lucide-react";
import { useState } from "react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import {
  adrenalineGuidelines,
  adrenalineTimeline,
  beginnerFaq,
  instructorChecklist,
  stressLevels,
  stressRule,
} from "@/content";
import { Eyebrow, SectionTitle } from "./ui";

export function StressLevels() {
  return (
    <div id="livelli-stress" className="scroll-mt-20">
      <Eyebrow className="mt-12 text-foreground">Piano di desensibilizzazione allo stress · 4 livelli</Eyebrow>
      <div className="mt-4 grid gap-3 md:grid-cols-4">
        {stressLevels.map((s, i) => (
          <div key={s.lvl} className="relative overflow-hidden rounded-md border border-border bg-surface p-5">
            <span className="absolute inset-x-0 top-0 h-1 bg-pro" style={{ opacity: 0.4 + i * 0.2 }} />
            <div className="flex items-baseline justify-between">
              <span className="font-display text-4xl text-pro">{s.lvl}</span>
              <span className="flex items-center gap-1 font-mono text-xs text-foreground">
                <Activity className="h-3.5 w-3.5 text-primary" /> {s.bpm}
              </span>
            </div>
            <p className="mt-3 font-semibold">{s.name}</p>
            <Eyebrow className="mt-0.5">{s.en}</Eyebrow>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">{s.vars}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-muted-foreground">{stressRule}</p>
    </div>
  );
}

export function AdrenalineProtocol() {
  return (
    <section id="adrenalina" className="scroll-mt-20 mt-16">
      <SectionTitle eyebrow="Protocollo · Adrenalin Management" title="I primi 5 secondi" />
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-foreground/85">
        Linee guida psicologiche per gestire respirazione e visione a tunnel nel momento più critico: l'inizio di
        un'aggressione, quando l'adrenalina prende il controllo del corpo.
      </p>
      <ol className="mt-8 grid gap-3 md:grid-cols-5">
        {adrenalineTimeline.map((s) => (
          <li key={s.t} className="rounded-md border border-border bg-surface p-4">
            <span className="font-mono text-xs font-bold text-primary">{s.t}</span>
            <p className="mt-2 font-display text-xl">{s.title}</p>
            <Eyebrow className="mt-0.5">{s.en}</Eyebrow>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">{s.action}</p>
            <p className="mt-3 border-t border-border pt-3 font-mono text-xs text-foreground">“{s.phrase}”</p>
          </li>
        ))}
      </ol>
      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {adrenalineGuidelines.map((g) => (
          <div key={g.title} className="border-l-2 border-primary bg-surface p-5">
            <p className="font-semibold">{g.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80">{g.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function InstructorChecklist({ context }: { context: string }) {
  const all = instructorChecklist.flatMap((g) => g.items);
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const done = checked.size;
  const ready = done === all.length;
  const toggle = (item: string) =>
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(item)) next.delete(item);
      else next.add(item);
      return next;
    });

  return (
    <section id="checklist" className="scroll-mt-20 mt-16">
      <SectionTitle eyebrow={`Check-list istruttore · ${context}`} title="Sicurezza prima della sessione" />
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-foreground/80">
        Da completare prima di ogni sessione di sparring a contatto pieno o di stimolazione dei punti di pressione.
        La sessione inizia solo quando tutte le voci sono spuntate.
      </p>
      <div className="mt-6 flex items-center gap-4 rounded-md border border-border bg-surface p-4">
        <ShieldCheck className={`h-6 w-6 ${ready ? "text-base" : "text-muted-foreground"}`} />
        <div className="flex-1">
          <div className="h-1.5 overflow-hidden rounded-full bg-muted">
            <div className="h-full bg-base transition-all" style={{ width: `${(done / all.length) * 100}%` }} />
          </div>
          <p className="mt-2 font-mono text-xs text-foreground">
            {ready ? "Tutto verificato: sessione autorizzata" : `${done} / ${all.length} verifiche completate`}
          </p>
        </div>
        {done > 0 && (
          <button type="button" onClick={() => setChecked(new Set())} className="font-mono text-xs text-muted-foreground hover:text-foreground">
            Azzera
          </button>
        )}
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {instructorChecklist.map((g) => (
          <fieldset key={g.group} className="rounded-md border border-border bg-surface p-5">
            <legend className="px-1 font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{g.group}</legend>
            <ul className="space-y-3">
              {g.items.map((item) => {
                const id = `${context}-${item}`;
                return (
                  <li key={item} className="flex items-start gap-3">
                    <Checkbox id={id} checked={checked.has(item)} onCheckedChange={() => toggle(item)} className="mt-0.5" />
                    <label htmlFor={id} className={`text-sm leading-relaxed ${checked.has(item) ? "text-muted-foreground line-through" : "text-foreground/85"}`}>
                      {item}
                    </label>
                  </li>
                );
              })}
            </ul>
          </fieldset>
        ))}
      </div>
    </section>
  );
}

export function BeginnerFaq() {
  return (
    <section id="faq" className="scroll-mt-20">
      <SectionTitle eyebrow="FAQ · Per principianti" title="Paura e blocchi mentali" />
      <Accordion type="single" collapsible className="mt-6 rounded-md border border-border bg-surface px-5">
        {beginnerFaq.map((f, i) => (
          <AccordionItem key={f.q} value={`faq-${i}`} className="border-border">
            <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">{f.q}</AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-foreground/80">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
