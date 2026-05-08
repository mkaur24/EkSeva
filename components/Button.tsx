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
    "focus-ring inline-flex min-h-11 items-center justify-center rounded-2xl text-sm font-semibold tracking-tight transition duration-200";
  const styles =
    variant === "primary"
      ? "border border-[rgba(18,18,18,0.12)] bg-[linear-gradient(180deg,#4f6c5a_0%,#3f5a4a_100%)] px-6 py-3 text-[#f5f8f5] shadow-[0_10px_24px_rgba(63,90,74,0.22),inset_0_1px_0_rgba(255,255,255,0.22)] hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(63,90,74,0.26),inset_0_1px_0_rgba(255,255,255,0.25)] active:translate-y-0"
      : "rounded-xl px-2 py-1.5 text-ink/80 hover:text-ink";

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
