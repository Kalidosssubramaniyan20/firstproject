const db = require("../config/db");

exports.getProducts = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM products");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
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