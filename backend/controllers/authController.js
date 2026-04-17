const db = require("../config/db");
const bcrypt = require("bcrypt");

exports.register = (req, res) => {
  const { name, email, password } = req.body;

  const hash = bcrypt.hashSync(password, 10);

  db.query(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, hash],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.send("User Registered");
    }
  );
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    (err, result) => {
      if (err) return res.status(500).send(err);
      if (result.length === 0) return res.send("User not found");

      const user = result[0];
      const isMatch = bcrypt.compareSync(password, user.password);

      if (!isMatch) return res.send("Wrong password");

      res.send("Login success");
    }
  );
};