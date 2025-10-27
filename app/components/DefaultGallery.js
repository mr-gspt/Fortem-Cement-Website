"use client";

export function DefaultGallery() {
    const data = [
      { imageLink: "/Gallery/brand1.png" },
      { imageLink: "/Gallery/brand2.png" },
      { imageLink: "/Gallery/brand3.png" },
      { imageLink: "/Gallery/brand4.png" },
      { imageLink: "/Gallery/brand5.png" },
      { imageLink: "/Gallery/brand6.png" },
      { imageLink: "/Gallery/brand7.png" },
      { imageLink: "/Gallery/brand8.png" },
      { imageLink: "/Plywood/FEDERAL PLY.png" },
      { imageLink: "/Plywood/Stallion ply.png" },
      { imageLink: "/Plywood/TITAN PLY.png" },
      // … keep the rest
    ];
  
    return (
        <section id="ourbrand" data-aos="fade-down" className="w-full py-12">
      <div className="mx-auto max-w-7xl px-6">
      <div className="text-center">
        <div className="relative mt-6 inline-block px-3 sm:px-5">
          <span className="absolute -inset-x-8 bottom-0 top-1/2 -z-10 rounded-full blur-3xl" aria-hidden="true" />
          <h2 className="text-4xl font-bold uppercase text-yellow-500 drop-shadow-sm sm:text-5xl lg:text-6xl">
            Our Brands
          </h2>
        </div>
      </div>
      <br/>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
          {data.map(({ imageLink }, index) => (
            <div
              key={index}
              className="w-full max-w-md overflow-hidden rounded-xl bg-white shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <img
                src={imageLink}
                alt={`gallery-photo-${index}`}
                className="h-72 w-full bg-white object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>

    );
  }
  // dark mode removed here
  
