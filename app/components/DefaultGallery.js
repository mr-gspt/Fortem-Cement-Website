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
        <section id="ourbrand" data-aos="fade-down" className="w-full mb-12">
      <div className="mx-auto max-w-6xl px-6">
      <div className="text-center">
        <div className="relative inline-block px-3 sm:px-5">
        {/* <h2 className="text-7xl font-extrabold uppercase text-outline-fortem drop-shadow-sm sm:text-7xl lg:text-8xl">
            Our
          </h2> */}
          <h2 className="text-5xl font-extrabold uppercase text-[#eaaa00] drop-shadow-sm sm:text-5xl lg:text-7xl">
          Our Brands
          </h2>
        </div>
      </div>
      <br/>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 justify-items-center">
          {data.map(({ imageLink }, index) => (
            <div
              key={index}
              className="w-full max-w-md overflow-hidden rounded-sm border border-[#eaaa00] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#eaaa00] hover:shadow-[0_25px_60px_rgba(233,155,99,0.25)]"
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