require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set("view engine", "ejs");

// Serve static files from public folder
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact-me", (req, res) => {
  res.render("contact-me");
});

// 404 - catch all other routes
app.use((req, res) => {
  res.status(404).render("404");
});

// start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
