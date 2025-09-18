import express from "express";
import {
  registerUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
} from "../controllers/userController.js";

const router = express.Router();

router.post("/", registerUser);     // CREATE
router.get("/", getUsers);          // READ all
router.get("/:id", getUserById);    // READ one
router.put("/:id", updateUser);     // UPDATE
router.delete("/:id", deleteUser);  // DELETE

export default router;
