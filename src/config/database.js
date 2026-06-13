const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("biblioteca_db", "root", "contoso", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
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

module.exports = sequelize;