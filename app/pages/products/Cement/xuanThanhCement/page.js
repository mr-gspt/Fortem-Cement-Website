"use client";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Breadcrumb from "@/app/components/Breadcrumb";
import Image from "next/image";
import { useState } from "react";

function PreviewImage({ src, alt, width = 600, height = 800, sizes }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group relative block w-full overflow-hidden rounded bg-white shadow-sm cursor-pointer"
      >
        <Image
          alt={alt}
          src={src}
          width={width}
          height={height}
          priority
          sizes={sizes}
          className="h-auto w-full object-contain"
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition duration-200 group-hover:opacity-100">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              viewBox="0 0 50 50"
              fill="currentColor"
            >
              <path d="M 21 3 C 11.6 3 4 10.6 4 20 C 4 29.4 11.6 37 21 37 C 24.354553 37 27.47104 36.01984 30.103516 34.347656 L 42.378906 46.621094 L 46.621094 42.378906 L 34.523438 30.279297 C 36.695733 27.423994 38 23.870646 38 20 C 38 10.6 30.4 3 21 3 z M 21 7 C 28.2 7 34 12.8 34 20 C 34 27.2 28.2 33 21 33 C 13.8 33 8 27.2 8 20 C 8 12.8 13.8 7 21 7 z"></path>
            </svg>
          </span>
        </div>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-6"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-lg bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 z-10 h-10 w-10 rounded-full bg-black/70 text-white transition hover:bg-black cursor-pointer"
              aria-label="Close preview"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <Image
              alt={`${alt} preview`}
              src={src}
              width={width}
              height={height}
              sizes="100vw"
              className="h-full w-full max-h-[80vh] object-contain"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}

export default function Page() {
  const productEntries = [
    {
      title: "Xuan Thanh Type 1",
      image: "/Cement/xuan type 1.png",
      sizes: "(max-width: 1024px) 90vw, 31rem",
      paragraphs: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      ],
      specs: [
        { label: "Applications", value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { label: "Finish", value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { label: "Packaging", value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
      ],
    },
    {
      title: "Xuan Thanh Type 1P",
      image: "/Cement/xuan type 1P.png",
      sizes: "(max-width: 1024px) 90vw, 50vw",
      paragraphs: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      ],
      specs: [
        { label: "Applications", value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { label: "Workability", value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { label: "Packaging", value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
      ],
      reverse: true,
    },
  ];

  return (
    <main>
      <Header />
      <div className="mx-auto flex w-full max-w-[90rem] px-4 sm:px-6 pt-6 mb-6 sm:mb-10">
        <Breadcrumb
          items={[
            { href: "/products", label: "Products" },
            { href: "/xuanThanhCement", label: "Xuan Thanh Cement" },
          ]}
        />
      </div>

      <section className="container mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-10 overflow-hidden space-y-12">
        {productEntries.map((product) => (
          <div
            key={product.title}
            className={`flex flex-col ${product.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} lg:items-center gap-8 lg:gap-12`}
          >
            <div className="w-full lg:w-[31rem] max-w-sm sm:max-w-md mx-auto">
              <PreviewImage
                alt={product.title}
                src={product.image}
                width={600}
                height={800}
                sizes={product.sizes}
              />
            </div>

            <div className="lg:w-1/2 space-y-6">
              <div className="space-y-3">
                <h1 className="text-[#eaaa00] text-3xl sm:text-5xl lg:text-6xl font-black leading-tight">
                  {product.title}
                </h1>
                <p className="text-2xl font-extrabold text-gray-900 tracking-tight">
                  {product.price}
                </p>
              </div>

              <div className="space-y-4 text-base sm:text-lg leading-relaxed text-gray-700">
                {product.paragraphs.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </div>

              <div className="space-y-3">
                {product.specs.map((spec) => (
                  <p key={spec.label} className="text-base sm:text-lg text-gray-800">
                    <span className="font-semibold">{spec.label}:</span>{" "}
                    <span className="text-gray-700">{spec.value}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Partner Brand Section */}
        <div className="space-y-4">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-500">Our Partner Brands</h1>
            <p className="mt-2 max-w-xl text-sm sm:text-base text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Mobile: swipeable row; Desktop: grid */}
          <div className="flex gap-3 overflow-x-auto pb-3 snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:pb-0 lg:grid-cols-4">
            {[
              "brand2.png",
              "brand3.png",
              "brand4.png",
              "brand5.png",
              "brand6.png",
              "brand7.png",
              "brand8.png",
              "brand1.png",
            ].map((logo, idx) => (
              <div
                key={logo}
                className="min-w-[160px] md:min-w-0 md:w-full grid place-content-center bg-white rounded shadow-sm snap-center"
              >
                <Image
                  src={`/Gallery/${logo}`}
                  alt={`Partner brand ${idx + 1}`}
                  width={285}
                  height={100}
                  className="h-50 sm:h-50 w-full object-contain p-3"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
