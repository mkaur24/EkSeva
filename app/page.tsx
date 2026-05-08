import type { Metadata } from "next";
import { Accordion, type AccordionItem } from "@/components/Accordion";
import { Button } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Section";
import { SponsorshipPlanner } from "@/components/SponsorshipPlanner";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Home",
  description:
    "EkSeva® connects responsibly sourced ingredients to community kitchens, food projects, and organisations serving communities across the UK."
};

const pillars = [
  {
    english: "Compassion",
    emoji: "❤️",
    body: "Service that keeps community kitchens supported with care and dignity.",
  },
  {
    english: "Integrity",
    emoji: "🤝",
    body: "Honest sourcing, fair pricing, and transparent partnerships.",
  },
  {
    english: "Courage",
    emoji: "🌏",
    body: "Commitment to better standards in how food is grown and supplied.",
  },
  {
    english: "Discipline",
    emoji: "🚚",
    body: "Consistent quality, dependable logistics, and reliable delivery.",
  },
  {
    english: "Community",
    emoji: "♻️",
    body: "A unified ecosystem of kitchens, growers, volunteers, and supporters.",
  }
];

const productAccordion: AccordionItem[] = [
  {
    title: "Why organic?",
    content: [
      "Organic farming supports cleaner growing systems and reduces dependence on harmful synthetic inputs.",
      "It helps protect soil health and supports long-term agricultural resilience."
    ]
  },
  {
    title: "Why stone-milled?",
    content: [
      "Stone-milling is a gentler process that helps preserve the natural structure of grain.",
      "This approach supports better ingredient integrity from mill to kitchen."
    ]
  },
  {
    title: "Why wholemeal?",
    content: [
      "Wholemeal flour keeps more of the original grain components together.",
      "That provides a fuller ingredient profile for everyday community meals."
    ]
  }
];

const faqItems: AccordionItem[] = [
  {
    title: "I want to partner with EkSeva. How do I start?",
    content: [
      "We welcome partnerships with organisations, ethical growers, community kitchens, and businesses that share our values.",
      <>
        Use the{" "}
        <a href="#contact" className="focus-ring underline underline-offset-4 hover:text-ink">
          contact form
        </a>{" "}
        with your proposal summary and our team will follow up.
      </>
    ]
  },
  {
    title: "Can I volunteer with EkSeva?",
    content: [
      "Yes. You can volunteer across outreach, coordination, and local support.",
      <>
        Start here: {" "}
        <a
          href="https://forms.gle/TZNMmcwXWThFgQRV9"
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring underline underline-offset-4 hover:text-ink"
        >
          Volunteer form
        </a>
        .
      </>
    ]
  },
  {
    title: "How are contributions used?",
    content: [
      "Sponsorships support flour bag delivery to community kitchens at no cost to the kitchen.",
      "They also help improve delivery planning and long-term sustainability work."
    ]
  },
  {
    title: "Where is EkSeva based?",
    content: [
      "EkSeva is based in the United Kingdom.",
      "We aim to respond within 48 hours, Monday to Friday, 9am–6pm GMT."
    ]
  }
];

