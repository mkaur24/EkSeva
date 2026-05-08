"use client";

import { useEffect, useState } from "react";

type Slide = {
  title: string;
  caption: string;
  image: string;
};

const slides: Slide[] = [
  {
    title: "Community Service",
    caption: "EkSeva in service with community kitchens.",
    image: "/impact-slide-1.jpg"
  },
  {
    title: "Kitchen Impact",
    caption: "Supporting kitchens with ethical, fairly priced food.",
    image: "/impact-slide-2.jpg"
  },
  {
    title: "Volunteer Network",
    caption: "Growing a movement of sponsors and volunteers.",
    image: "/impact-slide-3.jpg"
  }
];

export function ImageSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timer = window.setInterval(() => {
      setCurrent((index) => (index + 1) % slides.length);
    }, 3500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-line bg-white/75 shadow-soft">
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <figure key={slide.title} className="min-w-full p-4 md:p-6">
            <div className="overflow-hidden rounded-[1.25rem] border border-line bg-white">
              <img src={slide.image} alt={slide.title} className="h-64 w-full object-cover md:h-80" />
            </div>
            <figcaption className="mt-4 px-1">
              <p className="text-lg font-medium tracking-tight text-ink">{slide.title}</p>
              <p className="mt-1 text-sm text-mute">{slide.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full border border-line bg-white/90 px-3 py-1.5">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            className={`focus-ring h-2.5 w-2.5 rounded-full transition ${
              current === index ? "bg-accent" : "bg-ink/25 hover:bg-ink/40"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}
