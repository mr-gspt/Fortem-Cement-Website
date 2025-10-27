// app/api/upload/route.js
import fs from "fs";
import path from "path";

export const runtime = "nodejs"; // ensure Node runtime so fs/path work

export async function POST(req) {
  try {
    const { filename, fileData } = await req.json();
    if (!filename || !fileData) {
      return new Response(JSON.stringify({ error: "Missing filename or fileData" }), { status: 400 });
    }

    // fileData should be like: data:image/png;base64,iVBORw0KG...
    const matches = fileData.match(/^data:(.+);base64,(.+)$/);
    if (!matches) {
      return new Response(JSON.stringify({ error: "Invalid file data" }), { status: 400 });
    }

    const base64Data = matches[2];
    const buffer = Buffer.from(base64Data, "base64");

    const uploadsDir = path.join(process.cwd(), "public", "uploads");
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    // sanitize filename a bit, prefix with timestamp to avoid collisions
    const safeName = `${Date.now()}-${filename.replace(/[^a-zA-Z0-9.\-_]/g, "_")}`;
    const filePath = path.join(uploadsDir, safeName);

    await fs.promises.writeFile(filePath, buffer);

    // Use the public path that your app serves files from
    const publicUrl = `/uploads/${safeName}`;

    return new Response(JSON.stringify({ url: publicUrl }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("upload error:", err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
