const pool = require("../db");

// GET / - log usernames

exports.getUsernames = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    console.log("Usernames in DB:", result.rows);
    res.send("Usernames logged in terminal!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving usernames");
  }
};

// GET /new - render form
exports.getNewUserForm = (req, res) => {
  res.render("newUser", { title: "Add Username" });
};

// POST /new - save username
exports.postNewUser = async (req, res) => {
  const { username } = req.body;
  try {
    await pool.query("INSERT INTO users (username) VALUES ($1)", [username]);
    console.log("Username to be saved:", username);
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving username");
  }
};
