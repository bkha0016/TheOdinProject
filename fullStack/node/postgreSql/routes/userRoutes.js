const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.getUsernames);
router.get("/new", userController.getNewUserForm);
router.post("/new", userController.postNewUser);

module.exports = router;
