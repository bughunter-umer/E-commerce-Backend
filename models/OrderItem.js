import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Order from "./Order.js";
import Product from "./Product.js";

const OrderItem = sequelize.define("OrderItem", {
  productId: { type: DataTypes.INTEGER, allowNull: false },
  title: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.FLOAT, allowNull: false },
  qty: { type: DataTypes.INTEGER, allowNull: false }
}, { timestamps: false });

// OrderItem.belongsTo(Order, { foreignKey: "orderId" });
// OrderItem.belongsTo(Product, { foreignKey: "productId" });

export default OrderItem;
