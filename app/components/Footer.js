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
  { label: "Example 1", href: "#resources" },
  { label: "Example 2", href: "#resources" },
  { label: "Example 3", href: "#resources" },
  { label: "Example 4", href: "#resources" },
];

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", icon: "bxl-facebook" },
  { label: "Instagram", href: "https://instagram.com", icon: "bxl-instagram" },
  { label: "Twitter", href: "https://tiktok.com", icon: "bxl-tiktok" },
];

const contactDetails = [
  { label: "Head Office", value: "China Plaza Condominium 1017 Tambacan, Santa Cruz Manila, 1008 Metro Manila" },
  { label: "Phone", value: "+63 912 345 6789", href: "tel:+639123456789" },
  { label: "Email", value: "hello@fortem.com", href: "mailto:hello@fortem.com" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="border-t border-gray-200 bg-gray-50 text-sm text-gray-600">
      <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-6 md:px-8 md:py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[minmax(0,1.6fr)_repeat(3,minmax(0,1fr))]">
          <div className="space-y-5">
            {/* Simple brand block so you can swap the Fortem PNG anytime */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Image
                src="/Gallery/logo.png"
                alt="Fortem logo"
                width={48}
                height={48}
                priority
              />
              <div>
                <p className="text-xs font-semibold uppercase text-yellow-600">
                  Fortem Cement Corporation
                </p>
              </div>
            </div>
            <ul className="flex flex-wrap items-center gap-3">
              {socialLinks.map(({ label, href, icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition-colors hover:border-yellow-500 hover:text-yellow-500"
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
            <h3 className="text-xs font-semibold uppercase tracking-[0.10em] text-yellow-600">Navigate</h3>
            <ul className="mt-4 space-y-2.5">
              {navigationLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-gray-600 transition-colors hover:text-yellow-500"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.10em] text-yellow-600">Resources</h3>
            <ul className="mt-4 space-y-2.5">
              {resourceLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-gray-600 transition-colors hover:text-yellow-500"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.10em] text-yellow-600">Contact</h3>
            <ul className="mt-4 space-y-4 text-gray-600">
              {contactDetails.map(({ label, value, href }) => (
                <li key={label}>
                  <span className="block text-[0.7rem] uppercase tracking-[0.3em] text-gray-500">
                    {label}
                  </span>
                  {href ? (
                    <a
                      href={href}
                      className="mt-1 block text-base text-gray-900 transition-colors hover:text-yellow-500"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="mt-1 block text-base text-gray-900">{value}</span>
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
            <span className="text-yellow-600">&copy; {currentYear}</span> Fortem Cement Corporation. All rights reserved.
          </p>
        </div>
      </div>
      {/* dark mode removed here */}
    </footer>
  );
};

export default Footer;
