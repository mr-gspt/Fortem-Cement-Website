"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const useAutoSlide = (slideCount, interval, advanceSlide) => {
  const latestAdvance = useRef(advanceSlide);

  useEffect(() => {
    latestAdvance.current = advanceSlide;
  }, [advanceSlide]);

  useEffect(() => {
    if (!slideCount || interval <= 0) {
      return undefined;
    }

    const id = setInterval(() => {
      latestAdvance.current();
    }, interval);

    return () => clearInterval(id);
  }, [interval, slideCount]);
};

const FALLBACK_IMAGE = "https://picsum.photos/id/20/800/600";

const DEFAULT_SLIDES = [
  { id: 1, image: "https://picsum.photos/id/10/800/600", title: "Nature 1", description: "Nature first" },
  { id: 2, image: "https://picsum.photos/id/11/800/600", title: "Nature 2", description: "Nature second" },
  { id: 3, image: "https://picsum.photos/id/12/800/600", title: "Nature 3", description: "Nature 3rd" },
  { id: 4, image: "https://picsum.photos/id/13/800/600", title: "Nature 4", description: "Nature last" },
];

export default function Carousel({ slides = DEFAULT_SLIDES, autoPlayInterval = 4500 }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(1);
  const [slidePercentage, setSlidePercentage] = useState(100);
  const [slidesData, setSlidesData] = useState(() => slides);

  useEffect(() => {
    setSlidesData(slides);
  }, [slides]);

  useEffect(() => {
    const updateVisibleSlides = () => {
      const isMobile = window.innerWidth < 768;
      const slidesToShow = isMobile ? 1 : Math.min(3, Math.max(slidesData.length, 1));

      setVisibleSlides(slidesToShow);
      setSlidePercentage(100 / slidesToShow);
    };

    updateVisibleSlides();
    window.addEventListener("resize", updateVisibleSlides);
    return () => window.removeEventListener("resize", updateVisibleSlides);
  }, [slidesData.length]);

  const maxIndex = useMemo(() => Math.max(slidesData.length - visibleSlides, 0), [slidesData.length, visibleSlides]);

  useEffect(() => {
    setCurrentSlide((prev) => (prev > maxIndex ? maxIndex : prev));
  }, [maxIndex]);

  useAutoSlide(slidesData.length, autoPlayInterval, () => {
    setCurrentSlide((prev) => (prev >= maxIndex ? 0 : prev + 1));
  });

  const next = () => {
    setCurrentSlide((prev) => (prev < maxIndex ? prev + 1 : prev));
  };

  const prev = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const goTo = (index) => {
    setCurrentSlide(index <= maxIndex ? index : maxIndex);
  };

  const handleImageError = (event) => {
    if (event.currentTarget.dataset.fallbackApplied) {
      return;
    }

    event.currentTarget.dataset.fallbackApplied = "true";
    event.currentTarget.src = FALLBACK_IMAGE;
  };

  return (
    <div className="mx-auto w-full max-w-[85rem] px-4 py-12">
      <div className="relative overflow-hidden rounded-lg bg-white shadow-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * slidePercentage}%)` }}
        >
          {slidesData.map((slide, index) => (
            <div
              key={slide.id ?? index}
              className="flex-shrink-0 px-2 py-4"
              style={{ flex: `0 0 ${100 / visibleSlides}%`, maxWidth: `${100 / visibleSlides}%` }}
            >
              <div className="flex h-full flex-col overflow-hidden rounded-[3px] border border-[#e2d9c3] bg-[#fefaf1] shadow-[0_18px_45px_rgba(0,0,0,0.08)]">
                <div className="relative h-80 overflow-hidden bg-white md:h-100">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="h-full w-full object-cover"
                    onError={handleImageError}
                    loading={index <= visibleSlides ? "eager" : "lazy"}
                  />
                </div>

                <div className="flex flex-1 flex-col items-center justify-center gap-3 bg-[#eaaa00] px-7 py-2 text-center min-h-[50px]">
                  <h3 className="text-xl font-semibold leading-tight text-white whitespace-pre-line">{slide.title}</h3>
                  {slide.description && (
                    <p className="text-sm leading-relaxed text-[#5c5143]">{slide.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={prev}
          disabled={currentSlide === 0}
          className={`absolute left-0 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-md transition hover:bg-white ${
            currentSlide === 0 ? "cursor-not-allowed opacity-50" : ""
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          type="button"
          onClick={next}
          disabled={currentSlide >= maxIndex}
          className={`absolute right-0 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-md transition hover:bg-white ${
            currentSlide >= maxIndex ? "cursor-not-allowed opacity-50" : ""
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="mt-4 flex justify-center space-x-2">
        {slidesData.map((slide, index) => (
          <button
            key={slide.id ?? index}
            type="button"
            onClick={() => goTo(index)}
            className={`h-3 w-3 rounded-full transition-colors ${
              currentSlide === index ? "bg-yellow-500" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
