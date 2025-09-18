import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import User from "./User.js";
import OrderItem from "./OrderItem.js"; // ⬅️ import this

const Order = sequelize.define("Order", {
  name: { type: DataTypes.STRING, allowNull: false },   // customer name at checkout
  email: { type: DataTypes.STRING, allowNull: false },  // customer email at checkout
  address: { type: DataTypes.TEXT, allowNull: false },  // shipping address
  total: { type: DataTypes.FLOAT, allowNull: false },   // total order amount
}, {
  timestamps: true
});

// // 🔗 Relationships
// Order.belongsTo(User, { foreignKey: "UserId" });
// User.hasMany(Order, { foreignKey: "UserId" });

// // ✅ Add missing relation with alias
// Order.hasMany(OrderItem, { foreignKey: "orderId", as: "items" });
// OrderItem.belongsTo(Order, { foreignKey: "orderId" });

export default Order;
