"use client";
import React from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";

const logos = [
  { src: "/Gallery/brand1.png", alt: "Brand 1", w: 570, h: 80 }, // 2× of 285×40
  { src: "/Gallery/brand2.png", alt: "Brand 2", w: 570, h: 80 }, // 2× of 216×40
  { src: "/Gallery/brand3.png", alt: "Brand 3", w: 570, h: 80 }, // 2× of 260×40
  { src: "/Gallery/brand4.png", alt: "Brand 4", w: 570, h: 80 }, // 2× of 221×40
  { src: "/Gallery/brand5.png", alt: "Brand 5", w: 570, h: 80 },
  { src: "/Gallery/brand6.png", alt: "Brand 6", w: 570, h: 80 },
  { src: "/Gallery/brand7.png", alt: "Brand 7", w: 570, h: 80 },
  { src: "/Gallery/brand8.png", alt: "Brand 8", w: 570, h: 80 },
];

const plywoodbrands = [
  { src: "/Gallery/brand1.png", alt: "Brand 1", w: 570, h: 80 }, // 2× of 285×40
  { src: "/Gallery/brand2.png", alt: "Brand 2", w: 570, h: 80 }, // 2× of 216×40
  { src: "/Gallery/brand3.png", alt: "Brand 3", w: 570, h: 80 }, // 2× of 260×40
  { src: "/Gallery/brand4.png", alt: "Brand 4", w: 570, h: 80 }, // 2× of 221×40
];

const admixbrands = [
  { src: "/Gallery/brand1.png", alt: "Brand 1", w: 570, h: 80 }, // 2× of 285×40
  { src: "/Gallery/brand2.png", alt: "Brand 2", w: 570, h: 80 }, // 2× of 216×40
  { src: "/Gallery/brand3.png", alt: "Brand 3", w: 570, h: 80 }, // 2× of 260×40
  { src: "/Gallery/brand4.png", alt: "Brand 4", w: 570, h: 80 }, // 2× of 221×40
];

export default function Page() {
  return (
    <main className="bg-white">
      <Header />

      <div className="mx-auto flex w-full max-w-[90rem] px-6 pt-6">
        <Breadcrumb items={[{ href: "/brands", label: "Brands" }]} />
      </div>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-4xl font-bold text-[#eaaa00] sm:text-5xl">
            OUR CEMENT BRANDS
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {logos.map((l) => (
            <div
              key={l.src}
              className="grid place-content-center p-4 grayscale transition-[filter] hover:grayscale-0"
            >
              <Image
                src={l.src}
                alt={l.alt}
                width={l.w}
                height={l.h}
                // pick ONE of these size controls:
                // className="h-14 md:h-16 w-auto"        // option A: control by height
                className="w-100 md:w-80 h-auto"     // option B: control by width
                // className="max-h-16 w-auto"         // option C: cap height
                priority
              />
            </div>
          ))}
        </div>
      </section>
      <hr className="my-4 border-t-10 border-gray-300"/>
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-4xl font-bold text-[#eaaa00] sm:text-5xl">
            OUR PLYWOOD BRANDS
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {plywoodbrands.map((l) => (
            <div
              key={l.src}
              className="grid place-content-center p-4 grayscale transition-[filter] hover:grayscale-0"
            >
              <Image
                src={l.src}
                alt={l.alt}
                width={l.w}
                height={l.h}
                // pick ONE of these size controls:
                // className="h-14 md:h-16 w-auto"        // option A: control by height
                className="w-100 md:w-80 h-auto"     // option B: control by width
                // className="max-h-16 w-auto"         // option C: cap height
                priority
              />
            </div>
          ))}
        </div>
      </section>
      <hr className="my-4 border-t-10 border-gray-300"/>
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-xl font-bold text-[#eaaa00] sm:text-5xl">
            OUR ADMIX BRANDS
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {admixbrands.map((l) => (
            <div
              key={l.src}
              className="grid place-content-center p-4 grayscale transition-[filter] hover:grayscale-0"
            >
              <Image
                src={l.src}
                alt={l.alt}
                width={l.w}
                height={l.h}
                // pick ONE of these size controls:
                // className="h-14 md:h-16 w-auto"        // option A: control by height
                className="w-100 md:w-80 h-auto"     // option B: control by width
                // className="max-h-16 w-auto"         // option C: cap height
                priority
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
