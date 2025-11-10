"use client";
import "boxicons/css/boxicons.min.css";
import Image from "next/image";

const Hero = () => {
  return (
    <main id="home" className="flex flex-col items-start justify-center min-h-[calc(90vh-6rem)] px-0">
      {/* Overlay for better text visibility */}
      {/* Introducing Button */}
  
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="mb-6"
      >
      </div>


      <div className="relative w-full max-w-[66rem]">

      {/* Main Heading */}
      <div className="relative w-full max-w-[56rem] bg-[#545454] clip-diagonal-right py-0 px-5 md:px-4">
        <div className="px-2 lg:px-10">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="flex flex-col"
          >
            <Image
              src="/FORTEM NO LOGO.png"
              alt="Fortem Cement Corporation"
              width={1500}
              height={1200}
              priority
              className="h-50 w-full max-w-[45rem] object-left"
              sizes="(max-width: 1024px) 90vw, 520px"
            />
            <p
              data-aos="fade-right"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
              className="w-full max-w-[40rem] text-base tracking-wider text-white md:text-xl filter drop-shadow-2xl"
            >
              A company dedicated to fortifying the cities of tomorrow.
            </p>
          </div>
        </div>
       <div 
        className="absolute left-0 right-0 top-full -translate-y-15 h-15 bg-black/50 clip-diagonal-right pointer-events-none -z-10">
        </div>
      </div>
      <div 
       aria-hidden="true"
        className="absolute left-0 right-0 top-full -translate-y-15 w-[60rem] max-w-full h-24 bg-black/50 clip-diagonal-right2 pointer-events-none -z-10">
        </div>
       </div>

    </main>
  )
}

export default Hero
