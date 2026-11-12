type Props = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  className?: string;
  eager?: boolean;
};

/** Looping image "clip": slow push-in with a scanning line, as an animated visual support. */
export function VisualClip({ src, alt, caption, width, height, className = "", eager }: Props) {
  return (
    <figure className={`relative overflow-hidden rounded-sm border border-border bg-surface ${className}`}>
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={eager ? "eager" : "lazy"}
          className="h-full w-full object-cover animate-push-in"
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[8%] bg-gradient-to-b from-transparent via-foreground/10 to-transparent animate-scan" />
        <div className="absolute left-3 top-3 flex items-center gap-2 rounded-sm bg-background/80 px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-foreground backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-primary animate-rec" />
          Loop
        </div>
      </div>
      <figcaption className="border-t border-border px-4 py-3 text-sm text-muted-foreground">
        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-foreground">
          Supporto visivo ·{" "}
        </span>
        {caption}
      </figcaption>
    </figure>
  );
}
