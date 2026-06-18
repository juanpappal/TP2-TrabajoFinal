import { Sequelize } from "sequelize";
import { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } from "../config/config.js";

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
  port: DB_PORT,
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Conexión a MySQL con Sequelize correcta.");
  } catch (error) {
    console.error("Error al conectar con MySQL:", error.message);
  }
}

testConnection();

export default sequelize;