// controllers/orderItemController.js
import OrderItem from "../models/OrderItem.js";
import Product from "../models/Product.js";
import Order from "../models/Order.js";

// CREATE OrderItem
export const createOrderItem = async (req, res) => {
  try {
    const { orderId, productId, qty } = req.body;

    if (!orderId || !productId || !qty) {
      return res
        .status(400)
        .json({ error: "orderId, productId, and qty are required" });
    }

    // Fetch product to get price and title
    const product = await Product.findByPk(productId);
    if (!product) return res.status(404).json({ error: "Product not found" });

    const orderItem = await OrderItem.create({
      orderId,
      productId,
      title: product.name,
      price: product.price,
      qty,
    });

    res.status(201).json(orderItem);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// READ all OrderItems
export const getOrderItems = async (req, res) => {
  try {
    const items = await OrderItem.findAll({
      include: [
        { model: Product, attributes: ["id", "name", "price", "imageUrl"] },
        {
          model: Order,
          attributes: ["id", "name", "email", "address", "total"],
          as: "Order",
        },
      ],
    });
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch order items" });
  }
};

// READ single OrderItem by ID
export const getOrderItemById = async (req, res) => {
  try {
    const item = await OrderItem.findByPk(req.params.id, {
      include: [
        { model: Product, attributes: ["id", "name", "price", "imageUrl"] },
        {
          model: Order,
          attributes: ["id", "name", "email", "address", "total"],
        },
      ],
    });

    if (!item) return res.status(404).json({ error: "Order item not found" });
    res.json(item);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch order item" });
  }
};

// UPDATE OrderItem
export const updateOrderItem = async (req, res) => {
  try {
    const { qty } = req.body;

    const item = await OrderItem.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: "Order item not found" });

    if (qty !== undefined) item.qty = qty;

    await item.save();

    const updatedItem = await OrderItem.findByPk(req.params.id, {
      include: [
        { model: Product, attributes: ["id", "name", "price", "imageUrl"] },
        {
          model: Order,
          attributes: ["id", "name", "email", "address", "total"],
        },
      ],
    });

    res.json(updatedItem);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update order item" });
  }
};

// DELETE OrderItem
export const deleteOrderItem = async (req, res) => {
  try {
    const item = await OrderItem.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: "Order item not found" });

    await item.destroy();
    res.json({ message: "Order item deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete order item" });
  }
};
