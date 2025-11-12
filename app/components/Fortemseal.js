import React from "react";

const Fortemseal = () => {
  return (
    <section
      data-aos="fade-down"
      className="bg-[#727171] py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          {/* Text section */}
          <div className="text-white">
            <p className="indent-5 text-lg leading-relaxed md:text-2xl italic">
              The <span className="font-semibold italic text-[#eaaa00]">Fortem Seal of Quality</span> stands as a symbol of the dedication and trust that define everything we do. Each product and partnership bearing this seal reflects our pursuit of lasting value and our pledge to build people, build bridges, and build futures together.
            </p>
          </div>

          {/* Image section */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/Gallery/Seal 1.png"
              alt="Fortem Seal of Quality"
              className="w-80 md:w-110 drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fortemseal;
