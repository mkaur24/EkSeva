import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
  target,
  rel
}: ButtonProps) {
  const base =
    "focus-ring inline-flex items-center justify-center rounded-full text-sm font-medium tracking-tight transition hover:-translate-y-0.5";
  const styles =
    variant === "primary"
      ? "border border-[rgba(18,18,18,0.08)] bg-accent px-5 py-3 text-[color:var(--accent-ink)] shadow-soft hover:bg-[#364d40]"
      : "px-1 py-1 text-ink/80 hover:text-ink";

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={`${base} ${styles} ${className}`.trim()} onClick={onClick}>
        {children}
      </Link>
    );
  }

  const unsafeScheme = /^(javascript|data):/i.test(href);
  const safeHref = unsafeScheme ? "#" : href;
  const safeRel =
    target === "_blank" ? [rel, "noopener", "noreferrer"].filter(Boolean).join(" ") : rel;

  return (
    <a
      href={safeHref}
      target={target}
      rel={safeRel}
      className={`${base} ${styles} ${className}`.trim()}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
