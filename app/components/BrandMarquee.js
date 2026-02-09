"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

export default function BrandMarquee({ brands, speedPxPerSec = 60 }) {
  const viewportRef = useRef(null);
  const itemRefs = useRef([]);
  const rafRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const drag = useRef({
    active: false,
    startX: 0,
    startScrollLeft: 0,
  });

  // Duplicate once for infinite loop
  const track = useMemo(() => [...brands, ...brands], [brands]);

  /* ================= AUTO SCROLL ================= */
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    let last = performance.now();

    const step = (now) => {
      const dt = (now - last) / 1000;
      last = now;

      if (!drag.current.active) {
        viewport.scrollLeft += speedPxPerSec * dt;
      }

      const half = viewport.scrollWidth / 2;
      if (viewport.scrollLeft >= half) viewport.scrollLeft -= half;
      if (viewport.scrollLeft < 0) viewport.scrollLeft += half;

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [speedPxPerSec]);

  /* ================= CENTER HIGHLIGHT ================= */
  useEffect(() => {
    let rafId;

    const tick = () => {
      const viewport = viewportRef.current;
      if (!viewport) return;

      const rect = viewport.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const maxDist = rect.width * 0.4;

      for (const el of itemRefs.current) {
        if (!el) continue;

        const r = el.getBoundingClientRect();
        const itemCenter = r.left + r.width / 2;
        const dist = Math.abs(itemCenter - centerX);
        const p = Math.max(0, 1 - dist / maxDist);

        el.style.setProperty("--p", p.toFixed(3));
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  /* ================= DRAG ================= */
  const onPointerDown = (e) => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    drag.current.active = true;
    drag.current.startX = e.clientX;
    drag.current.startScrollLeft = viewport.scrollLeft;

    setIsDragging(true);
    viewport.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!drag.current.active) return;
    const viewport = viewportRef.current;
    if (!viewport) return;

    const dx = e.clientX - drag.current.startX;
    viewport.scrollLeft = drag.current.startScrollLeft - dx;
  };

  const endDrag = () => {
    drag.current.active = false;
    setIsDragging(false);
  };

  /* ================= RENDER ================= */
  return (
    <div className="relative w-full">
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black/15 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black/15 to-transparent" />

      <div
        ref={viewportRef}
        className={`no-scrollbar flex gap-7 overflow-x-auto py-3 ${
          isDragging ? "cursor-grabbing select-none" : "cursor-grab"
        }`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onPointerCancel={endDrag}
      >
        {track.map((b, idx) => (
          <div
            key={`${b.key}-${idx}`}
            ref={(el) => (itemRefs.current[idx] = el)}
            className="brand-card"
          >
            <div className="brand-logo">
              <Image
                src={b.src}
                alt={b.alt}
                fill
                sizes="240px"
                className="object-contain"
                draggable={false}
              />
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        /* hide scrollbar */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* BRAND CARD */
        .brand-card {
          flex: 0 0 auto;
          width: 280px;
          height: 150px;
          border-radius: 18px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          display: grid;
          place-items: center;

          /* center-based effect */
          filter: grayscale(calc(1 - var(--p, 0)));
          opacity: calc(0.25 + var(--p, 0) * 0.75);
          transform: scale(calc(0.96 + var(--p, 0) * 0.06));
          transition: transform 120ms linear, opacity 120ms linear,
            filter 120ms linear;
        }

        /* LOGO FIT */
        .brand-logo {
          position: relative;
          width: 100%;
          height: 100%;
          padding: 26px;
        }
      `}</style>
    </div>
  );
}
