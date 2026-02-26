type CardProps = {
  title?: string;
  eyebrow?: string;
  children?: React.ReactNode;
  className?: string;
};

export function Card({ title, eyebrow, children, className = "" }: CardProps) {
  return (
    <div
      className={`surface-card rounded-2xl p-6 md:p-8 transition hover:-translate-y-0.5 hover:border-[rgba(18,18,18,0.16)] ${className}`.trim()}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-mute">{eyebrow}</p>
      ) : null}
      {title ? <h3 className="text-xl font-semibold tracking-tight text-ink">{title}</h3> : null}
      {children ? (
        <div className={title ? "mt-3 text-base leading-7 text-mute" : "text-base leading-7 text-mute"}>
          {children}
        </div>
      ) : null}
    </div>
  );
}
