import { connectDB } from "../../../lib/db";

export async function PUT(req, context) {
  try {
    const { id } = await context.params;
    const { type, title, description, image, link } = await req.json();

    const db = await connectDB();
    await db.query(
      "UPDATE resources SET type=?, title=?, description=?, image=?, link=? WHERE id=?",
      [type, title, description, image, link, id]
    );
    await db.end();

    return new Response(JSON.stringify({ message: "Resource updated" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

export async function DELETE(req, context) {
  try {
    const { id } = await context.params;
    const db = await connectDB();
    await db.query("DELETE FROM resources WHERE id=?", [id]);
    await db.end();

    return new Response(JSON.stringify({ message: "Resource deleted" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
