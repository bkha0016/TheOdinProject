const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.getForm);
router.post("/", userController.postForm);

router.get("/search", userController.getSearchForm);
router.get("/search/result", userController.searchUser);

module.exports = router;
