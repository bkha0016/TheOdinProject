// routes/itemRoutes.js
const express = require("express");
const router = express.Router();
const controller = require("../controllers/itemController");

router.get("/", controller.item_list);
router.get("/new", controller.item_create_get);
router.post("/new", controller.item_create_post);
router.get("/:id", controller.item_detail);
router.get("/:id/edit", controller.item_edit_get);
router.post("/:id/edit", controller.item_edit_post);
router.get("/:id/delete", controller.item_delete_get);
router.post("/:id/delete", controller.item_delete_post);

module.exports = router;
