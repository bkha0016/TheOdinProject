const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");

const app = express();

// View engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/", userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
