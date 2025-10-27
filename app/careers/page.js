"use client";

import { useEffect, useMemo, useState } from "react";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Breadcrumb from "../components/Breadcrumb.js";

const SHEET_RANGE = "Sheet1!A2:E200";
const FALLBACK_DEPARTMENTS = ["Engineering", "Operations", "People"];
const FALLBACK_LOCATIONS = ["Manila", "Cebu", "Davao", "Remote"];



export default function CareersPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  useEffect(() => {
    document.title = "Careers - Fortem | Join Our Team";

    const sheetId = process.env.NEXT_PUBLIC_SHEET_ID;
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

    if (!sheetId || !apiKey) {
      setError(
        "Missing Google Sheets configuration. Add NEXT_PUBLIC_SHEET_ID and NEXT_PUBLIC_GOOGLE_API_KEY to .env.local."
      );
      setLoading(false);
      return;
    }

    const fetchJobs = async () => {
      try {
        const response = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${SHEET_RANGE}?key=${apiKey}`
        );

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();

        if (!data.values) {
          setJobs([]);
          return;
        }

        const mappedJobs = data.values
          .map((row) => {
            const [title, department, location, description, datePosted] = row;
            if (!title) return null;
            return {
              id: `${title}-${datePosted}`,
              title,
              department: department || "",
              location: location || "",
              description: description || "",
              datePosted: datePosted || "",
            };
          })
          .filter(Boolean);

        setJobs(mappedJobs);
      } catch (fetchError) {
        console.error("Error fetching jobs from Google Sheets", fetchError);
        setError("We could not load job openings right now. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const departmentOptions = useMemo(() => {
    const unique = new Set(FALLBACK_DEPARTMENTS);
    jobs.forEach((job) => {
      if (job.department) unique.add(job.department);
    });
    return Array.from(unique);
  }, [jobs]);

  const locationOptions = useMemo(() => {
    const unique = new Set(FALLBACK_LOCATIONS);
    jobs.forEach((job) => {
      if (job.location) unique.add(job.location);
    });
    return Array.from(unique);
  }, [jobs]);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesDepartment = selectedDepartment
        ? job.department === selectedDepartment
        : true;
      const matchesLocation = selectedLocation ? job.location === selectedLocation : true;
      return matchesDepartment && matchesLocation;
    });
  }, [jobs, selectedDepartment, selectedLocation]);

  return (
    <main className="min-h-screen bg-white text-white">
      <Header />
      <div className="mx-auto flex w-full max-w-5xl px-6 pt-6">
        <Breadcrumb
          items={[
            { href: "/careers", label: "Careers" },
          ]}
        />
      </div>

      <section className="border-b text-center justify-center items-center border-slate-100 bg-white">
        <div className="mx-auto flex max-w-5xl flex-col gap-12 px-6 py-16 sm:py-20">
          <div className="space-y-6 text-center sm:text-left">
            <p className="text-sm text-center font-semibold uppercase tracking-[0.25em] text-amber-600">Join our team</p>
            <h1 className="text-4xl text-center font-semibold sm:text-5xl text-slate-900">Careers</h1>
            <p className="text-lg text-center text-slate-600">Looking for a job? Submit your resume.</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="#open-roles"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                View open roles
              </a>
              <a
                href="mailto:careers@fortem.ph"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-amber-500 hover:text-amber-600"
              >
                Submit Resume
              </a>
            </div>
          </div>

          
        </div>
      </section>

      <section id="open-roles" className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold">Open roles</h2>
              <p className="text-sm text-slate-600">
                Filter by department or location to find a role that fits your strengths.
              </p>
            </div>
            <a
              href="mailto:careers@fortem.ph"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-900 transition-colors hover:border-amber-500 hover:text-amber-600"
            >
              Submit Resume
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <label className="flex w-full flex-col text-sm font-medium text-slate-800">
              Department
              <select
                className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                value={selectedDepartment}
                onChange={(event) => setSelectedDepartment(event.target.value)}
              >
                <option value="">All Departments</option>
                {departmentOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex w-full flex-col text-sm font-medium text-slate-800">
              Location
              <select
                className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                value={selectedLocation}
                onChange={(event) => setSelectedLocation(event.target.value)}
              >
                <option value="">All Locations</option>
                {locationOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="mt-10 space-y-4">
            {loading && (
              <div className="rounded-xl border border-slate-200 bg-white p-6 text-center text-sm text-slate-600">
                Loading job openings...
              </div>
            )}

            {error && !loading && (
              <div className="rounded-xl border border-slate-200 bg-white p-6 text-center text-sm text-slate-900">
                {error}
              </div>
            )}

            {!loading && !error && filteredJobs.length === 0 && (
              <div className="rounded-xl border border-slate-200 bg-white p-6 text-center text-sm text-slate-600">
                No job openings at the moment. Please check back soon.
              </div>
            )}

            {!loading && !error &&
              filteredJobs.length > 0 &&
              filteredJobs.map((job) => (
                <article
                  key={job.id}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-amber-400"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                        {job.department || "General"}
                      </p>
                      <h3 className="text-xl font-semibold text-slate-900">{job.title}</h3>
                    </div>
                    {job.datePosted ? (
                      <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                        Posted {job.datePosted}
                      </span>
                    ) : null}
                  </div>
                  {job.description ? (
                    <p className="mt-4 text-sm leading-relaxed text-slate-600">{job.description}</p>
                  ) : null}
                  <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-sm font-medium text-slate-800">{job.location || "Location flexible"}</span>
                    <a
                      href="#"
                      className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-amber-400"
                    >
                      Apply now
                    </a>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
