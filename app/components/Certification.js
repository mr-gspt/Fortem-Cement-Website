import React from 'react'

const Certification = () => {
  return (
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
  )
}

export default Certification;
