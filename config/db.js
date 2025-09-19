import { Sequelize } from "sequelize";

let sequelize;

if (process.env.NODE_ENV === "production") {
  // 👉 Railway (Production)
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    protocol: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // important for Railway
      },
    },
  });
} else {
  // 👉 Local Development
  sequelize = new Sequelize("ecommerce", "postgres", "postgres", {
    host: "localhost",
    dialect: "postgres",
  });
}

export default sequelize;
