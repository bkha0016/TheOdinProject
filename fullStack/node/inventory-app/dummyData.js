// dummyData.js
require("dotenv").config();
const pool = require("./db");

(async () => {
  try {
    await pool.query("DELETE FROM items");
    await pool.query("DELETE FROM categories");

    const cat1 = await pool.query(
      "INSERT INTO categories (name, description) VALUES ($1,$2) RETURNING id",
      ["Electronics", "Gadgets and devices"]
    );
    const cat2 = await pool.query(
      "INSERT INTO categories (name, description) VALUES ($1,$2) RETURNING id",
      ["Office", "Office supplies"]
    );

    await pool.query(
      "INSERT INTO items (name, description, price, category_id) VALUES ($1,$2,$3,$4)",
      ["Phone", "Smartphone", 699.99, cat1.rows[0].id]
    );
    await pool.query(
      "INSERT INTO items (name, description, price, category_id) VALUES ($1,$2,$3,$4)",
      ["Laptop", "Lightweight laptop", 1299.99, cat1.rows[0].id]
    );
    await pool.query(
      "INSERT INTO items (name, description, price, category_id) VALUES ($1,$2,$3,$4)",
      ["Stapler", "Standard stapler", 12.5, cat2.rows[0].id]
    );

    console.log("Dummy data inserted");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
