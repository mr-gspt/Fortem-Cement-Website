// app/resources/admin/page.js
"use client";

import { useEffect, useState, useMemo } from "react";
import {
  UploadCloud,
  FileText,
  Link2,
  Search,
} from "lucide-react";

const RESOURCE_TYPES = ["Videos", "Vlogs", "News", "Media"];

export default function ResourcesAdminPage() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(false);

  // form state
  const [editingId, setEditingId] = useState(null);
  const [typeVal, setTypeVal] = useState(RESOURCE_TYPES[0]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [linkFile, setLinkFile] = useState(null);
  const [linkPreview, setLinkPreview] = useState(null);

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [fileType, setFileType] = useState(null);

  // search state
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchResources();
  }, []);

  async function fetchResources() {
    try {
      const res = await fetch("/api/resources");
      const data = await res.json();
      setResources(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
    }
  }

  const filteredResources = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return resources;
    return resources.filter(
      (r) =>
        r.title.toLowerCase().includes(q) ||
        r.description?.toLowerCase().includes(q) ||
        r.type?.toLowerCase().includes(q)
    );
  }, [resources, searchQuery]);

  function resetForm() {
    setEditingId(null);
    setTypeVal(RESOURCE_TYPES[0]);
    setTitle("");
    setDescription("");
    setLink("");
    setFile(null);
    setLinkFile(null);
    setPreview(null);
    setLinkPreview(null);
    setFileType(null);
  }

  function onFileChange(e) {
    const f = e.target.files?.[0] ?? null;
    setFile(f);
    if (!f) {
      setPreview(null);
      setFileType(null);
      return;
    }
    setFileType(f.type);
    const reader = new FileReader();
    reader.onload = () => setPreview(reader.result);
    reader.readAsDataURL(f);
  }

  function onLinkFileChange(e) {
    const f = e.target.files?.[0] ?? null;
    setLinkFile(f);
    if (!f) {
      setLinkPreview(null);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setLinkPreview(reader.result);
    reader.readAsDataURL(f);
  }

  async function uploadFile(fileObj) {
    return await new Promise((resolve, reject) => {
      const r = new FileReader();
      r.onload = async () => {
        try {
          const base64 = r.result;
          const resp = await fetch("/api/upload", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ filename: fileObj.name, fileData: base64 }),
          });
          const json = await resp.json();
          if (!resp.ok) throw new Error(json?.error || "Upload failed");
          resolve(json.url);
        } catch (err) {
          reject(err);
        }
      };
      r.onerror = () => reject(new Error("File read error"));
      r.readAsDataURL(fileObj);
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      let imageUrl = null;
      let linkUrl = link;

      if (file) imageUrl = await uploadFile(file);
      if (linkFile) linkUrl = await uploadFile(linkFile);

      const payload = {
        type: typeVal,
        title,
        description,
        image:
          imageUrl ??
          (editingId ? resources.find((r) => r.id === editingId)?.image ?? "" : ""),
        link: linkUrl,
      };

      const method = editingId ? "PUT" : "POST";
      const endpoint = editingId ? `/api/resources/${editingId}` : "/api/resources";

      const res = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`${editingId ? "Update" : "Create"} failed`);

      await fetchResources();
      resetForm();
    } catch (err) {
      console.error(err);
      alert("Error: " + (err.message || err));
    } finally {
      setLoading(false);
    }
  }

  function startEdit(resource) {
    setEditingId(resource.id);
    setTypeVal(resource.type);
    setTitle(resource.title);
    setDescription(resource.description);
    setLink(resource.link);
    setPreview(resource.image || null);
    setFileType("image/*");
    setFile(null);
    setLinkFile(null);
  }

  async function handleDelete(id) {
    if (!confirm("Delete this resource?")) return;
    try {
      const res = await fetch(`/api/resources/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed");
      await fetchResources();
    } catch (err) {
      console.error(err);
      alert("Delete error: " + (err.message || err));
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="mx-auto w-full max-w-5xl">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">Resources Admin</h1>

        {/* === FORM === */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-xl bg-white p-6 shadow-sm border border-gray-200"
        >
          <div className="grid gap-4 sm:grid-cols-3">
            <label className="flex flex-col">
              <span className="text-sm font-medium text-gray-700">Type</span>
              <select
                value={typeVal}
                onChange={(e) => setTypeVal(e.target.value)}
                className="mt-1 rounded-lg border border-gray-300 p-2 text-sm"
              >
                {RESOURCE_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col sm:col-span-2">
              <span className="text-sm font-medium text-gray-700">Title</span>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 rounded-lg border border-gray-300 p-2 text-sm"
                required
              />
            </label>
          </div>

          <label className="flex flex-col">
            <span className="text-sm font-medium text-gray-700">Description</span>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 rounded-lg border border-gray-300 p-2 text-sm"
              rows={4}
            />
          </label>

          {/* === Link Section === */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-700 mb-1">
                Link (URL or upload local file)
              </span>
              <input
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="https:// or leave blank if uploading file"
                className="rounded-lg border border-gray-300 p-2 text-sm"
              />
              <label className="mt-3 flex items-center justify-center gap-2 cursor-pointer rounded-lg border border-dashed border-gray-300 py-3 text-sm font-medium text-yellow-700 hover:bg-yellow-50 transition">
                <Link2 className="h-5 w-5" />
                Upload file for link
                <input
                  type="file"
                  accept=".pdf,video/*,image/*,.doc,.docx"
                  onChange={onLinkFileChange}
                  className="hidden"
                />
              </label>

              {linkFile && (
                <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                  <FileText className="h-4 w-4 text-gray-500" />
                  {linkFile.name}
                </div>
              )}
            </div>

            {/* === Thumbnail Upload === */}
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-700 mb-1">
                Thumbnail / Image / Video
              </span>
              <label className="flex items-center justify-center gap-2 cursor-pointer rounded-lg border border-dashed border-gray-300 py-3 text-sm font-medium text-yellow-700 hover:bg-yellow-50 transition">
                <UploadCloud className="h-5 w-5" />
                Choose file
                <input
                  type="file"
                  accept="image/*,.pdf,video/*"
                  onChange={onFileChange}
                  className="hidden"
                />
              </label>

              {preview && (
                <div className="mt-3">
                  {fileType?.startsWith("image/") ? (
                    <img
                      src={preview}
                      alt="preview"
                      className="h-28 w-auto rounded border object-cover"
                    />
                  ) : fileType?.startsWith("video/") ? (
                    <video
                      src={preview}
                      className="h-28 rounded border"
                      controls
                      muted
                    />
                  ) : (
                    <div className="flex items-center gap-2 text-gray-700 text-sm">
                      <FileText className="h-5 w-5 text-gray-500" />
                      {file?.name || "PDF file selected"}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* === Buttons === */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              disabled={loading}
              type="submit"
              className="rounded-lg bg-yellow-600 px-5 py-2 text-sm font-semibold text-white hover:bg-yellow-700"
            >
              {editingId ? "Update Resource" : "Add Resource"}
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm hover:bg-gray-100"
            >
              Reset
            </button>
            {editingId && (
              <button
                type="button"
                onClick={() => {
                  setEditingId(null);
                  resetForm();
                }}
                className="text-sm text-gray-600 underline"
              >
                Cancel Edit
              </button>
            )}
          </div>
        </form>

        {/* === LIST SECTION === */}
        <section className="mt-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
            <h2 className="text-lg font-semibold text-gray-800">Existing Resources</h2>
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search resources..."
                className="w-full rounded-full border border-gray-300 pl-9 pr-3 py-2 text-sm focus:border-yellow-500 focus:ring-1 focus:ring-yellow-200"
              />
            </div>
          </div>

          <div className="grid gap-4">
            {!Array.isArray(filteredResources) || filteredResources.length === 0 ? (
              <div className="rounded-lg p-6 bg-white text-gray-500 text-center border border-dashed border-gray-300">
                No resources found.
              </div>
            ) : (
              filteredResources.map((r) => (
                <div
                  key={r.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-lg bg-white p-4 shadow-sm border border-gray-200"
                >
                  <img
                    src={r.image || "/default-thumbnail.jpg"}
                    alt={r.title}
                    className="h-20 w-28 rounded object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <div className="font-semibold text-gray-800 truncate">
                          {r.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          {r.type} •{" "}
                          {r.created_at
                            ? new Date(r.created_at).toLocaleString()
                            : ""}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => startEdit(r)}
                          className="rounded border border-gray-300 px-3 py-1 text-sm hover:bg-gray-100"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(r.id)}
                          className="rounded bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    <div className="mt-2 text-sm text-gray-600 line-clamp-2">
                      {r.description}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
