import { Order, OrderItem, Product, User } from "../models/index.js";

// CREATE new order
export const createOrder = async (req, res) => {
  const { name, email, address, total, items } = req.body;
  try {
    if (!items || items.length === 0) {
      return res.status(400).json({ error: "No items in order" });
    }

    // Create order
    const order = await Order.create({ name, email, address, total });

    // Create order items
    for (const item of items) {
      const product = await Product.findByPk(item.productId);
      if (!product) continue;

      await OrderItem.create({
        orderId: order.id,
        productId: product.id,
        title: product.name,
        price: product.price,
        qty: item.qty || item.quantity || 1,
      });
    }

    const savedOrder = await Order.findByPk(order.id, {
      include: [{ model: OrderItem, as: "items" }], // ✅ fixed alias
    });

    res.status(201).json(savedOrder);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// GET all orders
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [{ model: OrderItem, as: "items" }], // ✅ fixed alias
    });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET order by ID
export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id, {
      include: [{ model: OrderItem, as: "items" }], // ✅ fixed alias
    });
    if (!order) return res.status(404).json({ error: "Order not found" });
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE order
export const updateOrder = async (req, res) => {
  const { name, email, address, total, items } = req.body;
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) return res.status(404).json({ error: "Order not found" });

    await order.update({ name, email, address, total });

    if (items && items.length > 0) {
      await OrderItem.destroy({ where: { orderId: order.id } });

      for (const item of items) {
        const product = await Product.findByPk(item.productId);
        if (!product) continue;

        await OrderItem.create({
          orderId: order.id,
          productId: product.id,
          title: product.name,
          price: product.price,
          qty: item.qty || item.quantity || 1,
        });
      }
    }

    const updatedOrder = await Order.findByPk(order.id, {
      include: [{ model: OrderItem, as: "items" }], // ✅ fixed alias
    });

    res.json(updatedOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE order
export const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) return res.status(404).json({ error: "Order not found" });

    await OrderItem.destroy({ where: { orderId: order.id } });
    await order.destroy();

    res.json({ message: "Order deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
