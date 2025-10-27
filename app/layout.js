import { Geist, Geist_Mono } from "next/font/google";
import { Oswald, Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "Fortem Cement Corporation",
  description:
    "Leading provider of construction materials and building solutions. Quality cement, plywood, and construction services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${helveticaWorld.variable} ${geistSans.variable} ${geistMono.variable} ${oswald.variable} ${openSans.variable} antialiased min-h-screen bg-white text-gray-900 transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}
