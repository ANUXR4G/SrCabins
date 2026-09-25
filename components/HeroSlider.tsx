"use client";

import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { site } from "@/lib/site-data";

const slides = [
  {
    image: "/images/2025_07_IMG_20211021_220222-scaled.jpg",
    title: "Premium Portable Cabins",
    text: "Custom-built portable cabins for offices, accommodation, security and site solutions across India.",
  },
  {
    image: "/images/2025_09_portable-cabins.jpeg",
    title: "Built for Durability",
    text: "Combining traditional craftsmanship with cutting-edge design for modern portable structures.",
  },
  {
    image: "/images/2025_09_accommodation-cabins.jpeg",
    title: "Trusted Since 2021",
    text: "700+ completed projects and 600+ satisfied clients with quality, integrity and timely delivery.",
  },
];

export function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5500, stopOnInteraction: false }),
  ]);
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative min-h-[78vh] overflow-hidden bg-primary-dark">
      <div ref={emblaRef} className="h-full">
        <div className="flex">
          {slides.map((slide) => (
            <div
              key={slide.image}
              className="relative min-h-[78vh] min-w-0 flex-[0_0_100%]"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#034661ee] via-[#03466199] to-transparent" />
              <div className="container-site relative z-10 flex min-h-[78vh] items-center py-20">
                <div className="max-w-2xl text-white">
                  <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#bde5f0]">
                    {site.name}
                  </p>
                  <h1 className="font-[family-name:var(--font-sora)] text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                    {slide.title}
                  </h1>
                  <p className="mt-4 max-w-xl text-base text-white/90 md:text-lg">
                    {slide.text}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link href="/services" className="btn-primary">
                      Our Services <ArrowRight className="size-4" />
                    </Link>
                    <Link href="/contact" className="btn-accent">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous"
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-4 top-1/2 z-20 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/20 text-white backdrop-blur"
      >
        <ChevronLeft />
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-4 top-1/2 z-20 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/20 text-white backdrop-blur"
      >
        <ChevronRight />
      </button>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Slide ${i + 1}`}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-2.5 rounded-full transition-all ${
              selected === i ? "w-8 bg-accent" : "w-2.5 bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
