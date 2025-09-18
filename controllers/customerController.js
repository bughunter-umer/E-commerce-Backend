// controllers/customerController.js
import Customer from "../models/Customer.js";
import bcrypt from "bcrypt";

// CREATE new customer
export const createCustomer = async (req, res) => {
  try {
    const { name, email, address, phone, password } = req.body;

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const customer = await Customer.create({
      name,
      email,
      address,
      phone,
      password: hashedPassword,
    });

    res.status(201).json(customer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET all customers
export const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.findAll();
    res.json(customers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET single customer by ID
export const getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id);
    if (!customer) {
      return res.status(404).json({ error: "Customer not found" });
    }
    res.json(customer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE customer
export const updateCustomer = async (req, res) => {
  try {
    const { name, email, address, phone, password } = req.body;

    const customer = await Customer.findByPk(req.params.id);
    if (!customer) {
      return res.status(404).json({ error: "Customer not found" });
    }

    // If password is being updated, hash it
    const hashedPassword = password
      ? await bcrypt.hash(password, 10)
      : customer.password;

    await customer.update({
      name,
      email,
      address,
      phone,
      password: hashedPassword,
    });

    res.json(customer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE customer
export const deleteCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id);
    if (!customer) {
      return res.status(404).json({ error: "Customer not found" });
    }

    await customer.destroy();
    res.json({ message: "Customer deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
