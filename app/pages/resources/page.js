"use client";

import Image from "next/image";
import { useMemo, useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";

const RESOURCE_TYPES = ["Videos", "Vlogs", "News", "Media"];
const PAGE_SIZE = 3;
const BASE_VISIBLE_TYPES = 3;

const ResourcesSection = () => {
  const [resources, setResources] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [isTypeOpen, setIsTypeOpen] = useState(true);
  const [showAllTypes, setShowAllTypes] = useState(false);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

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

  const filteredResources = useMemo(() => {
    if (!Array.isArray(resources)) return [];
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

  const totalPages = Math.ceil(filteredResources.length / PAGE_SIZE);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedTypes, query]);

  useEffect(() => {
    if (totalPages === 0 && currentPage !== 1) {
      setCurrentPage(1);
    } else if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  const paginatedResources = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredResources.slice(start, start + PAGE_SIZE);
  }, [filteredResources, currentPage]);

  const handleTypeToggle = (type) => {
    setSelectedTypes((current) =>
      current.includes(type)
        ? current.filter((entry) => entry !== type)
        : [...current, type]
    );
  };

  const showMoreAvailable = RESOURCE_TYPES.length > BASE_VISIBLE_TYPES;
  const typesToShow = showAllTypes
    ? RESOURCE_TYPES
    : RESOURCE_TYPES.slice(0, BASE_VISIBLE_TYPES);
  const remainingTypesCount = Math.max(
    0,
    RESOURCE_TYPES.length - BASE_VISIBLE_TYPES
  );

  return (
    <main>
      <Header />
      {/* <div className="mx-auto flex w-full max-w-[90rem] px-4 pt-6 sm:px-6 lg:px-10">
        <Breadcrumb items={[{ href: "/resources", label: "Resources" }]} />
      </div> */}
      {/* HERO BANNER */}
      <section className="relative h-[40vh] w-full md:h-[50vh]">
        <Image
          src="/Gallery/bg-movingcity.gif"
          alt="About Fortem"
          fill
          priority
          unoptimized
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <h1
            data-aos="fade-up"
            data-aos-delay="150"
            className="bg-[#727171]/90 py-2 px-3 mt-3 text-5xl font-bold uppercase tracking-wide sm:text-5xl text-[#eaaa00]"
          >
            Resources
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="250"
            className="mt-3 max-w-2xl text-sm md:text-lg text-gray-100"
          >
            We are a company dedicated to fortifying the cities of tomorrow.
          </p>
        </div>
      </section>

      <section className="py-3 mb-16">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-10">
          <div className="text-center">
            <p className="mx-auto mt-10 max-w-3xl text-sm text-gray-500">
              Find guides, updates, and media that help you plan and deliver
              every Fortem project with confidence.
            </p>
          </div>

          <div className="mt-2 flex flex-col gap-12 lg:flex-row">
            {/* Sidebar */}
            <aside className="group w-full max-w-xs border border-gray-200 bg-white duration-150 hover:border-gray-300 hover:shadow-md lg:w-60 lg:max-w-xs lg:h-[3.3rem]">
              <button
                type="button"
                onClick={() => setIsTypeOpen((prev) => !prev)}
                className="flex w-full items-center justify-between px-5 py-4 text-left transition hover:bg-gray-50"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-600">
                    Resource Type
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 text-gray-500 transition-transform ${
                    isTypeOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.7a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {isTypeOpen && (
                <div className="border border-gray-200 bg-white px-5 py-4 transition duration-150">
                  <div className="space-y-3 p-4">
                    {typesToShow.map((type) => (
                      <label
                        key={type}
                        className="flex cursor-pointer items-center gap-3 text-sm text-gray-700"
                      >
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-yellow-600 focus:ring-yellow-500"
                          checked={selectedTypes.includes(type)}
                          onChange={() => handleTypeToggle(type)}
                        />
                        <span className="leading-tight">{type}</span>
                      </label>
                    ))}
                  </div>
                  {showMoreAvailable && (
                    <button
                      type="button"
                      onClick={() => setShowAllTypes((prev) => !prev)}
                      className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#b49300] transition hover:text-[#987c00]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 transition-transform ${
                          showAllTypes ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 12.5l-4.5-4a.75.75 0 10-1 1.12l5 4.444a.75.75 0 00.99 0l5-4.444a.75.75 0 10-1-1.12L10 12.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {showAllTypes
                        ? "Show less"
                        : `Show more (${remainingTypesCount})`}
                    </button>
                  )}
                </div>
              )}
            </aside>

            {/* Main Content */}
            <div className="flex-1 space-y-8">
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

              {filteredResources.length > 0 ? (
                <>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    {paginatedResources.map((resource) => (
                      <article
                        key={resource.id}
                        className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#eaaa00] hover:shadow-[0_25px_60px_rgba(233,155,99,0.25)]"
                      >
                        <div className="relative flex h-50 w-full items-center justify-center overflow-hidden bg-white">
                          <Image
                            src={resource.image || "/default-thumbnail.jpg"}
                            alt={`${resource.title} thumbnail`}
                            fill
                            className="object-cover transition duration-200 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          />
                        </div>

                        <div className="flex flex-1 flex-col gap-4 p-6">
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

                  {totalPages >= 1 && (
                    <div className="mt-4 flex flex-col items-center gap-2">
                      <p className="text-sm text-[#727171]">
                        Page {currentPage} of {totalPages}
                      </p>
                      <nav
                        className="flex justify-center"
                        aria-label="Resources pagination"
                      >
                        <ul className="flex items-center gap-2 text-gray-900">
                          <li>
                            <button
                              type="button"
                              onClick={() =>
                                setCurrentPage((prev) => Math.max(1, prev - 1))
                              }
                              disabled={currentPage === 1}
                              className="grid h-9 w-9 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                              aria-label="Previous page"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </button>
                          </li>

                          {Array.from({ length: totalPages }, (_, idx) => idx + 1).map(
                            (page) => (
                              <li key={page}>
                                <button
                                  type="button"
                                  onClick={() => setCurrentPage(page)}
                                  aria-current={page === currentPage ? "page" : undefined}
                                  className={`h-9 w-9 rounded border text-center text-sm font-medium transition-colors ${
                                    page === currentPage
                                      ? "border-[#eaaa00] bg-[#eaaa00] text-white"
                                      : "border-gray-200 hover:bg-gray-50"
                                  }`}
                                >
                                  {page}
                                </button>
                              </li>
                            )
                          )}

                          <li>
                            <button
                              type="button"
                              onClick={() =>
                                setCurrentPage((prev) =>
                                  Math.min(totalPages, prev + 1)
                                )
                              }
                              disabled={currentPage === totalPages}
                              className="grid h-9 w-9 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                              aria-label="Next page"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </button>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  )}
                </>
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
  <main>
    <ResourcesSection />
  </main>
);

export default ResourcesPage;
