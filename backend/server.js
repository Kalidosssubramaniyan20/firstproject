// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use("/api/auth", require("./routes/authRoutes"));
// app.use("/api/products", require("./routes/productRoutes"));

// app.get("/", (req, res) => {
//   res.send("API Running...");
// });

// app.listen(5000, () => console.log("Server running on port 5000"));
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const productRoutes = require("./routes/productRoutes");

app.use("/api", productRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
  
})
;
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});