// routes/orderItemRoutes.js
import express from "express";
import {
  createOrderItem,
  getOrderItems,
  getOrderItemById,
  updateOrderItem,
  deleteOrderItem
} from "../controllers/orderItem.js";

const router = express.Router();

router.post("/", createOrderItem);      // CREATE
router.get("/", getOrderItems);         // READ all
router.get("/:id", getOrderItemById);   // READ one
router.put("/:id", updateOrderItem);    // UPDATE
router.delete("/:id", deleteOrderItem); // DELETE

export default router;
