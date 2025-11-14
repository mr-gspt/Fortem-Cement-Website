"use client";
import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { DefaultGallery } from "./components/DefaultGallery";
import { ProductCard } from "./components/ProductCard";
import Footer from "./components/Footer.js";
import Certification from "./components/Certification.js";
import Carousel from "./components/Carousel.js";
import Fortemseal from "./components/Fortemseal.js";


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
      {/* <div className="absolute top-0 left-0 -z-10 h-screen w-full bg-gradient-to-r from-gray-800 via-gray-800 to-gray-200 "> */}
      {/* <div className="absolute top-0 left-0 -z-10 h-screen w-full bg-yellow-500/15"> */}
      <img className="absolute top-0 left-0 -z-10 h-screen w-full object-cover opacity-100" src="/Gallery/bg-cityskyline.png" alt="background.img" />
      {/* </div> */}
      {/* </div> */}
    
      <Header />
      <Hero />
      <br/>
      <br/>
      <br/>
      <DefaultGallery />

      <Fortemseal/>

      <section id="products" className="relative mx-auto mt-24 w-full max-w-6xl px-6">
        {/* <div className="relative overflow-hidden rounded-[2.5rem] border border-gray-200 bg-white/80 px-6 py-16 shadow-[0_35px_90px_rgba(15,23,42,0.2)] backdrop-blur-xl sm:px-12"> */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-4xl font-bold uppercase text-[#eaaa00]">
              OUR PRODUCT
            </span>
            <p className="mt-4 text-base text-gray-600 md:text-xl">
            Our products are sourced from reputable and trusted manufacturers and tested for strength, consistency, and compliance. This ensures you get dependable materials that perform where it matters most.
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
        {/* </div> */}
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
          <Carousel slides={projectSlides} />
        </div>
      </section>
      
      {/* <Contactsection/> */}
      
      <Footer />
    </main>
  );
}
