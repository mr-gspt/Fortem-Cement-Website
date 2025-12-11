"use client";
import "boxicons/css/boxicons.min.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const PRODUCT_MENU = [
  {
    title: "Cement",
    items: [
      { label: "Conch Cement", href: "/products/Cement/conchCement" },
      { label: "Federal Cement", href: "/products/Cement/federalCement" },
      { label: "Hero Cement", href: "/products/Cement/heroCement" },
      { label: "Red Lion Cement", href: "/products/Cement/redLionCement" },
      { label: "Stallion Cement", href: "/products/Cement/stallionCement" },
      { label: "Titan Cement", href: "/products/Cement/titanCement" },
      { label: "Tough Cement", href: "/products/Cement/toughCement" },
      { label: "Xuan Thanh Cement", href: "/products/Cement/xuanThanhCement" },
    ],
  },
  {
    title: "Playwood",
    items: [
      { label: "FederalPly", href: "/products/Plywood/FederalPly" },
      { label: "StallionPly", href: "/products/Plywood/StallionPly" },
      { label: "TitanPly", href: "/products/Plywood/TitanPly" },
      { label: "Kalsi", href: "/products/Plywood/Kalsi" },
    ],
  },
  {
    title: "Admix",
    items: [{ label: "Vegamaterials", href: "/products/Admix/Vegamaterials" }],
  },
];


