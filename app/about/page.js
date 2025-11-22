"use client";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import Contactsection from "../components/Contactsection.js";
import Breadcrumb from "../components/Breadcrumb.js";
import OurTeam from "../components/OurTeam.js";


export default function AboutPage() {
  useEffect(() => {
    // Set page title
    document.title = "About Us - FC Fortem";
    
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  const coreValues = [
    {
      title: "Consistently Reliable",
      image: "/Gallery/construction.png",
      alt: "Consistently Reliable icon",
    },
    {
      title: "Hungry to Win",
      image: "/Gallery/HUN.png",
      alt: "Hungry to Win icon",
    },
    {
      title: "Ownership",
      image: "/Gallery/OWN.png",
      alt: "Ownership icon",
    },
    {
      title: "Professional Transparency",
      image: "/Gallery/PRO.png",
      alt: "Professional Transparency icon",
    },
    {
      title: "Shared Safety",
      image: "/Gallery/SHA.png",
      alt: "Shared Safety icon",
    },
  ];

  return (
    <main className="relative min-h-screen">
      
      <Header />
      <div className="mx-auto flex w-full max-w-[90rem] px-6 pt-6">
        <Breadcrumb
          items={[
            { href: "/about", label: "About Us" },
          ]}
        />
      </div>
      
      {/* About Us Content */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
          
            <h1 className="font-bold uppercase text-center text-[#eaaa00] text-4xl sm:text-5xl lg:text-5xl">
            ABOUT US
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We are a company dedicated to fortifying the cities of tomorrow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16" data-aos="fade-up">
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-semibold text-[#eaaa00] mb-4">Mission</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                To build a responsive, proactive, and reliable distribution network that empower our partners to grow with confidence.
                </p>
              </div>
              
              <div>
                <h2 className="text-5xl font-semibold text-[#eaaa00] mb-4">Vision</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                To become the preferred supplier of construction materials in the Philippines and the Asia-Pacific region.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/Gallery/mission2.jpg" 
                alt="Our Mission" 
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                data-aos="zoom-in"
              />
            </div>
          </div>

          {/* Core Values */}
          <div className="container px-5 py-24 mx-auto">

            <h1 className="font-helvetica-world font-bold text-center text-yellow-500 text-4xl sm:text-5xl lg:text-5xl py-1">Customer promise & Core Values</h1>
            <p className="mt-4 text-center text-lg text-gray-600 max-w-2xl mx-auto">
            We promise to delivery quality, competitive pricing, and consistent supply placing the needs of our partners and customers at the heart of everything we do.
            </p>
          <br/>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {coreValues.map((value) => (
            <div
              key={value.title}
              className="flex flex-col items-center text-center"
              data-aos="fade-up"
            >
              <div className="h-32 w-32 overflow-hidden rounded-full bg-indigo-100 shadow-lg">
                <Image
                  src={value.image}
                  alt={value.alt}
                  width={128}
                  height={128}
                  className="h-full w-full object-cover"
                />
              </div>
              <h2 className="mt-6 text-lg font-bold font-helvetica-world text-black">
                {value.title}
              </h2>
            </div>
          ))}
        </div>

        </div>
            {/* OUR TEAM SECTION */}
            <OurTeam/>
        </div>
      </section>
      <Contactsection/>
      <Footer />
    </main>
  );
};



