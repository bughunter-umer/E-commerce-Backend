// seedProducts.js
import sequelize from "./config/db.js";
import Product from "./models/Product.js";

const seedProducts = async () => {
  try {
    await sequelize.sync({ force: true }); // ❗ Drops & recreates tables

    await Product.bulkCreate([
      {
        name: "Wireless Headphones",
        description: "Noise cancelling over-ear headphones",
        price: 120.99,
        stock: 25,
        imageUrl: "https://via.placeholder.com/200?text=Headphones",
      },
      {
        name: "Smartphone",
        description: "Latest model with 128GB storage",
        price: 699.0,
        stock: 15,
        imageUrl: "https://via.placeholder.com/200?text=Smartphone",
      },
      {
        name: "Gaming Mouse",
        description: "RGB ergonomic gaming mouse",
        price: 49.99,
        stock: 50,
        imageUrl: "https://via.placeholder.com/200?text=Mouse",
      },
      {
        name: "Mechanical Keyboard",
        description: "Blue switch backlit keyboard",
        price: 89.99,
        stock: 30,
        imageUrl: "https://via.placeholder.com/200?text=Keyboard",
      },
    ]);

    console.log("✅ Products seeded!");
    process.exit();
  } catch (err) {
    console.error("❌ Error seeding products:", err);
    process.exit(1);
  }
};

seedProducts();
