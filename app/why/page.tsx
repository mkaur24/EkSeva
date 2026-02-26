import type { Metadata } from "next";
import { Accordion, type AccordionItem } from "@/components/Accordion";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Why EkSeva",
  description:
    "Why EkSeva® focuses on sourcing, gentle processing, and reliable standards for community food."
};

const educationItems: AccordionItem[] = [
  {
    title: "Why organic matters",
    content: [
      "Organic practices can support healthier soil systems and reduce reliance on synthetic inputs. This matters because ingredient quality begins with growing conditions.",
      "For EkSeva, it is a sourcing standard, not a slogan."
    ]
  },
  {
    title: "Why stone-milling matters",
    content: [
      "Stone-milling is valued for a gentler process that helps preserve more of the grain’s natural character. The goal is to retain integrity rather than rebuild it later.",
      "It aligns with the principle of protecting value at the source."
    ]
  },
  {
    title: "Why artificial fortification exists — and its limits",
    content: [
      "Fortification is often used to address nutrient losses after intensive processing. It can be useful, but it does not fully recreate the structure and balance of minimally altered food.",
      "That is why process decisions still matter."
    ]
  },
  {
    title: "Why community food deserves better standards",
    content: [
      "Community kitchens operate at scale and serve with care. Reliable, thoughtfully sourced staples help that care reach further.",
      "Better standards here improve everyday outcomes without adding unnecessary complexity."
    ]
  }
];

export default function WhyPage() {
  return (
    <>
      <section id="top" className="screen-block border-b border-line/80">
        <div className="container-shell py-16 md:py-24">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm uppercase tracking-[0.14em] text-mute">EkSeva®</p>
            <h1 className="text-4xl font-semibold tracking-[-0.03em] text-ink sm:text-5xl md:text-7xl md:leading-[0.95]">
              Better food starts earlier than the ingredient list.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-mute md:text-xl md:leading-9">
              A standard for how community food should be sourced.
            </p>
          </div>
        </div>
      </section>

      <Section className="hairline">
        <div className="space-y-6 md:space-y-8">
          <div className="grid gap-6 rounded-[2rem] border border-line bg-white/70 p-5 shadow-soft md:grid-cols-[1.05fr_0.95fr] md:items-center md:p-7">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.14em] text-mute">01</p>
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl md:text-4xl">
                Grown with care
              </h2>
              <p className="mt-4 text-base leading-7 text-mute md:text-lg md:leading-8">
                Because soil health determines food quality.
              </p>
            </div>
            <div className="relative min-h-[200px] overflow-hidden rounded-[1.5rem] border border-line bg-white/70">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(63,90,74,0.12),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(196,177,143,0.18),transparent_50%)]" />
              <svg viewBox="0 0 300 220" aria-hidden="true" className="absolute inset-0 h-full w-full text-[rgba(172,124,64,0.45)]">
                <path d="M15 195C70 150 110 155 150 120C195 82 235 86 285 30" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M20 210C85 172 122 182 170 145C215 110 250 113 286 76" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M66 186C58 164 57 141 75 122" fill="none" stroke="rgba(90,111,97,0.55)" strokeWidth="3" strokeLinecap="round" />
                <path d="M76 143C97 139 110 125 114 106" fill="none" stroke="rgba(90,111,97,0.55)" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          <div className="grid gap-6 rounded-[2rem] border border-line bg-white/70 p-5 shadow-soft md:grid-cols-[0.95fr_1.05fr] md:items-center md:p-7">
            <div className="relative order-2 min-h-[200px] overflow-hidden rounded-[1.5rem] border border-line bg-white/70 md:order-1">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(63,90,74,0.08),transparent_55%),radial-gradient(circle_at_75%_30%,rgba(196,177,143,0.2),transparent_45%)]" />
              <svg viewBox="0 0 300 220" aria-hidden="true" className="absolute inset-0 h-full w-full">
                <circle cx="150" cy="118" r="62" fill="rgba(196,145,84,0.18)" />
                <path d="M86 132C110 112 138 104 182 102C207 101 226 106 238 114" fill="none" stroke="rgba(172,124,64,0.55)" strokeWidth="4" strokeLinecap="round" />
                <path d="M88 146C117 125 143 119 181 117C207 116 225 121 238 128" fill="none" stroke="rgba(172,124,64,0.42)" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <div className="order-1 md:order-2">
              <p className="mb-3 text-sm uppercase tracking-[0.14em] text-mute">02</p>
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl md:text-4xl">
                Processed gently
              </h2>
              <p className="mt-4 text-base leading-7 text-mute md:text-lg md:leading-8">
                Because high heat removes what can’t be replaced.
              </p>
            </div>
          </div>

          <div className="grid gap-6 rounded-[2rem] border border-line bg-white/70 p-5 shadow-soft md:grid-cols-[1.05fr_0.95fr] md:items-center md:p-7">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.14em] text-mute">03</p>
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl md:text-4xl">
                Designed for scale
              </h2>
              <p className="mt-4 text-base leading-7 text-mute md:text-lg md:leading-8">
                Because community kitchens need reliability without compromise.
              </p>
            </div>
            <div className="relative min-h-[200px] overflow-hidden rounded-[1.5rem] border border-line bg-white/70">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(250,248,243,0.95))]" />
              <svg viewBox="0 0 300 220" aria-hidden="true" className="absolute inset-0 h-full w-full">
                <g stroke="rgba(18,18,18,0.12)" strokeWidth="1.5">
                  <rect x="44" y="56" width="78" height="44" rx="12" fill="rgba(255,255,255,0.7)" />
                  <rect x="132" y="56" width="124" height="44" rx="12" fill="rgba(255,255,255,0.7)" />
                  <rect x="44" y="110" width="102" height="44" rx="12" fill="rgba(255,255,255,0.7)" />
                  <rect x="156" y="110" width="100" height="44" rx="12" fill="rgba(255,255,255,0.7)" />
                </g>
                <g fill="rgba(63,90,74,0.2)">
                  <circle cx="84" cy="78" r="8" />
                  <circle cx="172" cy="132" r="8" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </Section>

      <Section className="hairline">
        <div className="mb-8 max-w-4xl">
          <p className="mb-4 text-sm uppercase tracking-[0.14em] text-mute">Education</p>
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl md:text-5xl">
            Context matters.
          </h2>
          <p className="mt-4 text-lg leading-8 text-mute">
            A few practical reasons behind the standard.
          </p>
        </div>
        <Accordion items={educationItems} />
      </Section>

      <Section className="hairline">
        <div className="surface-card rounded-[2rem] px-6 py-10 text-center md:px-10 md:py-14">
          <p className="mx-auto max-w-3xl text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl md:text-5xl md:leading-tight">
            EkSeva® is not a single product.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-mute md:text-xl">
            It is a standard for how community food should be sourced.
          </p>
          <p className="mt-8 text-sm uppercase tracking-[0.22em] text-mute">
            Oils · Pulses · Grains · Staples
          </p>
        </div>
      </Section>
    </>
  );
}
