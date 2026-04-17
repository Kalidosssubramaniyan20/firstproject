const db = require("../config/db");

exports.getProducts = (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    if (err) return res.send(err);
    res.json(result);
  });
};

exports.addProduct = (req, res) => {
  const { name, price,image,category, stock } = req.body;

  db.query(
    "INSERT INTO products (name, price,image, category, stock) VALUES (?, ?, ?, ?, ?)",
    [name, price,image,category, stock],
    (err) => {
      if (err) return res.send(err);
      res.send("Product Added");
    }
  );
};