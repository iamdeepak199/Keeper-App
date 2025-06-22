const mysql = require("mysql");


const db = mysql.createConnection({
  host: "localhost",
  user: "root",           // your MySQL username
  password: "12345",           // your MySQL password
  database: "keeper_app"
});

db.connect(err => {
  if (err) {
    console.error("DB connection failed:", err);
    return;
  }
  console.log("Connected to MySQL DB");
});

module.exports = db;