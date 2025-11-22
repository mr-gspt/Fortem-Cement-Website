

export default function NationwideReach() {
    return (
<section className="bg-[#727171] mt-10">
  <div className="mx-auto max-w-6xl grid gap-8 px-4 py-12 sm:px-6 lg:px-12 md:grid-cols-[55%_45%] md:items-center">
    <div className="flex justify-center">
      <img
        src="/Gallery/MAPGIF2.gif"
        className="w-full max-w-md object-contain"
        alt="Nationwide warehouse map"
      />
    </div>

    <div className="text-center md:text-center md:pl-12">
      <p className="text-[#eaaa00] font-extrabold tracking-[0.10em] uppercase text-3xl">
        Nationwide Reach 
      </p>
      <h2 className="mt-2 text-xl font-semibold text-[#eaaa00]">
        Proven Distribution Efficiency
      </h2>

      <p className="mt-7 text-xl text-white font-medium">
        Strategically located warehouses:
      </p>
      <ul className="mt-4 space-y-2 text-lg text-white">
        {[
          'Tuguegarao (Sta. Ana Cagayan)',
          'Currimao, Ilocos Norte',
          'San Simon, Pampanga',
          'Cebu',
          'Iloilo',
          'Bacolod',
          'Davao',
          'Zamboanga',
          'General Santos City',
        ].map((city) => (
          <li key={city}>{city}</li>
        ))}
      </ul>

      <p className="mt-6 text-lg text-white text-center">
        With more sites in the pipeline to support our growing customer base.
      </p>
    </div>
  </div>
</section>

    );
  }
  