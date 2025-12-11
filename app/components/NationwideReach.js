// app/components/NationwideReach.js
const locations = [
  // Adjust x/y (0-100) to move the pins over the map image quickly.
  { name: 'Tuguegarao', x: 52, y: 9.6, tone: 'gray', align: 'right' },
  { name: 'Currimao, Ilocos Norte', x: 40, y: 11 , tone: 'gray', align: 'left' },
  { name: 'San Simon Pampanga', x: 43, y: 29, tone: 'gray', align: 'right' },
  { name: 'Cebu', x: 68, y: 57, tone: 'gray', align: 'right' },
  { name: 'Iloilo', x: 55, y: 55, tone: 'gray', align: 'left' },
  { name: 'Bacolod', x: 60, y: 60, tone: 'gray', align: 'left' },
  { name: 'Davao', x: 83, y: 78, tone: 'gray', align: 'right' },
  { name: 'General Santos City', x: 79, y: 84, tone: 'gray', align: 'left' },
];

const toneStyles = {
  gray: {
    pin: 'bg-[#727171]',
    labelLine: 'border-gray-500',
  },
};

const warehouseSites = [
  'Tuguegarao (Sta. Ana Cagayan)',
  'Currimao, Ilocos Norte',
  'San Simon, Pampanga',
  'Cebu',
  'Iloilo',
  'Bacolod',
  'Davao',
  'Zamboanga',
  'General Santos City',
];

export default function NationwideReach() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#3a3a3a] via-[#2a2a2a] to-[#1f1f1f] py-16">

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-8 sm:px-6 lg:px-10 md:grid-cols-[56%_44%] md:items-center">
        <div className="relative flex items-center justify-center">

          <div className="relative w-full overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md p-6 shadow-[0_18px_50px_rgba(0,0,0,0.6)] border border-white/10">


            <div className="relative">
              <img
                src="/Gallery/MAP 2.png"
                alt="Nationwide warehouse map"
                className="pointer-events-none w-full"
              />

              <div className="absolute inset-0">
                {locations.map((loc) => {
                  const tone = toneStyles[loc.tone] || toneStyles.gray;
                  return (
                    <button
                      key={loc.name}
                      type="button"
                      aria-label={`Location: ${loc.name}`}
                      className="group absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                      style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                    >
                      <span
                        className="absolute inset-[-8px] -z-10 rounded-full bg-white/60 opacity-70 blur-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
                        aria-hidden
                      />
                      <span
                        className="absolute inset-[-4px] -z-10 rounded-full border border-white/70 bg-white/60 opacity-80"
                        aria-hidden
                      />

                      <span
                        className={`relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br text-white ring-2 ring-white/80 backdrop-blur shadow-lg transition-transform duration-200 group-hover:-translate-y-1 group-hover:scale-105 group-focus-visible:-translate-y-1 group-focus-visible:scale-105 ${tone.pin}`}
                      >
                        <span className="absolute inset-0 rounded-full bg-white/10" aria-hidden />
                        <span className="absolute inset-[-2px] rounded-full border border-[#eaaa00]" aria-hidden />
                        <span className="relative text-[15px] font-bold text-[#eaaa00] tracking-wide">FC</span>
                        <span className="absolute -bottom-3.5 h-3 w-[6px] rounded-full bg-white/90 shadow-[0_8px_12px_rgba(0,0,0,0.08)]" aria-hidden />
                      </span>

                      <span
                        className={`pointer-events-none absolute top-1/2 flex -translate-y-1/2 items-center gap-3 whitespace-nowrap text-[13px] font-semibold text-slate-900 ${
                          loc.align === 'left' ? 'right-[4rem] justify-end' : 'left-[4rem] justify-start'
                        }`}
                      >
                        {loc.align === 'left' && (
                          <span className={`h-px w-12 border-b ${tone.labelLine} border-dashed`} aria-hidden />
                        )}
                        <span className="rounded-full bg-white/95 px-3 py-1.5 shadow-lg ring-1 ring-black/5 backdrop-blur">
                          {loc.name}
                        </span>
                        {loc.align === 'right' && (
                          <span className={`h-px w-12 border-b ${tone.labelLine} border-dashed`} aria-hidden />
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="relative space-y-10 ">
          <div>
            <p className="text-3xl font-bold uppercase tracking-[0.20em] text-center text-[#eaaa00]">Nationwide Reach</p>
            <p className="mt-2 text-xl font-bold uppercase text-center text-[#eaaa00]">Proven Distribution Efficiency</p>
            {/* <p className="mt-3 text-base text-slate-600">
              Purpose-built hubs positioned for fast pull-outs, steady stock turns, and reliable service for contractors and dealers.
            </p> */}
          </div>

          {/* <div className="flex flex-wrap gap-3">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#f2d48a] bg-[#fff7df] px-3 py-1 text-sm font-semibold text-[#c28700] shadow-sm"
              >
                {item}
              </span>
            ))}
          </div> */}
        <div className="flex items-center justify-center">
          <div className="text-center border border-[#f2d48a] bg-[#fff7e5] px-4 py-3 text-sm font-semibold text-[#c28700] shadow-inner w-[15rem]">
            {locations.length} mapped warehouse.
          </div>
        </div>
          <div>
            <p className="text-lg font-semibold text-white">Warehouse sites</p>
            <ul className="mt-3 gap-2 text-base text-white sm:grid-cols-2">
              {warehouseSites.map((city) => (
                <li key={city} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#eaaa00]" aria-hidden />
                  {city}
                </li>
              ))}
            </ul>
          </div>

          {/* <p className="text-sm text-slate-600">
            More locations can be added as the network grows; update pin positions with the x/y values above.
          </p> */}
        </div>
      </div>
    </section>
  );
}
