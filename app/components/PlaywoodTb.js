const sizes = [
    { size: "3", pcs: "337", size2: "11", pcs2: "97" },
    { size: "4", pcs: "285", size2: "12", pcs2: "85" },
    { size: "5", pcs: "219", size2: "15", pcs2: "70" },
    { size: "6", pcs: "125", size2: "16", pcs2: "66" },
    { size: "8", pcs: "", size2: "17", pcs2: "65" },
    { size: "9", pcs: "125", size2: "18", pcs2: "57" },
    { size: "10", pcs: "108", size2: "", pcs2: "" },
  ];

const PlaywoodTb = () => {
  return (
    <section className="py-15">
    <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border-4 border-yellow-500 shadow-lg">
    <header className="grid grid-cols-4 place-items-center bg-yellow-500 px-6 py-4 text-lg font-semibold text-white">
      <span>Size (mm)</span>
      <span>Pcs per Crate</span>
      <span>Size (mm)</span>
      <span>Pcs per Crate</span>
    </header>

    <ul className="divide-y divide-yellow-500 bg-white text-lg text-gray-800">
      {sizes.map(({ size, pcs, size2, pcs2 }) => (
        <li className="grid grid-cols-4 px-6 py-4 text-center" key={`${size}-${size2}`}>
          <span>{size}</span>
          <span>{pcs}</span>
          <span>{size2}</span>
          <span>{pcs2}</span>
        </li>
      ))}
    </ul>
  </div>
  </section>
  )
}

export default PlaywoodTb