export default function HomePage() {
  return (
    <>
      <section id="about" className="section-pad pt-6 md:pt-8">
        <div className="container-shell">
          <div className="mb-3 flex justify-center">
            <Image
              src="/ekseva-logo.png"
              alt="EkSeva logo"
              width={220}
              height={220}
              className="h-auto w-[170px] md:w-[220px]"
              priority
            />
          </div>
          <div className="hero-grid about-hero relative overflow-hidden rounded-[2rem] border border-line px-6 py-14 shadow-soft md:px-12 md:py-16">
            <div className="hero-logo-watermark" aria-hidden="true" />
            <div className="relative z-10 max-w-4xl">
              <h1 className="text-4xl font-semibold tracking-[-0.03em] text-ink sm:text-5xl md:text-6xl md:leading-[0.96]">
                EkSeva serves those who serve.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-mute md:text-xl md:leading-9">
                EkSeva is a UK-registered, organic certified business connecting ethically sourced ingredients to community kitchens, food projects, and organisations that serve communities.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="#join">Join the movement</Button>
                <Button href="#products" variant="secondary">Explore products</Button>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <p className="mb-4 text-sm uppercase tracking-[0.14em] text-mute">Our pillars</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {pillars.map((item) => (
                <article key={item.english} className="surface-card rounded-[1.25rem] p-5 text-center">
                  <div className="flex items-center justify-center">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#e6eee8]" aria-hidden="true">
                      <span className="emoji-toned text-base leading-none">{item.emoji}</span>
                    </span>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em] text-ink">{item.english}</h3>
                  <p className="mt-3 text-sm leading-6 text-mute">{item.body}</p>
                </article>
              ))}
            </div>

            <p className="mt-8 text-2xl font-semibold leading-tight tracking-[-0.02em] text-ink md:text-3xl">
              EkSeva is more than a supplier. It is a unified movement built on community values.
            </p>
          </div>
        </div>
      </section>

      <Section id="impact" className="hairline">
        <div className="mt-10 max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl md:text-5xl">EkSeva Approach</h2>
          <p className="mt-5 text-base leading-8 text-mute md:text-lg">
            “EkSeva doesn’t add complexity, instead removes the unnecessary”
          </p>
          <p className="mt-4 text-base leading-8 text-mute md:text-lg">
            EkSeva is strengthening community food networks + supporting those creating positive impact by working alongside community kitchens, local organisations + trusted producers to improve access to ethically sourced, quality ingredients which benefit the health of the environment + the community.
          </p>
        </div>

        <div className="mt-10 max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl md:text-5xl">EkSeva Mission</h2>
          <p className="mt-5 text-base leading-8 text-mute md:text-lg">
            EkSeva mission goes beyond food supply, we aim to protect health + promote better nutrition, honour food by reducing waste + care for the Earth by supporting responsible farming practices.
          </p>
          <p className="mt-4 text-lg italic tracking-tight text-ink">
            “Serving People. Honouring Food. Protecting Nature.”
          </p>
        </div>

        <div className="mt-10 rounded-[1.25rem] border border-line bg-white/75 p-5 md:p-6">
          <p className="mb-4 text-sm uppercase tracking-[0.14em] text-mute">Impact</p>
          <h3 className="text-2xl font-semibold tracking-[-0.02em] text-ink">Why ethics matter</h3>
          <p className="mt-3 text-base leading-7 text-mute md:text-lg">
            At EkSeva, impact is measured by more than supply. It is measured by the 🤝 community kitchens we strengthen, the 🚚 food we help provide, and the 🌍 future we help protect.
          </p>
          <p className="mt-3 text-base italic leading-7 text-ink">
            “Every ingredient we source creates a wider chain of impact - from farm to community kitchen.”
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="surface-card rounded-[1.25rem] p-5">
            <h4 className="text-lg font-semibold text-ink">Supporting community kitchens</h4>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-mute">
              <li>We help community kitchens access quality, ethically sourced ingredients, at competitive prices.</li>
              <li>Create stronger, more sustainable food networks.</li>
              <li>Reduce volunteer admin + ingredient sourcing time.</li>
            </ul>
          </article>

          <article className="surface-card rounded-[1.25rem] p-5">
            <h4 className="text-lg font-semibold text-ink">Supporting ethical growers</h4>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-mute">
              <li>By working with responsible, ethical growers we support farming practices that respect the land, protect biodiversity + sustain livelihoods.</li>
              <li>Protection of soil health, leading to long-term agricultural resilience.</li>
              <li>Sustainable farming support.</li>
              <li>Fair supply partnerships.</li>
            </ul>
          </article>

          <article className="surface-card rounded-[1.25rem] p-5">
            <h4 className="text-lg font-semibold text-ink">Health and nutrition</h4>
            <p className="mt-3 text-sm leading-6 text-mute">“Good ingredients create better food.”</p>
            <p className="mt-2 text-sm leading-6 text-mute">By supplying nutrient rich, wholesome ingredients we improve nutrition + health within communities.</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-mute">
              <li>Better access to wholesome food.</li>
              <li>Supporting healthier diets.</li>
              <li>Improved community wellbeing.</li>
              <li>Reduction in food related health issues.</li>
            </ul>
          </article>

          <article className="surface-card rounded-[1.25rem] p-5">
            <h4 className="text-lg font-semibold text-ink">Environment</h4>
            <p className="mt-3 text-sm leading-6 text-mute">Ethical sourcing protects the environment, our focus on organic or responsibly sourced ingredients helps reduce harmful practices and supports healthier ecosystems.</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-mute">
              <li>Reduced pesticide exposure.</li>
              <li>Healthier soil.</li>
              <li>Sustainable farming methods.</li>
              <li>Lower environmental harm.</li>
            </ul>
          </article>
        </div>
      </Section>

      <Section id="products" className="hairline">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm uppercase tracking-[0.14em] text-mute">Products</p>
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl md:text-5xl">What makes EkSeva different?</h2>
          <p className="mt-5 text-base leading-8 text-mute md:text-lg">
            EkSeva is not a single product. We are building a movement of service and a standard for how community food should be sourced.
          </p>
        </div>

        <article className="mt-8 surface-card rounded-[1.5rem] p-6 md:p-8">
          <h3 className="text-2xl font-semibold tracking-[-0.02em] text-ink md:text-3xl">
            Organic, stone-milled, wholemeal flour
          </h3>
          <div className="mt-6 overflow-hidden rounded-[1.25rem] border border-line bg-white p-2 md:p-3">
            <Image
              src="/faq-flour-visual.png"
              alt="Organic, stone-milled, wholemeal flour"
              width={1536}
              height={1024}
              className="mx-auto h-auto w-[82%] rounded-lg md:w-[76%]"
            />
          </div>
        </article>

        <div className="mt-6">
          <Accordion items={productAccordion} />
        </div>

        <div className="mt-6 rounded-[1rem] border border-[#d8b548] bg-[#fff5cc] px-4 py-3 text-center text-sm font-semibold tracking-[0.08em] text-[#7f6010] uppercase">
          More products coming soon
        </div>
      </Section>

      <Section id="join" className="hairline">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm uppercase tracking-[0.14em] text-mute">Join the movement</p>
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl md:text-5xl">
            Help us strengthen community kitchens.
          </h2>
          <p className="mt-5 text-base leading-8 text-mute md:text-lg">
            Sponsor a flour bag, set up monthly support, or volunteer with us. Every action supports a wider chain of impact.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <SponsorshipPlanner />

          <div className="space-y-5">
            <article className="surface-card rounded-[1.5rem] p-6">
              <p className="text-xs uppercase tracking-[0.14em] text-mute">Volunteer</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-ink">Join our volunteer network</h3>
              <p className="mt-3 text-sm leading-7 text-mute md:text-base">
                Help with outreach, community coordination, and local delivery support.
              </p>
              <Button
                href="https://forms.gle/TZNMmcwXWThFgQRV9"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 w-full justify-center"
              >
                Open volunteer form
              </Button>
            </article>

            <article className="surface-card rounded-[1.5rem] p-6">
              <p className="text-xs uppercase tracking-[0.14em] text-mute">Sponsorship flow</p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-mute">
                <li>You choose one-time, monthly, or quarterly support.</li>
                <li>EkSeva delivers sponsored bags to community kitchens at no kitchen cost.</li>
                <li>Delivery updates are shared with community visibility and accountability.</li>
              </ol>
            </article>
          </div>
        </div>
      </Section>

      <Section id="contact" className="hairline">
        <div className="mt-8">
          <p className="mb-4 text-sm uppercase tracking-[0.14em] text-mute">Contact</p>
          <p className="text-center text-2xl font-semibold tracking-[-0.02em] text-ink md:text-3xl">
            We’d love to hear from you
          </p>
          <p className="mx-auto mt-3 max-w-5xl text-center text-base leading-8 text-mute md:text-lg">
            Whether you are an ethical grower interested in featuring your products on the EkSeva platform or a community kitchen who would like to request a particular product. We also welcome enquiries about volunteering, partnerships, donations + more.
          </p>
          <p className="mt-3 text-center text-lg font-semibold tracking-tight text-[#b7922d] md:text-xl">
            Get in touch!
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <ContactForm />

          <div className="space-y-4">
            <article className="surface-card rounded-[1.25rem] p-5 text-center">
              <div className="mx-auto mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f2d35f] text-[#6f5610]" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="6" width="18" height="12" rx="2" />
                  <path d="M4 8l8 6 8-6" />
                </svg>
              </div>
              <p className="text-xs uppercase tracking-[0.12em] text-mute">Email us</p>
              <a
                href="mailto:admin@ekseva.co.uk"
                className="focus-ring mt-2 inline-block text-xl font-semibold tracking-tight text-ink underline underline-offset-4"
              >
                admin@ekseva.co.uk
              </a>
              <p className="mt-2 text-sm text-mute">We aim to respond within 48 hours.</p>
            </article>

            <article className="surface-card rounded-[1.25rem] p-5 text-center">
              <div className="mx-auto mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f2d35f] text-[#6f5610]" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <p className="text-xs uppercase tracking-[0.12em] text-mute">Instagram</p>
              <a
                href="https://www.instagram.com/ek_seva"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring mt-2 inline-flex items-center gap-2 text-lg font-semibold tracking-tight text-ink underline underline-offset-4"
              >
                @ek_seva
              </a>
              <p className="mt-2 text-sm text-mute">Follow us for updates and events.</p>
            </article>

            <article className="surface-card rounded-[1.25rem] p-5 text-center">
              <div className="mx-auto mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f2d35f] text-[#6f5610]" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </div>
              <p className="text-xs uppercase tracking-[0.12em] text-mute">Response time</p>
              <p className="mt-2 text-lg font-semibold tracking-tight text-ink">Within 48 hours</p>
              <p className="mt-1 text-sm text-mute">Mon–Fri · 9am–6pm GMT</p>
            </article>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="mb-4 text-2xl font-semibold tracking-[-0.02em] text-ink">Contact FAQ</h3>
          <Accordion items={faqItems} />
        </div>
      </Section>
    </>
  );
}
