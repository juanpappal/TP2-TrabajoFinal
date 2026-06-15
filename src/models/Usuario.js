import { DataTypes } from "sequelize";
import sequelize from "../connection/database.js";

const Usuario = sequelize.define("Usuario", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  tableName: "usuarios",
  timestamps: false
});

export default Usuario;