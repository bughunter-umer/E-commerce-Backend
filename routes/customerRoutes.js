// routes/customer.routes.js
import express from "express";
import {
  createCustomer,
  getCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
} from "../controllers/customerController.js";

const router = express.Router();

// Public/Admin CRUD
router.post("/", createCustomer);       // Create customer
router.get("/", getCustomers);          // Get all customers
router.get("/:id", getCustomerById);    // Get single customer
router.put("/:id", updateCustomer);     // Update customer
router.delete("/:id", deleteCustomer);  // Delete customer

export default router;
