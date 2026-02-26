import type { Metadata } from "next";
import { Accordion, type AccordionItem } from "@/components/Accordion";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { MicroStory } from "@/components/MicroStory";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Home",
  description:
    "EkSeva® offers thoughtfully sourced food for community kitchens, with a focus on long-term care and responsible sourcing."
};

const flourAccordion: AccordionItem[] = [
  {
    title: "How wheat is grown",
    content: [
      "Growing conditions shape more than yield. Soil care, biodiversity, and farming practices influence the quality of what reaches the mill.",
      "Thoughtful sourcing begins before processing. It starts in the field."
    ]
  },
  {
    title: "What nutrients are lost during high-heat, industrial milling",
    content: [
      "Industrial speed and heat can reduce parts of the grain that naturally carry value. Once removed, that original structure is not fully preserved.",
      "Gentler processing aims to keep more of the grain intact from the start."
    ]
  },
  {
    title: "The reliance on artificial fortification to replace what was stripped away",
    content: [
      "Fortification is often used to add back selected nutrients after intensive processing. It addresses part of the gap, not the whole food matrix.",
      "EkSeva focuses first on preserving what is naturally present."
    ]
  },
  {
    title: "Long-term health impact of over-processed staples",
    content: [
      "Staples shape daily eating patterns over many years. Small compromises at scale can matter over time.",
      "The goal is not fear. It is better standards in everyday food."
    ]
  },
  {
    title: "Ethical responsibility to farmers and the earth",
    content: [
      "Food systems affect land, livelihoods, and future resilience. Sourcing choices can support better outcomes without turning the message into blame.",
      "Care for ingredients includes care for the conditions that produce them."
    ]
  }
];

