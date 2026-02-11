// app/roofing/page.jsx (example)
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import SplitFeatureRow from "@/app/components/SplitFeatureRow";

const items = [
  {
    title: "FEDERAL",
    description:
      "Description",
    imageSrc: "/Gallery/bg-buildings.png",
    imageAlt: "Federal",
    ctaHref: "/products/roofing/asphalt",
    reverse: false,
  },
  {
    title: "CONCH",
    description:
      "DESCRIPTION",
    imageSrc: "/Gallery/bg-buildings.png",
    imageAlt: "Conch",
    ctaHref: "/products/roofing/granule",
    reverse: true,
  },
];

export default function Page() {
  return (
    <main>
      <Header/>
    <div className="py-10 space-y-10">
      {items.map((it) => (
        <SplitFeatureRow key={it.title} {...it} />
      ))}
    </div>

      <Footer/>
    </main>
  );
}
