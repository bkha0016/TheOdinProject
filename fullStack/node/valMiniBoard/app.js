const express = require("express");
const path = require("path");
const indexRouter = require("./routes/index");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// viewing html
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// routes
app.use("/", indexRouter);

const PORT = 3000;

// start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