const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/resources", label: "Resources" },
  { href: "/careers", label: "Careers" },
  { href: "/about/#contact", label: "Contact" },
];

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeProductCategory, setActiveProductCategory] = useState(
    PRODUCT_MENU[0]?.title
  );
  const scrollFrame = useRef(null);
  const dropdownTimeout = useRef(null);

  const clearDropdownTimeout = () => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
      dropdownTimeout.current = null;
    }
  };

  const openDropdownNow = (label) => {
    clearDropdownTimeout();
    setOpenDropdown(label);
  };

  const closeDropdownSoon = () => {
    clearDropdownTimeout();
    dropdownTimeout.current = setTimeout(() => {
      setOpenDropdown(null);
      setActiveProductCategory(PRODUCT_MENU[0]?.title);
    }, 150);
  };

  const toggleMobileMenu = () => {
    setIsMobileOpen((prev) => {
      const next = !prev;
      if (!next) {
        setOpenDropdown(null);
        setActiveProductCategory(PRODUCT_MENU[0]?.title);
      }
      return next;
    });
  };

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
    setOpenDropdown(null);
    setActiveProductCategory(PRODUCT_MENU[0]?.title);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileOpen(false);
        setOpenDropdown(null);
        setActiveProductCategory(PRODUCT_MENU[0]?.title);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollFrame.current !== null) return;

      scrollFrame.current = window.requestAnimationFrame(() => {
        const pastThreshold = window.scrollY > 24;
        setIsScrolled((prev) => (prev === pastThreshold ? prev : pastThreshold));
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

  useEffect(() => () => clearDropdownTimeout(), []);

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
        {NAV_LINKS.map(({ href, label, children }) => {
          const hasChildren = Array.isArray(children) && children.length > 0;
          const isProducts = label === "Products";
          const isOpen = openDropdown === label;

          if (isProducts) {
            const activeCategory =
              PRODUCT_MENU.find((cat) => cat.title === activeProductCategory) ||
              PRODUCT_MENU[0];

            return (
              <div
                key={href}
                className="relative"
                onMouseEnter={() => openDropdownNow(label)}
                onMouseLeave={closeDropdownSoon}
                onFocus={() => openDropdownNow(label)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    closeDropdownSoon();
                  }
                }}
              >
                <Link
                  className="group relative text-xs font-semibold tracking-[0.18em] text-white transition-colors duration-300 hover:text-black lg:text-lg"
                  href={href}
                >
                  {label}
                  <i className="bx bx-chevron-down text-sm text-white transition-colors duration-300 group-hover:text-black" />
                  <span className="absolute left-0 -bottom-2 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full" />
                </Link>

                <div
                  className={`absolute left-1/2 top-full mt-4 w-[1100px] max-w-[95vw] -translate-x-1/2 bg-[#eaaa00] shadow-md backdrop-blur text-white ring-1 ring-black/10 transition-all duration-200 ${
                    isOpen
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-2 opacity-0"
                  }`}
                >
                  <div className="grid grid-cols-[240px_1fr] gap-6 p-6">
                    <div className="flex flex-col gap-2 pr-4">
                      {PRODUCT_MENU.map((cat) => {
                        const active = cat.title === activeProductCategory;
                        return (
                          <button
                            key={cat.title}
                            className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-lg font-semibold transition-colors ${
                              active
                                ? "text-black bg-black/5"
                                : "text-white hover:text-black"
                            }`}
                            onMouseEnter={() => setActiveProductCategory(cat.title)}
                            onFocus={() => setActiveProductCategory(cat.title)}
                          >
                            <span>{cat.title}</span>
                            <i className="bx bx-chevron-right text-xl" />
                          </button>
                        );
                      })}
                    </div>

                    <div className="border-l border-white/10 pl-6">
                      <div className="grid grid-cols-2 gap-x-10 gap-y-3 text-lg">
                        {activeCategory?.items?.map(({ label: itemLabel, href: itemHref }) => (
                          <Link
                            key={itemHref}
                            href={itemHref}
                            className="transition-colors hover:text-black"
                          >
                            {itemLabel}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          if (!hasChildren) {
            return (
              <Link
                key={href}
                className="group relative text-xs font-semibold tracking-[0.18em] text-white transition-colors duration-300 hover:text-black lg:text-lg"
                href={href}
              >
                {label}
                <span className="absolute left-0 -bottom-2 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full" />
              </Link>
            );
          }

          return (
            <div
              key={href}
              className="relative"
              onMouseEnter={() => openDropdownNow(label)}
              onMouseLeave={closeDropdownSoon}
              onFocus={() => openDropdownNow(label)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  closeDropdownSoon();
                }
              }}
            >
              <Link
                className="group relative flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:text-black lg:text-base"
                href={href}
              >
                {label}
                <i className="bx bx-chevron-down text-base text-white transition-colors duration-300 group-hover:text-black" />
                <span className="absolute left-0 -bottom-2 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full" />
              </Link>

              <div
                className={`absolute left-0 top-full mt-3 w-56 rounded-2xl bg-white/95 text-sm shadow-lg ring-1 ring-black/5 transition-all duration-200 ${
                  isOpen
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-2 opacity-0"
                }`}
              >
                <div className="flex flex-col p-2">
                  {children?.map(({ href: childHref, label: childLabel }) => (
                    <Link
                      key={childHref}
                      className="rounded-xl px-3 py-2 font-medium text-gray-800 transition-colors duration-200 hover:bg-yellow-50 hover:text-[#eaaa00]"
                      href={childHref}
                    >
                      {childLabel}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </nav>

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
        className={`fixed inset-x-0 top-[4.2rem] z-40 max-h-[calc(100vh-4.5rem)] overflow-y-auto rounded-b-3xl bg-white/95 px-6 pb-8 pt-6 shadow-lg transition-all duration-300 ease-in-out lg:hidden ${
          isMobileOpen
            ? "pointer-events-auto opacity-100 translate-y-0 visible"
            : "pointer-events-none opacity-0 -translate-y-4 invisible"
        }`}
        aria-hidden={!isMobileOpen}
      >
        <nav className="flex flex-col items-stretch gap-6 text-center">
          {NAV_LINKS.map(({ href, label, children }) => {
            const hasChildren = Array.isArray(children) && children.length > 0;
            const isOpen = openDropdown === label;

            if (label === "Products") {
              return (
                <div key={`mobile-${href}`} className="w-full">
                  <button
                    className="flex w-full items-center justify-center gap-2 text-lg font-medium uppercase tracking-[0.25em] text-gray-800 transition-colors duration-200 hover:text-yellow-600"
                    onClick={() =>
                      setOpenDropdown((prev) => (prev === label ? null : label))
                    }
                    aria-expanded={isOpen}
                  >
                    <span>{label}</span>
                    <i
                      className={`bx ${
                        isOpen ? "bx-chevron-up" : "bx-chevron-down"
                      } text-2xl text-[#eaaa00]`}
                    />
                  </button>
                  <div
                    className={`mt-2 space-y-4 overflow-hidden rounded-2xl bg-white/90 transition-all duration-200 ${
                      isOpen
                        ? "max-h-[600px] px-4 py-3 opacity-100"
                        : "max-h-0 px-4 py-0 opacity-0"
                    }`}
                  >
                    {PRODUCT_MENU.map((cat) => (
                      <div key={cat.title} className="space-y-2">
                        <p className="text-base font-semibold text-gray-900">
                          {cat.title}
                        </p>
                        <div className="space-y-1">
                          {cat.items.map(({ label: itemLabel, href: itemHref }) => (
                            <Link
                              key={`${cat.title}-${itemHref}`}
                              href={itemHref}
                              className="block text-base text-gray-700 transition-colors hover:text-yellow-700"
                              onClick={closeMobileMenu}
                            >
                              {itemLabel}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            if (!hasChildren) {
              return (
                <Link
                  key={`mobile-${href}`}
                  className="w-full text-center text-lg font-medium uppercase tracking-[0.3em] text-gray-800 transition-colors duration-200 hover:text-yellow-600"
                  href={href}
                  onClick={closeMobileMenu}
                >
                  {label}
                </Link>
              );
            }

            return (
              <div key={`mobile-${href}`} className="w-full">
                <button
                  className="flex w-full items-center justify-center gap-2 text-lg font-medium uppercase tracking-[0.25em] text-gray-800 transition-colors duration-200 hover:text-yellow-600"
                  onClick={() =>
                    setOpenDropdown((prev) => (prev === label ? null : label))
                  }
                  aria-expanded={isOpen}
                >
                  <span>{label}</span>
                  <i
                    className={`bx ${
                      isOpen ? "bx-chevron-up" : "bx-chevron-down"
                    } text-2xl text-[#eaaa00]`}
                  />
                </button>
                <div
                  className={`mt-2 space-y-2 overflow-hidden rounded-2xl bg-white/90 transition-all duration-200 ${
                    isOpen
                      ? "max-h-96 px-3 py-2 opacity-100"
                      : "max-h-0 px-3 py-0 opacity-0"
                  }`}
                >
                  {children?.map(({ href: childHref, label: childLabel }) => (
                    <Link
                      key={`mobile-${childHref}`}
                      className="block rounded-xl px-3 py-2 text-base font-medium uppercase tracking-[0.2em] text-gray-700 transition-colors duration-200 hover:bg-yellow-50 hover:text-yellow-700"
                      href={childHref}
                      onClick={closeMobileMenu}
                    >
                      {childLabel}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </nav>

        <Link
          className="mt-10 block rounded-full bg-[#eaaa00] px-6 py-3 text-center text-sm font-semibold uppercase tracking-wide text-gray-900 transition-all duration-300 hover:bg-amber-300"
          href="/about/#contact"
          onClick={closeMobileMenu}
        >
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Header;
