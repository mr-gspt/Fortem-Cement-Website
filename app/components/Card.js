export default function Card({ children, className = "" }) {
  // Customize shadow, border, or transitions by passing additional classes via className.
  return (
    <div
      className={`rounded-2xl bg-white p-6 shadow-lg transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-xl ${className}`}
    >
      {children}
    </div>
  );
}
