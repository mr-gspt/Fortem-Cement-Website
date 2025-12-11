import React from "react";

const Fortemseal = () => {
  return (
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
  );
};

export default Fortemseal;
