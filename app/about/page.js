"use client";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Contactsection from "../components/Contactsection.js";
import Breadcrumb from "../components/Breadcrumb.js";
import OurTeam from "../components/OurTeam.js";


export default function AboutPage() {
  useEffect(() => {
    // Set page title
    document.title = "About Us - Fortem Cement Corporation";
    
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <main className="relative min-h-screen  bg-black/10">
      
      <Header />
      <div className="mx-auto flex w-full max-w-6xl px-6 pt-6">
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
          
            <h1 className="font-bold uppercase text-center text-yellow-600 drop-shadow-sm sm:text-5xl lg:text-5xl">
            ABOUT US
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We are a company dedicated to fortifying the cities of tomorrow, TOGETHER!
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16" data-aos="fade-up">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-semibold text-yellow-600 mb-4">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                To build a responsive, proactive, and reliable distribution network thatempower our partners to grow with confidence.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-semibold text-yellow-600 mb-4">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                To become the preferred supplier of construction materials in thePhilippines and the Asia-Pacific region.
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

            <h1 className="font-helvetica-world font-bold uppercase text-center text-yellow-600 drop-shadow-sm sm:text-5xl lg:text-5xl py-1">CORE VALUES</h1>


        {/* Item 1 */}
        {/* Keep logo cropped inside the circle */}
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col py-8">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full overflow-hidden bg-indigo-100 text-indigo-500 flex-shrink-0">
            {/* === Replace this SVG with your PNG logo === */}
            <Image
              src="/Gallery/construction.png" // put your PNG file inside /public folder
              alt="Logo 1"
              width={128}
              height={128}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2 className="text-yellow-600 text-lg title-font font-helvetica-world mb-2">
          CONSISTENTLY RELIABLE
            </h2>
            <p className="leading-relaxed text-base">
            someone or something is dependable and trustworthy, consistently performing or behaving in the expected way, and can be relied upon.
            </p>
          </div>
        </div>

         {/* Item 2 */}
         <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full overflow-hidden bg-indigo-100 text-indigo-500 flex-shrink-0">
            {/* === Replace this SVG with your PNG logo === */}
            <Image
              src="/Gallery/HUN.png" // put your PNG file inside /public folder
              alt="Logo 3"
              width={128}
              height={128}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2 className="text-yellow-600 text-lg title-font font-helvetica-world mb-2">
          HUNGRY TO WIN
            </h2>
            <p className="leading-relaxed text-base">
            having a strong, persistent, and unwavering desire to succeed and achieve victory, often used in a competitive context like sports or business.
            </p>
          </div>
        </div>

         {/* Item 3 */}
         <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full overflow-hidden bg-indigo-100 text-indigo-500 flex-shrink-0">
            {/* === Replace this SVG with your PNG logo === */}
            <Image
              src="/Gallery/OWN.png" // put your PNG file inside /public folder
              alt="Logo 3"
              width={128}
              height={128}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2 className="text-yellow-600 text-lg title-font font-helvetica-world mb-2">
          OWNERSHIP
            </h2>
            <p className="leading-relaxed text-base">
            the legal and financial control over a business entity, granting the owner(s) the authority to make decisions, manage resources, and bear the risks and rewards of the business.
            </p>
          </div>
        </div>

         {/* Item 4 */}
         <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full overflow-hidden bg-indigo-100 text-indigo-500 flex-shrink-0">
            {/* === Replace this SVG with your PNG logo === */}
            <Image
              src="/Gallery/PRO.png" // put your PNG file inside /public folder
              alt="Logo 3"
              width={128}
              height={128}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2 className="text-yellow-600 text-lg title-font font-helvetica-world mb-2">
          PROFESSIONAL AND TRANSPARENT
            </h2>
            <p className="leading-relaxed text-base">
            being open, honest, and straightforward in communication and actions, sharing information openly and avoiding secrecy, which fosters trust and accountability.
            </p>
          </div>
        </div>

         {/* Item 5 */}
         <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full overflow-hidden bg-indigo-100 text-indigo-500 flex-shrink-0">
            {/* === Replace this SVG with your PNG logo === */}
            <Image
              src="/Gallery/SHA.png" // put your PNG file inside /public folder
              alt="Logo 3"
              width={128}
              height={128}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2 className="text-yellow-600 text-lg title-font font-helvetica-world mb-2">
          SHARED SAFETY
            </h2>
            <p className="leading-relaxed text-base">
            a collaborative approach where everyone takes responsibility for fostering safety, focusing on community-level solutions and addressing systemic issues that impact safety and well-being, going beyond traditional justice system approaches.
            </p>
          </div>
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