export default function HomePage() {
  return (
    <>
      <section id="top" className="section-pad pt-16 md:pt-24">
        <div className="container-shell">
          <div className="hero-grid relative overflow-hidden rounded-[2rem] border border-line px-6 py-14 shadow-soft md:px-12 md:py-20">
            <div className="hero-logo-watermark" aria-hidden="true" />
            <div className="grain-lines" />
            <div className="relative z-10 max-w-3xl">
              <div className="mb-6 flex items-center gap-4">
                <div
                  className="hero-logo-badge"
                  role="img"
                  aria-label="EkSeva® logo"
                  title="Place logo image at /public/ekseva-logo.png"
                />
                <p className="text-sm tracking-[0.12em] text-mute uppercase">EkSeva®</p>
              </div>
              <h1 className="max-w-2xl text-4xl font-semibold tracking-[-0.03em] text-ink sm:text-5xl md:text-7xl md:leading-[0.95]">
                Food made for community kitchens.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-mute md:text-xl md:leading-9">
                Better ingredients. Thoughtful sourcing. Long-term care.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <Button href="#products">Explore EkSeva</Button>
                <Button href="/why" variant="secondary">
                  Why EkSeva
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section className="hairline" reveal={false}>
        <div className="grid items-center gap-8 md:grid-cols-[0.95fr_1.05fr] md:gap-10">
          <div className="max-w-xl">
            <p className="mb-4 text-sm uppercase tracking-[0.14em] text-mute">Product Story</p>
            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl md:text-5xl md:leading-tight">
              From field to kitchen, designed to carry care forward.
            </h2>
            <div className="mt-5 space-y-2 text-lg leading-8 text-mute">
              <p>Grown with care.</p>
              <p>Processed gently.</p>
              <p>Made reliable for community kitchens.</p>
            </div>
          </div>
          <MicroStory />
        </div>
      </Section>

      <Section id="difference" className="hairline">
        <div className="mb-10 max-w-4xl">
          <p className="mb-4 text-sm uppercase tracking-[0.14em] text-mute">Difference</p>
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl md:text-5xl">
            What makes EkSeva different
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          <Card title="How ingredients are grown">
            <p>Organic practices that respect soil and life.</p>
          </Card>
          <Card title="How food is made">
            <p>Gentle processes that protect natural nutrition.</p>
          </Card>
          <Card title="Who it serves">
            <p>Community kitchens, farmers, and future generations.</p>
          </Card>
        </div>
        <div className="mt-10 mb-8 max-w-4xl">
          <h3 className="text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl md:text-4xl">
            What commercial flour often misses
          </h3>
          <p className="mt-3 text-sm tracking-tight text-mute">Curiosity reveals depth.</p>
        </div>
        <Accordion items={flourAccordion} />
      </Section>

      <Section id="principle" className="hairline">
        <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-start">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.14em] text-mute">The Principle</p>
            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl md:text-5xl md:leading-tight">
              The cost difference reflects what is preserved — not what is removed.
            </h2>
            <div className="mt-6 space-y-2 text-lg leading-8 text-mute">
              <p>Most food is made cheaper by taking things away.</p>
              <p>We start by keeping what matters.</p>
              <p className="pt-2">The cheapest food today often becomes the most expensive tomorrow.</p>
            </div>
          </div>
          <div id="approach" className="surface-card rounded-[2rem] p-6 md:p-8">
            <p className="mb-3 text-sm uppercase tracking-[0.14em] text-mute">Our Approach</p>
            <p className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
              We don’t add complexity. We remove unnecessary harm.
            </p>
            <p className="mt-4 text-base leading-7 text-mute">Real food doesn’t need fixing later.</p>
            <div className="mt-6 space-y-2 text-sm leading-6 text-mute">
              <p>In health outcomes.</p>
              <p>In environmental damage.</p>
              <p>In farmer livelihoods.</p>
            </div>
            <p className="mt-4 text-sm tracking-tight text-mute/90">No blame. Just truth.</p>
          </div>
        </div>
      </Section>

      <Section id="products" className="hairline">
        <div className="grid gap-10 md:grid-cols-[1fr_1.05fr] md:items-start">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.14em] text-mute">Community Kitchens</p>
            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl md:text-5xl md:leading-tight">
              Community kitchens are acts of care.
            </h2>
            <p className="mt-5 text-lg leading-8 text-mute">
              EkSeva extends that care to the earth that feeds them.
            </p>
            <p className="mt-4 text-sm tracking-tight text-mute">Care, carried further.</p>

          </div>

          <div>
            <div className="mb-6 max-w-4xl">
              <h3 className="text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl md:text-4xl">
                Product focus
              </h3>
            </div>
            <div className="surface-card rounded-[1.5rem] p-5 md:p-6">
              <div className="grid gap-5">
                <div className="rounded-[1rem] border border-line bg-white/70 p-4 md:p-5">
                  <p className="mb-2 text-xs font-medium uppercase tracking-[0.14em] text-mute">Today</p>
                  <p className="text-base leading-7 text-ink md:text-lg">
                    Organic, stone-milled atta designed for community kitchens.
                  </p>
                </div>
                <div className="h-px bg-line" />
                <div className="rounded-[1rem] border border-line bg-white/70 p-4 md:p-5">
                  <p className="mb-2 text-xs font-medium uppercase tracking-[0.14em] text-mute">Tomorrow</p>
                  <p className="text-base leading-7 text-ink md:text-lg">
                    Thoughtfully sourced staples — chosen with the same principles.
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-6 text-sm leading-6 text-mute">
              Each product must earn its place by doing less harm and more good.
            </p>
          </div>
        </div>
      </Section>

      <Section id="connect" className="hairline">
        <div className="mb-8 max-w-4xl">
          <p className="mb-4 text-sm uppercase tracking-[0.14em] text-mute">Connect</p>
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl md:text-5xl">
            Start where you are.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          <Card title="Donate Ingredients">
            <p>Support community kitchens directly.</p>
            <div className="mt-5">
              <Button href="mailto:hello@ekseva.org?subject=Donate%20Ingredients">Donate</Button>
            </div>
          </Card>
          <Card title="Buy for Home or Group">
            <p>Food aligned with your values.</p>
            <div className="mt-5">
              <Button href="mailto:hello@ekseva.org?subject=Shop%20Enquiry" variant="primary">
                Shop
              </Button>
            </div>
          </Card>
          <Card title="Connect a Community Kitchen">
            <p>Bring EkSeva where it’s needed.</p>
            <div className="mt-5">
              <Button href="mailto:hello@ekseva.org?subject=Connect%20a%20Community%20Kitchen">
                Connect
              </Button>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}
