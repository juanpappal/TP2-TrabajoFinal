const sequelize = require("./src/config/database.js");

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Conexión a MySQL con Sequelize correcta.");
  } catch (error) {
    console.error("Error al conectar con MySQL:", error.message);
  } finally {
    await sequelize.close();
  }
}

testConnection();