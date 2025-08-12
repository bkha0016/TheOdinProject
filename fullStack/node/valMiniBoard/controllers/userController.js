const { body, validationResult, query } = require("express-validator");
const users = require("../storages/users");

exports.getForm = (req, res) => {
  res.render("createUser", { title: "Create User", errors: [], data: [] });
};

exports.postForm = [
  body("email").isEmail().withMessage("Invalid email").normalizeEmail(),
  body("age")
    .optional({ checkFalsy: true })
    .isInt({ min: 18, max: 120 })
    .withMessage("Age must be between 18 and 120"),
  body("bio")
    .optional({ checkFalsy: true })
    .isLength({ max: 200 })
    .withMessage("Bio cannot be more than 200 characters"),

  (req, res) => {
    const errors = validationResult(req);
    const data = req.body;

    if (!errors.isEmpty()) {
      return res.render("createUser", {
        title: "Create User",
        errors: errors.array(),
        data,
      });
    }
    // if succesful, push data -> reroutes to home
    users.push(data);
    res.redirect("/");
  },
];

exports.getSearchForm = (req, res) => {
  res.render("search", { title: "Search User", user: null });
};

exports.searchUser = (req, res) => {
  const { name, email } = req.query;
  const user = users.find(
    (u) => (name && u.name === name) || (email && u.email === email)
  );

  res.render("search", { title: "Search Result", user });
};
