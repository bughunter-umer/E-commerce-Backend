import User from "./User.js";
import Order from "./Order.js";
import OrderItem from "./OrderItem.js";
import Product from "./Product.js";
import Customer from "./Customer.js";

// 🔗 Relationships
Order.belongsTo(User, { foreignKey: "UserId" });
User.hasMany(Order, { foreignKey: "UserId" });

Order.hasMany(OrderItem, { foreignKey: "orderId", as: "items" });
OrderItem.belongsTo(Order, { foreignKey: "orderId" });

OrderItem.belongsTo(Product, { foreignKey: "productId" });
Product.hasMany(OrderItem, { foreignKey: "productId" });

export { User, Order, OrderItem, Product, Customer };
