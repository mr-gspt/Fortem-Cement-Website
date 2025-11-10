"use client";
import "boxicons/css/boxicons.min.css";
import Image from "next/image";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Brands", href: "/brands" },
  { label: "Products", href: "/products" },
  { label: "Careers", href: "/careers" },
];

// Unique labels keep React list keys stable and silence console warnings.
const resourceLinks = [
  { label: "Video", href: "#resources" },
  { label: "Vlogs", href: "#resources" },
  { label: "News", href: "#resources" },
  { label: "Media", href: "#resources" },
];

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", icon: "bxl-facebook" },
  { label: "Instagram", href: "https://instagram.com", icon: "bxl-instagram" },
  { label: "Twitter", href: "https://tiktok.com", icon: "bxl-tiktok" },
];

const contactDetails = [
  { label: "Head Office", value: "China Plaza Condominium 1017 Tambacan, Santa Cruz Manila, 1008 Metro Manila" },
  {
    label: "Phone",
    values: [
      { text: "+63 956 594 2667", href: "tel:+639565942667" },
      { text: "+63 968 669 6948", href: "tel:+639686696948" },
    ],
  },
  { label: "Email", value: "info@fortem.ph", href: "mailto:info@fortem.ph" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="border-t border-gray-200 bg-black text-sm text-white">
      <div className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-6 md:px-8 md:py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[minmax(0,1.6fr)_repeat(3,minmax(0,1fr))]">
          <div className="space-y-5">
            {/* Simple brand block so you can swap the Fortem PNG anytime */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Image
                src="/FORTEM NO LOGO.png"
                alt="Fortem logo"
                width={230}
                height={100}
                priority
                href="/"
              />
              <div>
              </div>
            </div>
            <ul className="flex flex-wrap items-center gap-3">
              {socialLinks.map(({ label, href, icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-white transition-colors hover:border-[#eaaa00] hover:text-[#eaaa00]"
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    <i className={`bx ${icon} text-lg`} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.10em] text-[#eaaa00]">Navigate</h3>
            <ul className="mt-4 space-y-2.5">
              {navigationLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-white transition-colors hover:text-[#eaaa00]"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.10em] text-[#eaaa00]">Resources</h3>
            <ul className="mt-4 space-y-2.5">
              {resourceLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-white transition-colors hover:text-[#eaaa00]"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.10em] text-[#eaaa00]">Contact</h3>
            <ul className="mt-4 space-y-4 text-gray-600">
              {contactDetails.map(({ label, value, values, href }, index) => (
                <li key={`${label}-${index}`}>
                  <span className="block text-[0.7rem] uppercase tracking-[0.3em] text-white">
                    {label}
                  </span>
                  {values ? (
                    <div className="mt-1 space-y-1">
                      {values.map(({ text, href: itemHref }) => (
                        <a
                          key={`${label}-${text}`}
                          href={itemHref}
                          className="block text-base text-white transition-colors hover:text-yellow-500"
                        >
                          {text}
                        </a>
                      ))}
                    </div>
                  ) : href ? (
                    <a
                      href={href}
                      className="mt-1 block text-base text-white transition-colors hover:text-yellow-500"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="mt-1 block text-base text-white">{value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 bg-gray-100">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-5 text-gray-500 sm:px-6 md:flex-row md:items-center md:justify-between md:px-8">
          <p className="text-center text-sm text-gray-500 md:text-left">
            <span className="text-[#eaaa00]">&copy; {currentYear}</span> Fortem Cement Corporation. All rights reserved.
          </p>
        </div>
      </div>
      {/* dark mode removed here */}
    </footer>
  );
};

export default Footer;
