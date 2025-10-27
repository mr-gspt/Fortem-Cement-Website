import { connectDB } from "../../lib/db";

export async function GET() {
  try {
    const db = await connectDB();
    const [rows] = await db.query("SELECT * FROM resources ORDER BY id DESC");
    await db.end();

    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { type, title, description, image, link } = await req.json();
    const db = await connectDB();
    const [result] = await db.query(
      "INSERT INTO resources (type, title, description, image, link) VALUES (?, ?, ?, ?, ?)",
      [type, title, description, image, link]
    );
    await db.end();

    return new Response(
      JSON.stringify({ message: "Resource added", id: result.insertId }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
