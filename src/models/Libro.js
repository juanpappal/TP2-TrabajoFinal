import { DataTypes } from "sequelize";
import sequelize from "../connection/database.js";

const Libro = sequelize.define("Libro", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  autor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  tableName: "libros",
  timestamps: false
});

export default Libro;