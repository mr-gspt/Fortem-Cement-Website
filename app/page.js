"use client";
import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { DefaultGallery } from "./components/DefaultGallery";
import { ProductCard } from "./components/ProductCard";
import Footer from "./components/Footer.js";
import Contactsection from "./components/Contactsection.js";
import Certification from "./components/Certification.js";
import Carousel from "./components/Carousel.js";
import { PartnerBrands } from "./components/PartnerBrand.js";


export default function Home() {
  const products = [
    {
      image: "/Gallery/test01.jpg", // or remote image
      title: "Cement",
      description:
        "Our cement is sourced from top grade factories in China, Indonesia & Vietnam. All products are DTI & DPWH accredited.",
    },
    {
      image: "/Gallery/test07.jpg",
      title: "Plywood",
      description:
        "Our plywood is directly sourced from top grade suppliers in China. Right grade, size & quality to your requirement. Only sourcing DTI approved quality plywood.",
    },
    {
      image: "/Gallery/test13.jpg",
      title: "Admix",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit dolorum amet dolores praesentium, alias nam? Tempore",
    },
  ];

  const projectImages = [
    { src: "/Carousel/1.png", title: "Sail Residence" },
    { src: "/Carousel/2.png", title: "SM Tuguegarao" },
    { src: "/Carousel/3.png", title: "Studio 7" },
    { src: "/Carousel/4.png", title: "Sultan Kudarat Masjid Alkudra" },
    { src: "/Carousel/5.png", title: "RCS Supermarket Pangasinan" },
    { src: "/Carousel/6.png", title: "RCS Supermarket Pangasinan" },
    { src: "/Carousel/7.png", title: "Pagibig Housing Davao" },
    { src: "/Carousel/8.png", title: "SM Roxas City" },
    { src: "/Carousel/9.png", title: "DPWDH Project Ungka Pavia Flyover" },
    { src: "/Carousel/10.png", title: "DPWH Project Kalibo Bridge III" },
    { src: "/Carousel/11.png", title: "Abreeza Condominium" },
    { src: "/Carousel/12.png", title: "L08 Tuguegarao Residential Building Phase 1,2,3 & 4" },
  ];

  const projectSlides = projectImages.map((project, index) => ({
    id: index + 1,
    image: project.src,
    title: project.title,
    description: project.description,
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
      <div className="absolute top-0 left-0 -z-10 h-screen w-full bg-black/100">
      <div className="absolute top-0 left-0 -z-10 h-screen w-full bg-orange-400/20">
      <img className="absolute top-0 left-0 -z-10 h-screen w-full object-cover opacity-50" src="/Gallery/test06.jpg" alt="background.img" />
      </div>
      </div>
      {/* dark mode removed here */}
      <Header />
      <Hero />
      <br/>
      <br/>
      <br/>
      <DefaultGallery />
      <PartnerBrands/>

      <section id="products" className="relative mx-auto mt-24 w-full max-w-6xl px-6">
        <div className="absolute inset-0 -z-10 mx-auto h-full max-w-6xl rounded-[3rem] bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/10 blur-3xl" />

        <div className="relative overflow-hidden rounded-[2.5rem] border border-gray-200 bg-white/80 px-6 py-16 shadow-[0_35px_90px_rgba(15,23,42,0.2)] backdrop-blur-xl sm:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-4xl font-bold uppercase text-amber-400">
              OUR PRODUCT
            </span>
            <p className="mt-4 text-sm text-gray-600 md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit dolorum amet dolores
            praesentium, alias nam? Tempore
            </p>
          </div>

          {/* Center product cards */}
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
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
        </div>
      </section>

      <br/>
      <br/>

      <Certification/>

      <section className="relative mx-auto mt-24 w-full max-w-6xl px-6">
        <div className="text-center">
          <span className="text-4xl font-bold uppercase text-amber-400">
            Featured Work
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-wide text-gray-800 md:text-4xl">
            Our Project
          </h2>
          <p className="mt-4 text-sm text-gray-600 md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit dolorum amet dolores
          praesentium, alias nam? Tempore
          </p>
        </div>

        <div className="mt-12">
          <Carousel slides={projectSlides} />
        </div>
      </section>
      
      <Contactsection/>
      
      <Footer />
    </main>
  );
}
