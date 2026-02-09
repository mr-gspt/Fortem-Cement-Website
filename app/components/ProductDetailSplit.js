// components/ProductDetailSplit.js
"use client";

import Image from "next/image";
import Link from "next/link";

/**
 * ProductDetailSplit
 * - reverse=false: text LEFT, image RIGHT
 * - reverse=true : image LEFT, text RIGHT (vice versa)
 */
export default function ProductDetailSplit({
  title,
  description,
  image,
  ctaLabel = "View Products",
  ctaHref = "#",
  reverse = false,
}) {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="overflow-hidden rounded-sm border border-gray-300 bg-white">
          <div className={`grid grid-cols-1 lg:grid-cols-2 ${reverse ? "lg:[direction:rtl]" : ""}`}>
            {/* Image panel */}
            <div className={`relative min-h-[320px] lg:min-h-[560px] ${reverse ? "lg:[direction:ltr]" : ""}`}>
              <Image
                src={image}
                alt={title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Text panel */}
            <div className={`flex flex-col justify-center px-8 py-12 sm:px-12 ${reverse ? "lg:[direction:ltr]" : ""}`}>
              <h1 className="font-serif text-4xl sm:text-5xl tracking-tight text-gray-900">
                {title}
              </h1>

              <p className="mt-8 max-w-xl text-base sm:text-lg leading-relaxed text-gray-600">
                {description}
              </p>

              <div className="mt-12">
                <Link
                  href={ctaHref}
                  className="inline-flex items-center justify-center rounded border border-gray-400 px-8 py-3 text-sm font-semibold tracking-wide text-gray-700 transition hover:bg-gray-50"
                >
                  {ctaLabel}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
