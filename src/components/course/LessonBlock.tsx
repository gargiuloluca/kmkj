import type { Lesson } from "./course-data";

const tones = {
  base: { text: "text-base", border: "border-base", bg: "bg-base" },
  pro: { text: "text-pro", border: "border-pro", bg: "bg-pro" },
} as const;

export function LessonBlock({ lesson, tone }: { lesson: Lesson; tone: keyof typeof tones }) {
  const t = tones[tone];
  return (
    <article className="border-t border-border py-10">
      <div className="flex items-baseline gap-4">
        <span className={`font-display text-5xl ${t.text}`}>{lesson.n}</span>
        <div>
          <h3 className="font-display text-3xl text-foreground md:text-4xl">{lesson.title}</h3>
          <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {lesson.en}
          </p>
        </div>
      </div>

      {lesson.description && (
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/85">{lesson.description}</p>
      )}

      {lesson.techniques && (
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {lesson.techniques.map((tech) => (
            <li key={tech.name} className={`border-l-2 ${t.border} bg-surface px-4 py-4`}>
              <p className="font-semibold text-foreground">{tech.name}</p>
              {tech.en && (
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  {tech.en}
                </p>
              )}
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">{tech.text}</p>
            </li>
          ))}
        </ul>
      )}

      <p className="mt-5 flex items-start gap-3 text-sm text-muted-foreground">
        <span aria-hidden className={`shrink-0 text-xs leading-5 ${t.text}`}>▶</span>
        <span>
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-foreground">
            Sequenza ·{" "}
          </span>
          {lesson.visual}
        </span>
      </p>
    </article>
  );
}
