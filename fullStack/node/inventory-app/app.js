// app.js
require("dotenv").config();
const express = require("express");
const path = require("path");

const categoryRoutes = require("./routes/categoryRoutes");
const itemRoutes = require("./routes/itemRoutes");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Home page redirect
app.get("/", (req, res) => res.redirect("/categories"));

app.use("/categories", categoryRoutes);
app.use("/items", itemRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
