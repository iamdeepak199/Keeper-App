import mysql from "mysql2";
import dotenv from "dotenv";
// Load environment variables

dotenv.config();


const db = mysql.createConnection({
  host:     process.env.DB_HOST,           
  user:     process.env.DB_USER,           
  password: process.env.DB_PASSWORD,       
  database: process.env.DB_NAME          
});

db.connect(err => {
  if (err) {
    console.error("DB connection failed:", err);
    return;
  }
  console.log("Connected to MySQL DB");
});

export default db;