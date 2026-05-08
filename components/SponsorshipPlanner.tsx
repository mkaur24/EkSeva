"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/Button";

type Frequency = "one-time" | "monthly" | "quarterly";

const ONE_TIME_DONATE_LINK = "https://checkout.revolut.com/pay/466fcc36-985b-4f63-99ae-8fc4f6cbea43";
const ONE_BAG_LINK = "https://checkout.revolut.com/pay/a5105b9a-e5cc-492c-8ff6-7fad90e58698";
const MONTHLY_LINK = "https://checkout.revolut.com/subscription/4d22e8bb-f1c8-4d01-a8e6-442939ed392c";
const QUARTERLY_LINK = ONE_TIME_DONATE_LINK;

export function SponsorshipPlanner() {
  const [frequency, setFrequency] = useState<Frequency>("one-time");

  const selectedLink = useMemo(() => {
    if (frequency === "monthly") return MONTHLY_LINK;
    if (frequency === "quarterly") return QUARTERLY_LINK;
    return ONE_TIME_DONATE_LINK;
  }, [frequency]);

  const ctaLabel = useMemo(() => {
    if (frequency === "monthly") return "Start monthly sponsorship";
    if (frequency === "quarterly") return "Continue to quarterly support";
    return "Donate any amount";
  }, [frequency]);

  return (
    <article className="surface-card rounded-[1.5rem] p-6 md:p-8">
      <p className="text-xs uppercase tracking-[0.14em] text-mute">Sponsorship</p>
      <h3 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-ink md:text-3xl">
        Your generosity is a step toward a better future.
      </h3>

      <div className="mt-7">
        <p className="text-sm font-medium text-ink">Sponsorship type</p>
        <div className="mt-3 grid gap-2 sm:grid-cols-3">
          {[
            { id: "one-time", label: "One-off" },
            { id: "monthly", label: "Monthly" },
            { id: "quarterly", label: "Quarterly" }
          ].map((item) => {
            const active = frequency === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setFrequency(item.id as Frequency)}
                className={`focus-ring rounded-xl border px-4 py-2.5 text-sm font-medium transition ${
                  active
                    ? "border-ink bg-ink text-white"
                    : "border-line bg-white text-mute hover:border-line-strong hover:text-ink"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-7 rounded-2xl border border-line bg-white/70 p-4">
        <p className="text-sm leading-7 text-mute">
          {frequency === "monthly"
            ? "Set up monthly support for consistent planning and regular impact."
            : frequency === "quarterly"
            ? "Quarterly support uses the one-off secure checkout link for now."
            : "Choose one-off support with any amount through secure checkout."}
        </p>
        {frequency === "one-time" ? (
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Button
              href={ONE_BAG_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full justify-center"
            >
              Donate one bag
            </Button>
            <Button
              href={ONE_TIME_DONATE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="w-full justify-center"
            >
              Donate any amount
            </Button>
          </div>
        ) : (
          <Button
            href={selectedLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 w-full justify-center"
          >
            {ctaLabel}
          </Button>
        )}
      </div>
    </article>
  );
}
