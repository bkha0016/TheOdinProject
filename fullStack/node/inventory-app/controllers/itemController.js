// controllers/itemController.js
const pool = require("../db");
const { body, validationResult } = require("express-validator");

// List items
exports.item_list = async (req, res) => {
  const { rows } = await pool.query(`
    SELECT items.*, categories.name AS category_name
    FROM items LEFT JOIN categories ON items.category_id = categories.id
    ORDER BY items.name
  `);
  res.render("items/item_list", { items: rows });
};

// Detail
exports.item_detail = async (req, res) => {
  const id = req.params.id;
  const result = await pool.query(
    "SELECT items.*, categories.name AS category_name FROM items LEFT JOIN categories ON items.category_id = categories.id WHERE items.id=$1",
    [id]
  );
  if (!result.rows.length) return res.status(404).send("Item not found");
  res.render("items/item_detail", { item: result.rows[0] });
};

// Create GET
exports.item_create_get = async (req, res) => {
  const categories = (
    await pool.query("SELECT * FROM categories ORDER BY name")
  ).rows;
  res.render("items/item_form", { item: {}, categories, errors: [] });
};

// Create POST
exports.item_create_post = [
  body("name").trim().notEmpty().withMessage("Name is required"),
  body("price")
    .isFloat({ gt: 0 })
    .withMessage("Price must be a positive number"),
  body("category_id").isInt().withMessage("Category is required"),
  async (req, res) => {
    const errors = validationResult(req);
    const item = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category_id: req.body.category_id || null,
    };
    const categories = (
      await pool.query("SELECT * FROM categories ORDER BY name")
    ).rows;
    if (!errors.isEmpty()) {
      return res.render("items/item_form", {
        item,
        categories,
        errors: errors.array(),
      });
    }
    await pool.query(
      "INSERT INTO items (name, description, price, category_id) VALUES ($1,$2,$3,$4)",
      [item.name, item.description, item.price, item.category_id]
    );
    res.redirect("/items");
  },
];

// Delete GET (confirm)
exports.item_delete_get = async (req, res) => {
  const id = req.params.id;
  const result = await pool.query("SELECT * FROM items WHERE id=$1", [id]);
  if (!result.rows.length) return res.redirect("/items");
  res.render("items/item_delete", { item: result.rows[0], errors: [] });
};

// Delete POST (admin password required)
exports.item_delete_post = async (req, res) => {
  const id = req.params.id;
  const adminPassword = req.body.adminPassword;
  if (adminPassword !== process.env.ADMIN_PASSWORD) {
    const item = (await pool.query("SELECT * FROM items WHERE id=$1", [id]))
      .rows[0];
    return res.render("items/item_delete", {
      item,
      errors: [{ msg: "Invalid admin password" }],
    });
  }
  await pool.query("DELETE FROM items WHERE id=$1", [id]);
  res.redirect("/items");
};

// Edit GET
exports.item_edit_get = async (req, res) => {
  const id = req.params.id;
  const itemRes = await pool.query("SELECT * FROM items WHERE id=$1", [id]);
  if (!itemRes.rows.length) return res.redirect("/items");
  const categories = (
    await pool.query("SELECT * FROM categories ORDER BY name")
  ).rows;
  res.render("items/item_form", {
    item: itemRes.rows[0],
    categories,
    errors: [],
  });
};

// Edit POST
exports.item_edit_post = [
  body("name").trim().notEmpty().withMessage("Name is required"),
  body("price")
    .isFloat({ gt: 0 })
    .withMessage("Price must be a positive number"),
  body("category_id").isInt().withMessage("Category is required"),
  async (req, res) => {
    const id = req.params.id;
    const errors = validationResult(req);
    const item = {
      id,
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category_id: req.body.category_id,
    };
    const categories = (
      await pool.query("SELECT * FROM categories ORDER BY name")
    ).rows;
    if (!errors.isEmpty()) {
      return res.render("items/item_form", {
        item,
        categories,
        errors: errors.array(),
      });
    }
    await pool.query(
      "UPDATE items SET name=$1, description=$2, price=$3, category_id=$4 WHERE id=$5",
      [item.name, item.description, item.price, item.category_id, id]
    );
    res.redirect(`/items/${id}`);
  },
];
