import fs from "fs";
import path from "path";
import { pipeline } from "stream/promises";
import { Readable } from "stream";

export const runtime = "nodejs";

const MAX_FILE_BYTES = 500 * 1024 * 1024; // 500MB limit; adjust as needed

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file || typeof file === "string") {
      return new Response(JSON.stringify({ error: "No file found" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (file.size > MAX_FILE_BYTES) {
      return new Response(
        JSON.stringify({ error: "File is too large. Max 500MB." }),
        {
          status: 413,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const uploadsDir = path.join(process.cwd(), "public", "uploads");
    await fs.promises.mkdir(uploadsDir, { recursive: true });

    const safeName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.\-_]/g, "_")}`;
    const filePath = path.join(uploadsDir, safeName);

    await pipeline(Readable.fromWeb(file.stream()), fs.createWriteStream(filePath));

    return new Response(JSON.stringify({ url: `/uploads/${safeName}` }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("upload error:", err);
    return new Response(JSON.stringify({ error: "Upload failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
