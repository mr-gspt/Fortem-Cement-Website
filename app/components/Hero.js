"use client";
import "boxicons/css/boxicons.min.css";
import Image from "next/image";

const Hero = () => {
  return (
    <main id="home" className="relative isolate flex min-h-[calc(95vh)] w-full flex-col items-start justify-center overflow-hidden">
      {/* Overlay for better text visibility /}
      {/ Introducing Button */}
      <img className="absolute inset-0 -z-10 h-screen w-full object-cover" 
            src="/Gallery/bg-buildings.png" 
            alt="background.img" />
      
  
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="mb-6"
      >
      </div>


      <div className="relative w-full max-w-[66rem]">

      {/* Main Heading */}
      <div className="relative w-full max-w-[56rem] bg-[#727171] clip-diagonal-right py-0 px-0 md:px-4">
        <div className="pl-0 pr-6 sm:pr-10">
           <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="flex flex-col gap-4 pl-0 pr-6 sm:pr-10"
          >
            <Image
              src="/FORTEM NO LOGO.png"
              alt="Fortem Cement Corporation"
              width={850}
              height={700}
              priority
              className="w-full max-w-full h-auto object-contain sm:max-w-[45rem]"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 520px"
            />
          <p
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            className="w-full text-center sm:text-left text-sm sm:text-base lg:text-xl leading-relaxed tracking-wide text-white drop-shadow-2xl px-4 sm:px-0 sm:ml-7"
          >
            A company dedicated to fortifying the cities of tomorrow.
          </p>
        </div>
        </div>
       <div 
        className="absolute left-0 right-0 top-full -translate-y-15 h-15 bg-black/70 clip-diagonal-right pointer-events-none -z-10">
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

export default Hero;