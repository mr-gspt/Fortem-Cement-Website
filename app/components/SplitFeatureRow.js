// components/SplitFeatureRow.jsx
"use client";

import Image from "next/image";

export default function SplitFeatureRow({
  title,
  description,
  ctaLabel = "View Products",
  ctaHref = "#",
  imageSrc,
  imageAlt = "",
  reverse = false,
  priority = false,
}) {
  return (
    <section className="w-full">
      <div
        className={[
          "mx-auto max-w-7xl",
          "grid grid-cols-1 md:grid-cols-2",
          "border border-gray-300 bg-white",
          "min-h-[320px] md:min-h-[360px]",
        ].join(" ")}
      >
        {/* Text side */}
        <div
          className={[
            "flex flex-col justify-center",
            "px-8 py-10 md:px-12",
            reverse ? "md:order-2" : "md:order-1",
          ].join(" ")}
        >
          <h3 className="font-serif text-2xl md:text-3xl text-gray-900">
            {title}
          </h3>

          <p className="mt-4 max-w-prose text-sm md:text-base leading-relaxed text-gray-600">
            {description}
          </p>

          <div className="mt-8">
            <a
              href={ctaHref}
              className="inline-flex items-center justify-center rounded border border-gray-400 px-6 py-2 text-sm text-gray-700 hover:bg-gray-50"
            >
              {ctaLabel}
            </a>
          </div>
        </div>

        {/* Image side */}
        <div
          className={[
            "relative w-full",
            "min-h-[220px] md:min-h-[360px]",
            reverse ? "md:order-1" : "md:order-2",
          ].join(" ")}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority={priority}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
