import { Reveal } from "@/components/Reveal";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  reveal?: boolean;
};

export function Section({
  id,
  children,
  className = "",
  innerClassName = "",
  reveal = true
}: SectionProps) {
  const content = <div className={`container-shell ${innerClassName}`.trim()}>{children}</div>;

  return (
    <section id={id} className={`section-pad ${className}`.trim()}>
      {reveal ? <Reveal>{content}</Reveal> : content}
    </section>
  );
}
