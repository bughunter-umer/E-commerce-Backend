// models/Customer.js
import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Customer = sequelize.define("Customer", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      len: [10, 15], // basic validation for phone number length
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Customer;
