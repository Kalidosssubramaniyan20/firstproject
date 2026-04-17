require("dotenv").config();
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: process.env.mysql.railway.internal,
  user: process.env.root,
  password: process.env.RchpDOYBfoepVBmBnIltWQKUdXbMiggn,
  database: process.env.railway,
});

db.connect(err => {
  if (err) throw err;
  console.log("MySQL Connected");
});

module.exports = db; 
