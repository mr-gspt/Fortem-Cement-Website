"use client";

import Image from "next/image";

export function DefaultGallery() {
    const data = [
      { imageLink: "/Gallery/brand3.png" },
      { imageLink: "/Gallery/brand2.png" },
      { imageLink: "/Gallery/brand1.png" },
      { imageLink: "/Gallery/Kalsi.png" },
      { imageLink: "/Gallery/brand4.png" },
      { imageLink: "/Gallery/brand5.png" },
      { imageLink: "/Gallery/brand6.png" },
      { imageLink: "/Gallery/VegaMaterials.png" },
      { imageLink: "/Gallery/brand7.png" },
      // … keep the rest
    ];
  
    return (
        <section id="ourbrand" data-aos="fade-down" className="w-full py-12">
      <div className="mx-auto max-w-5xl px-6">
      <div className="text-center">
        <div className="relative mt-6 inline-block px-3 sm:px-5">
          <span className="absolute -inset-x-8 bottom-0 top-1/2 -z-10 rounded-full blur-3xl" aria-hidden="true" />
          <h2 className="text-4xl font-bold uppercase text-[#eaaa00] drop-shadow-sm sm:text-5xl lg:text-6xl">
            Our Brands
          </h2>
        </div>
      </div>
      <br/>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 justify-items-center">
          {data.map(({ imageLink }, index) => (
            <div
              key={index}
              className="w-full max-w-md overflow-hidden rounded-sm border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#eaaa00] hover:shadow-[0_25px_60px_rgba(233,155,99,0.25)]"
            >
              <Image
                src={imageLink}
                alt={`gallery-photo-${index}`}
                width={480}
                height={288}
                loading="lazy"
                className="h-60 w-full bg-white object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>

    );
  }
  // dark mode removed here