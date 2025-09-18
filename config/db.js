import { Sequelize } from "sequelize";

const sequelize = new Sequelize("ecommerce", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
});

export default sequelize;
