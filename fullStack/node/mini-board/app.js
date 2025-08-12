const express = require("express");
const path = require("path");
const indexRouter = require("./routes/index");

const app = express();

// View engine setup, telling express that renders will be allocated in the views folder file name
app.set("views", path.join(__dirname, "views"));
// Tells express which template negine to use when rendering views
app.set("view engine", "ejs");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
