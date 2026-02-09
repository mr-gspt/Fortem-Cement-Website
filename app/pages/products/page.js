import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Image from "next/image";
import Breadcrumb from '../../components/Breadcrumb'
import CementKg from '../../components/CementKg'
import PlaywoodTb from '../../components/PlaywoodTb'


const page = () => {
  return (
    <main>
        <Header/>
  <section className="relative h-[40vh] w-full md:h-[50vh]">
        <Image
          src="/Gallery/bg-makaticity.png" // change to your banner image
          alt="Fortem Product"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <h1
            data-aos="fade-up"
            data-aos-delay="150"
            className="bg-[#727171]/90 py-2 px-3 mt-3 text-5xl font-bold tracking-wide sm:text-5xl text-[#eaaa00]"
          >
            FORTEM CEMENT
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="250"
            className="mt-2 max-w-2xl text-sm md:text-lg text-gray-100"
          >
            We are a company dedicated to fortifying the cities of tomorrow.
          </p>
        </div>
      </section>
    <div className="mx-auto flex w-full max-w-[90rem] px-6 pt-6">
            <Breadcrumb
              items={[
                { href: "/products", label: "Products" },
                { href: "/products", label: "Products" },
              ]}
            />
          </div> 
{/* PRODUCT CATEGORY SECTION */}
<section className="relative bg-[#b8b1a8]/5 py-24">
  {/* subtle geometric background */}
  <div className="absolute inset-0 opacity-25" />

  <div className="relative mx-auto max-w-7xl px-6">
    {/* Section Header */}
    <div className="text-center text-black mb-16">
      <h2 className="text-4xl md:text-5xl font-serif">
        Explore Our Products
      </h2>
      <p className="mt-4 max-w-3xl mx-auto text-sm md:text-base text-black/80">
        Discover Fortem’s product lines designed to meet modern construction
        and architectural demands.
      </p>
    </div>

    {/* Grid */}
    <div className="grid gap-8 md:grid-cols-3">
      {/* Cement */}
      <a
        href="/products/cement"
        className="group relative h-[420px] overflow-hidden"
      >
        <Image
          src="/Cement/Cement4.png"
          alt="Cement Products"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 transition group-hover:bg-black/55" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="text-white text-3xl font-serif tracking-wide">
            Cement
          </h3>
        </div>
      </a>

      {/* Plywood */}
      <a
        href="/products/plywood"
        className="group relative h-[420px] overflow-hidden"
      >
        <Image
          src="/Plywood/Federalply 3.png"
          alt="Plywood Products"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 transition group-hover:bg-black/55" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="text-white text-3xl font-serif tracking-wide">
            Plywood
          </h3>
        </div>
      </a>

      {/* Boards / Panels */}
      <a
        href="/products/boards"
        className="group relative h-[420px] overflow-hidden"
      >
        <Image
          src="/Gallery/Vegamaterials.png"
          alt="Boards and Panels"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 transition group-hover:bg-black/55" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="text-white text-3xl font-serif tracking-wide">
            Admix
          </h3>
        </div>
      </a>
    </div>
  </div>
</section>

        <Footer/>
    </main>
  )
}

export default page
