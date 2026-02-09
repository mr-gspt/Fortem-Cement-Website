"use client";
import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { DefaultGallery } from "./components/DefaultGallery";
import { ProductCard } from "./components/ProductCard";
import Footer from "./components/Footer.js";
import Carousel from "./components/Carousel.js";
import NationwideReach from "./components/NationwideReach.js";


export default function Home() {
  const products = [
    {
      image: "/Gallery/test01.jpg", // or remote image
      title: "Cement",
      description:
        "The backbone of every build. Our cement portfolio is engineered for reliable performance, consistent quality, and improved workability. A solid foundation and lasting strength for every project.",
    },
    {
      image: "/Gallery/test07.jpg",
      title: "Plywood",
      description:
        "Precision, stability, and finish. Our boards provide versatile solutions for general construction and industrial applications. Engineered for both residential and commercial applications, they help achieve cleaner builds and long-term reliability.",
    },
    {
      image: "/Gallery/test13.jpg",
      title: "Admix",
      description:
        "Performance that enhances every mix. Formulated to improve concrete quality and consistency. From water reduction to enhanced strength and workability, our Admix line ensures efficiency and performance on every pour.",
    },
  ];

  const projectImages = [
    { src: "/Carousel/1.png", title: "Sail Residence" },
    { src: "/Carousel/2.png", title: "SM Tuguegarao" },
    { src: "/Carousel/3.png", title: "Studio 7" },
    { src: "/Carousel/4.png", title: "Sultan Kudarat\nMasjid Alkudra" },
    { src: "/Carousel/5.png", title: "RCS Supermarket \nPangasinan" },
    { src: "/Carousel/6.png", title: "RCS Supermarket \nPangasinan" },
    { src: "/Carousel/7.png", title: "Pagibig Housing Davao" },
    { src: "/Carousel/8.png", title: "SM Roxas City" },
    { src: "/Carousel/9.png", title: "DPWDH Project Ungka\n Pavia Flyover" },
    { src: "/Carousel/10.png", title: "DPWH Project Kalibo\n Bridge III" },
    { src: "/Carousel/11.png", title: "Abreeza Condominium" },
    { src: "/Carousel/12.png", title: "L08 Tuguegarao Residential Building Phase 1,2,3 & 4" },
  ];

  const projectSlides = projectImages.map((project, index) => ({
    id: index + 1,
    image: project.src,
    title: project.title,
  }));

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <main className="relative">
      {/* Background Image*/}
      {/* <div className="absolute top-0 left-0 -z-10 h-screen w-full bg-gradient-to-r from-gray-800 via-gray-800 to-gray-200 "> */}
      {/* <div className="absolute top-0 left-0 -z-10 h-screen w-full bg-yellow-500/15"> */}
      {/* <img className="absolute inset-0 -z-10 h-screen w-full object-cover" 
            src="/Gallery/bg-cityskyline.png" 
            alt="background.img" /> */}
      {/* </div> */}
      {/* </div> */}
    
      <Header />
      <Hero />
      <br/>
      <br/>
      <br/>
      <DefaultGallery />

      <section className="relative w-full overflow-hidden py-16 bg-gradient-to-r from-[#3a3a3a] via-[#2a2a2a] to-[#1f1f1f]">
      {/* Background Accent Shapes */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#eaaa00]/10 blur-[80px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white/5 blur-[120px]" />

      {/* Subtle angled overlay */}
      <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-tr from-black/20 to-transparent opacity-40" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2">
          
          {/* TEXT SECTION */}
          <div>
            {/* Thin Gold Accent Bar */}
            <div className="mb-6 h-1.5 w-20 rounded-full bg-[#eaaa00]" />

            <p className="text-xl md:text-2xl leading-relaxed text-gray-100 italic">
              The{" "}
              <span className="font-semibold italic text-[#eaaa00]">
                Fortem Seal of Quality
              </span>{" "}
              stands as a symbol of the dedication and trust that define everything
              we do. Each product and partnership bearing this seal reflects our
              pursuit of lasting value and our pledge to build people, build
              bridges, and build futures together.
            </p>
          </div>

          {/* IMAGE SECTION */}
          <div className="flex justify-center md:justify-end">
            <div className="rounded-2xl bg-white/5 backdrop-blur-md p-6 shadow-[0_18px_50px_rgba(0,0,0,0.6)] border border-white/10 hover:border-[#eaaa00]/50 transition">
              <img
                src="/Gallery/Seal 1.png"
                alt="Fortem Seal of Quality"
                className="w-72 md:w-96 drop-shadow-2xl transform hover:scale-105 transition duration-300"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>

      {/* <section id="products" className="relative mx-auto mt-24 w-full max-w-7xl px-6">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-5xl sm:text-5xl md:text-7xl font-bold uppercase text-[#eaaa00]">
              OUR PRODUCT
            </h2>
            <p className="mt-4 text-base text-gray-600 md:text-xl">
            Our products are sourced from reputable and trusted manufacturers and tested for strength, consistency, and compliance. This ensures you get dependable materials that perform where it matters most.
            </p>
          </div>
      
          <div className="mt-12 mb-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <div key={index} className="w-full">
                <ProductCard
                  image={product.image}
                  title={product.title}
                  description={product.description}
                />
              </div>
            ))}
          </div>
      </section> */}
        
      <NationwideReach/>

      <section className="py-16">
    <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
            <h2 className="text-4xl sm:text-4xl md:text-6xl font-bold uppercase text-[#eaaa00]">Certification</h2>

            <p className="text-xl max-w-5xl mx-auto mt-4 text-[#727171]">
            Our commitment to quality is built on trust, compliance, and performance. The certifications validate our continuous pursuit of excellence from sourcing to testing to delivery and service. Each certification is a mark of our promise to uphold the Fortem seal of quality in evert product we offer.
            </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
            <div>
                <div className="relative">
                    <img className="object-contain object-center w-full h-64 rounded-lg lg:h-80" src="/Certification/DPWH.png" alt="Certification 1"/>

                </div>

                <h1 className="mt-6 text-2xl font-semibold text-[#eaaa00]">
                    DPWH
                </h1>

                <hr className="w-32 my-6 text-[#727171]"/>

                <p className="text-xl text-[#727171]">
                Ensures cement meets essential quality standards for construction in the Philippines.
                </p>
            </div>

            <div>
                <div className="relative">
                    <img className="object-contain object-center w-full h-64 rounded-lg lg:h-80" src="/Certification/DTI-BPS.png" alt="Certification 3"/>
                </div>

                <h1 className="mt-6 text-2xl font-semibold text-[#eaaa00]">
                DTI Bureau of Philippine Standard
                </h1>

                <hr className="w-32 my-6 text-[#727171]"/>

                <p className="text-xl text-[#727171]">
                Ensures products meet the Philippine National Standards (PNS) for safety and quality.
                </p>
            </div>

            <div>
                <div className="relative">
                    <img className="object-contain object-center w-full h-64 rounded-lg lg:h-80" src="/Certification/MSDS.png" alt=""/>
                </div>

                <h1 className="mt-6 text-2xl font-semibold text-[#eaaa00]">
                     MSDS
                </h1>

                <hr className="w-32 my-6 text-[#727171]"/>

                <p className="text-xl text-[#727171]">
                Ensures compliance with safety and regulatory standards.
                </p>
            </div>
        </div>
    </div>
</section>

      <section className="relative mx-auto mt-5 w-full px-6">
        <div className="text-center">
          <h2 className="text-4xl sm:text-4xl md:text-6xl font-bold uppercase text-[#eaaa00]">
            Featured Projects
          </h2>
          <Carousel slides={projectSlides} />
        </div>
      </section>
      
      {/* <Contactsection/> */}
      
      <Footer />
    </main>
  );
}
