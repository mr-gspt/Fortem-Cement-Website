import mysql from "mysql2/promise";


export async function connectDB() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,     // e.g., 'localhost'
    user: process.env.DB_USER,     // your MySQL username
    password: process.env.DB_PASS, // your MySQL password
    database: process.env.DB_NAME, // your database name
  });
  return connection;
}