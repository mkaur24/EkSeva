"use client";

import { useId, useState } from "react";

export type AccordionItem = {
  title: string;
  content: string[];
};

type AccordionProps = {
  items: AccordionItem[];
  className?: string;
};

export function Accordion({ items, className = "" }: AccordionProps) {
  const rootId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={`space-y-3 ${className}`.trim()}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${rootId}-button-${index}`;
        const panelId = `${rootId}-panel-${index}`;

        return (
          <div key={item.title} className="surface-card rounded-2xl">
            <h3>
              <button
                id={buttonId}
                type="button"
                className="focus-ring flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left text-base font-medium tracking-tight text-ink md:px-6 md:py-5"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex((current) => (current === index ? null : index))}
              >
                <span>{item.title}</span>
                <span
                  aria-hidden="true"
                  className={`inline-flex h-7 w-7 items-center justify-center rounded-full border border-line text-sm text-mute transition ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5 md:px-6 md:pb-6">
                  <div className="border-t border-line pt-4 text-sm leading-7 text-mute md:text-base">
                    {item.content.map((paragraph) => (
                      <p key={paragraph} className="mb-3 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
