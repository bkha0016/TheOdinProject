// routes/categoryRoutes.js
const express = require("express");
const router = express.Router();
const controller = require("../controllers/categoryController");

router.get("/", controller.category_list);
router.get("/new", controller.category_create_get);
router.post("/new", controller.category_create_post);
router.get("/:id", controller.category_detail);
router.get("/:id/edit", controller.category_edit_get);
router.post("/:id/edit", controller.category_edit_post);
router.get("/:id/delete", controller.category_delete_get);
router.post("/:id/delete", controller.category_delete_post);

module.exports = router;
