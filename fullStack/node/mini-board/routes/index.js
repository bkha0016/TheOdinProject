const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

router.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages });
});

router.get("/new", (req, res) => {
  res.render("form", { title: "New Message" });
});

router.post(
  "/new",
  [
    body("messageUser")
      .trim()
      .notEmpty()
      .withMessage("Username is required")
      .isLength({ min: 3 })
      .withMessage("Username must be at least 3 characters"),

    body("messageText")
      .trim()
      .notEmpty()
      .withMessage("Message is required")
      .isLength({ max: 200 })
      .withMessage("Message cannot exceed 200 characters"),
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render("form", {
        title: "New Message",
        errors: errors.array(),
        data: req.body,
      });
    }

    const { messageText, messageUser } = req.body;
    messages.push({ text: messageText, user: messageUser, added: new Date() });
    res.redirect("/");
  }
);

module.exports = router;
