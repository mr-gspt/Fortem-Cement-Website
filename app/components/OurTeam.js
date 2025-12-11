// app/components/OurTeam.jsx
"use client";
import { useEffect, useRef, useState } from "react";

/* ---------- in-view helper (pure JS) ---------- */
function useInView(ref, options = { threshold: 0.3 }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), options);
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, options.threshold]);
  return visible;
}

/* ---------- count-up with optional start and noFormat ---------- */
const numberFormatter = new Intl.NumberFormat("en-PH");

function CountUp({ start = 0, end, duration = 1500, noFormat = false }) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let current = start;
    const stepTime = 15; // ms
    const steps = Math.max(1, Math.round(duration / stepTime));
    const increment = (end - start) / steps;

    const id = setInterval(() => {
      current += increment;
      if ((increment >= 0 && current >= end) || (increment < 0 && current <= end)) {
        setCount(end);
        clearInterval(id);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(id);
  }, [start, end, duration]);

  return <>{noFormat ? count : numberFormatter.format(count)}</>;
}

/* ---------- data ---------- */
const teamHighlights = [
  { labelBefore: "Established since ", value: 2016, isYear: true, startFrom: 2000, duration: 1500 },
  { labelBefore: "Presence in ", value: 16, labelAfter: " regions", duration: 1200 },
  { labelBefore: "Over ", value: 10, labelAfter: " distribution centers", duration: 1200 },
  { value: 200, labelAfter: " business partners", suffix: "+", duration: 1200 },
  { value: 2000, labelAfter: " customers served", suffix: "+", duration: 800},
  { value: 200, labelAfter: " committed employees", suffix: "+", duration: 1200},
];

const teamPhotos = [
  { src: "/OurTeam/OurTeam1.png", alt: "Team photo 1 placeholder" },
  { src: "/OurTeam/OurTeam2.png", alt: "Team photo 2 placeholder" },
  { src: "/OurTeam/OurTeam3.png", alt: "Team photo 3 placeholder" },
  { src: "/OurTeam/OurTeam4.png", alt: "Team photo 4 placeholder" },
];

/* ---------- component ---------- */
export default function Ourteam() {
  const listRef = useRef(null);
  const visible = useInView(listRef);

  return (
    <section className="py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-start">
        <div className="lg:w-5/12">
          <h2 className="font-helvetica-world text-center text-4xl font-bold text-yellow-500 sm:text-5xl lg:text-5xl">
            Our Team
          </h2>
          <br />
          <ul ref={listRef} className="mt-8 space-y-8 text-lg text-[#727171] font-lightbold sm:text-2xl">
            {teamHighlights.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#727171]" aria-hidden="true" />
                <span>
                  {item.labelBefore || ""}
                  {visible ? (
                    item.isYear ? (
                      <CountUp
                        start={item.startFrom ?? 0}
                        end={item.value}
                        duration={item.duration ?? 800}
                        noFormat
                      />
                    ) : (
                      <CountUp end={item.value} duration={item.duration ?? 1500} />
                    )
                  ) : (
                    item.isYear ? (item.startFrom ?? 0) : 0
                  )}
                  {item.suffix || ""}
                  {item.labelAfter || ""}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid flex-1 gap-3 sm:grid-cols-2" data-aos="fade-up">
          {teamPhotos.map((photo, index) => (
            <figure
              key={index}
              className="overflow-hidden rounded border-4 border-yellow-400 bg-white shadow-lg"
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
  );
}
