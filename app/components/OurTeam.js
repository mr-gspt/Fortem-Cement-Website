

const teamHighlights = [
  "Established since 2016",
  "Presence in 16 regions",
  "Over 10 distribution centers",
  "200+ business partners",
  "2,000+ customers served",
  "200+ committed employees",
];

const teamPhotos = [
  {
    src: "https://placehold.co/600x450/png",
    alt: "Team photo 1 placeholder",
  },
  {
    src: "https://placehold.co/600x450/png",
    alt: "Team photo 2 placeholder",
  },
  {
    src: "https://placehold.co/600x450/png",
    alt: "Team photo 3 placeholder",
  },
  {
    src: "https://placehold.co/600x450/png",
    alt: "Team photo 4 placeholder",
  },
];

const Ourteam = () => {
  return (
    <section className="py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-start">
        <div className="lg:w-5/12">
          <h2 className="font-helvetica-world text-center text-4xl font-bold text-yellow-500 sm:text-5xl lg:text-5xl">
            Our Team
          </h2>
          <br/>
          <ul className="mt-8 space-y-8 text-lg text-gray-700 sm:text-xl">
            {teamHighlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-black" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid flex-1 gap-6 sm:grid-cols-2">
          {teamPhotos.map((photo, index) => (
            <figure
              key={photo.alt + index}
              className="overflow-hidden rounded-3xl border-4 border-yellow-400 bg-white shadow-lg"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-56 w-full object-cover sm:h-64"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ourteam;
