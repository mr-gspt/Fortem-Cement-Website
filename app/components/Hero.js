"use client";
import "boxicons/css/boxicons.min.css";

const Hero = () => {
  return (
    <main id="home" className="flex flex-col items-start justify-center min-h-[calc(90vh-6rem)] px-4 lg:px-20">
      {/* Overlay for better text visibility */}
      {/* Introducing Button */}
  
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="mb-6"
      >
        <div className="flex items-center gap-4 text-1xl font-semibold uppercase tracking-[0.35em] text-white">
          <span className="flex items-center gap-2 text-lg">
            <i className="bx bx-buildings text-yellow-500 text-xl"></i>
            Introducing
          </span>
        </div>
      </div>

      {/* Main Heading */}
      <h1 data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className='font-body text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wider text-yellow-500 mb-6'>
        FORTEM CEMENT
        <br/>
        CORPORATION
      </h1>

       {/* Description */}
       <p  data-aos="fade-right"  data-aos-offset="100"  data-aos-easing="ease-in-sine"
       className='max-w-3xl text-base tracking-wider text-white md:text-xl'>
         We are a company dedicated to 
         <br/>
         fortifying the cities of tomorrow
       </p>
    </main>
  )
}

export default Hero
