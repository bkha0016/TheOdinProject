// controllers/categoryController.js
const pool = require("../db");
const { body, validationResult } = require("express-validator");

// List categories
exports.category_list = async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM categories ORDER BY name");
  res.render("categories/category_list", { categories: rows });
};

// Detail + items
exports.category_detail = async (req, res) => {
  const id = req.params.id;
  const cat = await pool.query("SELECT * FROM categories WHERE id=$1", [id]);
  const items = await pool.query(
    "SELECT * FROM items WHERE category_id=$1 ORDER BY name",
    [id]
  );
  if (!cat.rows.length) return res.status(404).send("Category not found");
  res.render("categories/category_detail", {
    category: cat.rows[0],
    items: items.rows,
  });
};

// Create form
exports.category_create_get = (req, res) => {
  res.render("categories/category_form", { category: {}, errors: [] });
};

// Create POST
exports.category_create_post = [
  body("name").trim().notEmpty().withMessage("Name is required"),
  async (req, res) => {
    const errors = validationResult(req);
    const category = { name: req.body.name, description: req.body.description };
    if (!errors.isEmpty()) {
      return res.render("categories/category_form", {
        category,
        errors: errors.array(),
      });
    }
    await pool.query(
      "INSERT INTO categories (name, description) VALUES ($1, $2)",
      [category.name, category.description]
    );
    res.redirect("/categories");
  },
];

// Delete confirmation GET
exports.category_delete_get = async (req, res) => {
  const id = req.params.id;
  const cat = await pool.query("SELECT * FROM categories WHERE id=$1", [id]);
  if (!cat.rows.length) return res.redirect("/categories");
  res.render("categories/category_delete", {
    category: cat.rows[0],
    errors: [],
  });
};

// Delete POST (requires admin password)
exports.category_delete_post = async (req, res) => {
  const id = req.params.id;
  const adminPassword = req.body.adminPassword;
  if (adminPassword !== process.env.ADMIN_PASSWORD) {
    const cat = await pool.query("SELECT * FROM categories WHERE id=$1", [id]);
    return res.render("categories/category_delete", {
      category: cat.rows[0],
      errors: [{ msg: "Invalid admin password" }],
    });
  }
  await pool.query("DELETE FROM categories WHERE id=$1", [id]);
  res.redirect("/categories");
};

// Edit GET
exports.category_edit_get = async (req, res) => {
  const id = req.params.id;
  const cat = await pool.query("SELECT * FROM categories WHERE id=$1", [id]);
  if (!cat.rows.length) return res.redirect("/categories");
  res.render("categories/category_form", { category: cat.rows[0], errors: [] });
};

// Edit POST
exports.category_edit_post = [
  body("name").trim().notEmpty().withMessage("Name is required"),
  async (req, res) => {
    const id = req.params.id;
    const errors = validationResult(req);
    const category = {
      id,
      name: req.body.name,
      description: req.body.description,
    };
    if (!errors.isEmpty()) {
      return res.render("categories/category_form", {
        category,
        errors: errors.array(),
      });
    }
    await pool.query(
      "UPDATE categories SET name=$1, description=$2 WHERE id=$3",
      [category.name, category.description, id]
    );
    res.redirect(`/categories/${id}`);
  },
];
