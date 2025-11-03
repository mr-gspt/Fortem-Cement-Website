const bulkBagOptions = [
    { bag: "1 MT Jumbo Bags", count: "25" },
    { bag: "2 MT Mega Bags", count: "50" },
    { bag: "2 MT Sling Bags", count: "50" },
  ];

 const bulkBagPhotos = [
    {
        src: "/Cement/Jumbo Bags.png",
        alt: "Cement Jumbo Bags 1 placeholder",
      },
      {
        src: "/OurTeam/OurTeam2.png",
        alt: "Sling bags 2 placeholder",
      },
      {
        src: "/OurTeam/OurTeam3.png",
        alt: "Mega bags 3 placeholder",
      },
      {
        src: "/Cement/Cement4.png",
        alt: "40kg bags 4 placeholder",
      },
 ]
  
const CementKg = () => {
  return (
    <section className="py-20">
    <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-start">
      <div className="lg:w-5/12">
        <h2 className="text-xl font-bold text-yellow-500 sm:text-6xl">
          Cement
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          Fortem cement brands are available in 40kg bags and in bulk bags.
        </p>

        <div className="mt-8 overflow-hidden rounded-3xl border-4 border-yellow-400 shadow-lg">
          <header className="grid grid-cols-2 bg-yellow-500 px-6 py-4 text-lg font-semibold text-white">
            <span>Bulk Bags</span>
            <span className="text-right"># of 40kg/Bulk Bag</span>
          </header>
          <ul className="divide-y divide-yellow-400 bg-white text-gray-800">
            {bulkBagOptions.map(({ bag, count }) => (
              <li key={bag} className="grid grid-cols-2 px-6 py-4 text-lg">
                <span>{bag}</span>
                <span className="text-right">{count}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid flex-1 gap-3 sm:grid-cols-2"
      data-aos="fade-up">
        {bulkBagPhotos.map((photo, index) => (
          <figure
            key={photo.alt + index}
            className="overflow-hidden rounded-3xl border-4 border-yellow-400 bg-white shadow-lg"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="h-60 w-full object-cover sm:h-70"
            />
          </figure>
        ))}
      </div>
    </div>
  </section>
  )
}

export default CementKg