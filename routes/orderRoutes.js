import express from "express";
import {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
} from "../controllers/orderController.js";

const router = express.Router();

// Public/Admin CRUD
router.post("/", createOrder);      // Create order
router.get("/", getOrders);         // Get all orders
router.get("/:id", getOrderById);   // Get single order
router.put("/:id", updateOrder);    // Update order
router.delete("/:id", deleteOrder); // Delete order

export default router;
