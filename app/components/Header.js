"use client";
import "boxicons/css/boxicons.min.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/brands", label: "Brands" },
  { href: "/products", label: "Products" },
  { href: "/resources", label: "Resources" },
  { href: "/careers", label: "Careers" },
];

const TOP_REVEAL_THRESHOLD = 48; // Move the mouse within this many pixels from the top to show the navbar again.

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavHidden, setIsNavHidden] = useState(false);
  const lastScrollY = useRef(0);
  const scrollFrame = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileOpen((prev) => {
      const next = !prev;
      if (!prev && isNavHidden) {
        setIsNavHidden(false);
      }
      return next;
    });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollFrame.current !== null) {
        return;
      }

      scrollFrame.current = window.requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const pastThreshold = currentY > 24;
        const scrolledDown = currentY > lastScrollY.current && currentY > 120;
        const scrolledUp = currentY < lastScrollY.current - 4;

        setIsScrolled((prev) =>
          prev === pastThreshold ? prev : pastThreshold
        );

        setIsNavHidden((prev) => {
          if (scrolledDown && !prev) {
            return true;
          }
          if ((scrolledUp || currentY <= 80) && prev) {
            return false;
          }
          return prev;
        });

        lastScrollY.current = currentY;
        scrollFrame.current = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      if (scrollFrame.current !== null) {
        cancelAnimationFrame(scrollFrame.current);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (isNavHidden && event.clientY <= TOP_REVEAL_THRESHOLD) {
        setIsNavHidden(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isNavHidden]);

  return (
    <header
      className={`sticky top-0 z-50 flex w-full items-center justify-between border-b border-gray-200 px-4 py-4 text-gray-900 transition-all duration-300 md:px-10 lg:px-20 ${
        isScrolled ? "bg-white/90 shadow-md backdrop-blur" : "bg-white/70 backdrop-blur-sm"
      } ${isNavHidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}`}
    >

      <Link href="/">
        <img
          className="m-1 h-15 w-55 shrink-0 cursor-pointer"
          src="/FORTEM NO LOGO.png"
          alt="fc logo"
        />
      </Link>

      {/* Deskstop Navigation */}
      <nav className="hidden items-center gap-6 lg:flex lg:gap-8">
        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            className="group relative text-xs font-medium uppercase tracking-[0.18em] text-gray-700 transition-colors duration-300 hover:text-yellow-600 lg:text-sm"
            href={href}
          >
            {label}
            <span className="absolute left-0 -bottom-2 h-0.5 w-0 bg-yellow-500 transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
      </nav>

      <div className="hidden items-center gap-4 lg:flex">
        {/* dark mode removed here */}
        <Link
          className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-gray-900 transition-all duration-300 hover:bg-amber-400"
          href="/about/#contact"
        >
          Contact
        </Link>
      </div>

      <button
        onClick={toggleMobileMenu}
        aria-label="Toggle navigation"
        aria-expanded={isMobileOpen}
        className="z-50 rounded-full p-2 text-3xl transition hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-300 lg:hidden"
      >
        <i className="bx bx-menu-alt-right"></i>
      </button>

      {/* Mobile Menu - Hidden by default */}
      <div
        id="mobileMenu"
        className={`absolute left-0 right-0 top-full z-40 origin-top rounded-b-3xl bg-white/95 px-6 pb-8 pt-6 shadow-lg transition-all duration-300 ease-in-out lg:hidden ${
          isMobileOpen
            ? "pointer-events-auto opacity-100 translate-y-0 visible"
            : "pointer-events-none opacity-0 -translate-y-4 invisible"
        }`}
        aria-hidden={!isMobileOpen}
      >
        <nav className="flex flex-col items-center gap-6">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={`mobile-${href}`}
              className="text-lg font-medium uppercase tracking-[0.3em] text-gray-800 transition-colors duration-200 hover:text-yellow-600"
              href={href}
              onClick={() => setIsMobileOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link
          className="mt-10 block rounded-full bg-amber-500 px-6 py-3 text-center text-sm font-semibold uppercase tracking-wide text-gray-900 transition-all duration-300 hover:bg-amber-400"
          href="/#contact"
          onClick={() => setIsMobileOpen(false)}
        >
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Header;
