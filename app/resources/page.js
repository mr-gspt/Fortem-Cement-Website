"use client";

import Image from "next/image";
import { useMemo, useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";

const RESOURCE_TYPES = ["Videos", "Vlogs", "News", "Media"];

const ResourcesSection = () => {
  const [resources, setResources] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [query, setQuery] = useState("");

  // Fetch resources from backend
  useEffect(() => {
    async function loadResources() {
      try {
        const res = await fetch("/api/resources");
        const data = await res.json();
        setResources(data);
      } catch (err) {
        console.error("Error loading resources:", err);
      }
    }
    loadResources();
  }, []);

  // Filtering logic
  const filteredResources = useMemo(() => {
    if (!Array.isArray(resources)) return []; // prevent crash
  
    const normalizedQuery = query.trim().toLowerCase();
    return resources.filter((r) => {
      const matchesType =
        selectedTypes.length === 0 || selectedTypes.includes(r.type);
      const matchesQuery =
        normalizedQuery.length === 0 ||
        (r.title || "").toLowerCase().includes(normalizedQuery) ||
        (r.description || "").toLowerCase().includes(normalizedQuery);
      return matchesType && matchesQuery;
    });
  }, [resources, selectedTypes, query]);
  

  // Checkbox handler
  const handleTypeToggle = (type) => {
    setSelectedTypes((current) =>
      current.includes(type)
        ? current.filter((entry) => entry !== type)
        : [...current, type]
    );
  };

  return (
    <main>
      <Header />
      <div className="mx-auto flex w-full max-w-[90rem] px-4 pt-6 sm:px-6 lg:px-10">
        <Breadcrumb items={[{ href: "/resources", label: "Resources" }]} />
      </div>

      <section className="py-16">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-10">
          {/* Page Header */}
          <div className="text-center">
            <h1 className="font-display text-3xl font-semibold uppercase tracking-tight text-yellow-600 md:text-4xl">
              Resources
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-500">
              Find guides, updates, and media that help you plan and deliver
              every Fortem project with confidence.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-12 lg:flex-row">
            {/* Sidebar */}
            <aside className="w-full max-h-80 rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm lg:max-w-xs">
              <h2 className="font-semibold uppercase tracking-wide text-gray-700">
                Resource Type
              </h2>
              <div className="mt-6 space-y-4">
                {RESOURCE_TYPES.map((type) => (
                  <label
                    key={type}
                    className="flex cursor-pointer items-center gap-3 text-sm text-gray-600"
                  >
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-yellow-600 focus:ring-yellow-500"
                      checked={selectedTypes.includes(type)}
                      onChange={() => handleTypeToggle(type)}
                    />
                    <span>{type}</span>
                  </label>
                ))}
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 space-y-8">
              {/* Search Bar */}
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="w-full">
                  <label htmlFor="resources-search" className="sr-only">
                    Search resources
                  </label>
                  <div className="relative">
                    <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z"
                        />
                      </svg>
                    </span>
                    <input
                      id="resources-search"
                      type="search"
                      value={query}
                      placeholder="Search resources..."
                      onChange={(event) => setQuery(event.target.value)}
                      className="w-full rounded-full border border-gray-200 bg-white py-3 pl-12 pr-4 font-body text-sm text-gray-700 outline-none transition focus:border-yellow-500 focus:shadow-md focus:ring-2 focus:ring-yellow-200"
                    />
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  Showing{" "}
                  <span className="font-semibold text-gray-700">
                    {filteredResources.length}
                  </span>{" "}
                  {filteredResources.length === 1 ? "resource" : "resources"}
                </p>
              </div>

              {/* Grid */}
              {filteredResources.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {filteredResources.map((resource) => (
                    <article
                      key={resource.id}
                      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="relative h-44 w-full overflow-hidden bg-gray-100">
                        <Image
                          src={resource.image || "/default-thumbnail.jpg"}
                          alt={`${resource.title} thumbnail`}
                          fill
                          className="object-cover transition duration-200 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                      </div>

                      <div className="flex flex-1 flex-col gap-4 p-6">
                        <span className="w-fit rounded-full border border-yellow-100 bg-yellow-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-yellow-700">
                          {resource.type}
                        </span>
                        <h3 className="font-display text-lg font-semibold text-gray-800">
                          {resource.title}
                        </h3>
                        <p className="text-sm text-gray-600 break-words line-clamp-3">
                          {resource.description}
                        </p>
                        {resource.link && (
                          <a
                            href={resource.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-yellow-600 hover:text-yellow-700"
                          >
                            View details
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={1.5}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                              />
                            </svg>
                          </a>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-10 text-center text-sm text-gray-500">
                  No resources found.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

const ResourcesPage = () => (
  <main className="bg-gray-50">
    <ResourcesSection />
  </main>
);

export default ResourcesPage;
