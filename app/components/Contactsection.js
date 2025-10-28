"use client";

import React, { useState } from "react";

const Contactsection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: null, text: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus({ type: null, text: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        const message = result?.error || `Request failed (${response.status})`;
        throw new Error(message);
      }

      setStatus({ type: "success", text: "Thank you! We'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        text: error.message || "There's a problem. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "w-full rounded-xl border border-gray-200 bg-gray-50 py-3 px-4 text-sm text-gray-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-300/30";

  return (
    <section id="contact" className="relative isolate overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b via-transparent to-transparent" />
      <div className="container mx-auto flex flex-col-reverse gap-12 px-6 sm:flex-col lg:flex-row lg:items-stretch">
        {/* Map + Contact Info */}
        <div className="relative flex w-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_45px_120px_rgba(15,23,42,0.2)] backdrop-blur-xl lg:w-2/3">
          <div className="relative aspect-[16/10] w-full overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              className="h-full w-full"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.9729502590944!2d120.97942899999998!3d14.6006168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca1b2c47be09%3A0x54413a69b46575bd!2sChina%20Plaza%20Condominium!5e0!3m2!1sen!2sph!4v1759383645542!5m2!1sen!2sph"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/55" />
          </div>
          <div className="grid gap-6 border-t border-gray-200 bg-gray-50 p-8 text-gray-900 sm:grid-cols-2">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-500">Address</h3>
              <p className="mt-3 text-sm text-gray-600">
                China Plaza Condominium
                <br />
                1017 Tambacan, Santa Cruz
                <br />
                Manila, 1008 Metro Manila
              </p>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-500">Connect</h3>
              <a className="mt-3 block text-sm font-medium text-amber-600" href="mailto:example@email.com">
                example@email.com
              </a>
              <p className="mt-2 text-sm text-gray-600">123-456-7890</p>
            </div>
          </div>
        </div>

        {/* Feedback Form */}
        <div className="relative w-full rounded-3xl border border-gray-200 bg-white p-8 shadow-[0_45px_120px_rgba(15,23,42,0.2)] backdrop-blur-xl md:w-1/2 lg:w-1/3">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-500">Contact Us</span>
          <h2 className="mt-4 text-2xl font-semibold tracking-wide text-gray-900">Let's Start a Conversation</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            For questions or detailed inquiries, fill in the details below and our team will reach out shortly.
          </p>

          <form onSubmit={handleSubmit} className="mt-8">
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-xs font-medium uppercase tracking-[0.25em] text-gray-500">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
                className={inputClasses}
                placeholder="Full name"
                autoComplete="name"
              />
            </div>

            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-xs font-medium uppercase tracking-[0.25em] text-gray-500">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className={inputClasses}
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>

            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-xs font-medium uppercase tracking-[0.25em] text-gray-500">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                className={`h-36 resize-none ${inputClasses}`}
                placeholder="How can we help?"
                autoComplete="off"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-black transition hover:from-amber-400 hover:to-amber-600 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {status.text && (
              <p
                className={`mt-4 text-sm ${
                  status.type === "success" ? "text-green-600" : "text-red-600"
                }`}
                role="status"
                aria-live="polite"
              >
                {status.text}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contactsection;
