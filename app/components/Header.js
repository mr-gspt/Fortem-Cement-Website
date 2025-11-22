"use client";
import "boxicons/css/boxicons.min.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  // { href: "/brands", label: "Brands" },
  // { href: "/products", label: "Products" },
  { href: "/resources", label: "Resources" },
  { href: "/careers", label: "Careers" },
  { href: "/about/#contact", label: "Contact" },
];

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollFrame = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileOpen((prev) => !prev);
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
        const pastThreshold = window.scrollY > 24;

        setIsScrolled((prev) =>
          prev === pastThreshold ? prev : pastThreshold
        );

        scrollFrame.current = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      if (scrollFrame.current !== null) {
        cancelAnimationFrame(scrollFrame.current);
        scrollFrame.current = null;
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 flex w-full items-center justify-between border-b border-black-200 px-4 py-0 text-[#eaaa00] transition-all duration-300 md:px-10 lg:px-20 ${
        isScrolled
          ? "bg-[#eaaa00]/90 shadow-md backdrop-blur"
          : "bg-[#eaaa00]/90 backdrop-blur-sm"
      } translate-y-0 opacity-100`}
    >
      <Link href="/">
        <img
          className="m-1 h-15 w-15 shrink-0 cursor-pointer"
          src="/Gallery/logo.png"
          alt="fc logo"
          style={{ filter: "brightness(0) saturate(100%) invert(1)" }}
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden items-center justify-center gap-6 lg:flex lg:gap-8">
        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            className="group relative text-xs font-medium uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:text-black lg:text-base"
            href={href}
          >
            {label}
            <span className="absolute left-0 -bottom-2 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
      </nav>
{/* 
      <div className="hidden items-center gap-4 lg:flex">
        <Link
          className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#eaaa00] transition-all duration-300 hover:bg-gray-200"
          href="/about/#contact"
        >
          Contact
        </Link>
      </div> */}

      {/* Mobile Menu Toggle */}
      <button
        onClick={toggleMobileMenu}
        aria-label="Toggle navigation"
        aria-expanded={isMobileOpen}
        className="z-50 rounded-full p-2 text-3xl transition hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-[#eaaa00] lg:hidden"
      >
        <i className="bx bx-menu-alt-right text-white"></i>
      </button>

      {/* Mobile Menu */}
      <div
        id="mobileMenu"
        className={`fixed inset-x-0 top-[4.5rem] z-40 max-h-[calc(100vh-4.5rem)] overflow-y-auto rounded-b-3xl bg-white/95 px-6 pb-8 pt-6 shadow-lg transition-all duration-300 ease-in-out lg:hidden ${
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
          className="mt-10 block rounded-full bg-[#eaaa00] px-6 py-3 text-center text-sm font-semibold uppercase tracking-wide text-gray-900 transition-all duration-300 hover:bg-amber-300"
          href="/about/#contact"
          onClick={() => setIsMobileOpen(false)}
        >
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Header;
