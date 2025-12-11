import { Geist, Geist_Mono, Oswald, Open_Sans, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const titanOne = localFont({
  src: [
    {
      path: "../public/fonts/TitanOne-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-titan-one",
  display: "swap",
});


const terminalDosis = localFont({
  src: [
    {
      path: "../public/fonts/TerminalDosis-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-terminal-dosis",
  display: "swap",
});

const poetsenOne = localFont({
  src: [
    {
      path: "../public/fonts/PoetsenOne-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-poetsen-one",
  display: "swap",
});

const helveticaWorld = localFont({
  src: [
    {
      path: "../public/fonts/HelveticaWorld-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-helvetica-world",
  display: "swap",
});
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins", display: "swap" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans" });
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FC Fortem",
  description:
    "Leading provider of construction materials and building solutions. Quality cement, plywood, and construction services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} ${titanOne.variable} ${terminalDosis.variable} ${poetsenOne.variable} ${helveticaWorld.variable} ${geistSans.variable} ${geistMono.variable} ${oswald.variable} ${openSans.variable} antialiased min-h-screen bg-white text-gray-900 transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}
