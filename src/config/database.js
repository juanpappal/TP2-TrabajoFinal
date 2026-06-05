const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("biblioteca_db", "root", "contoso", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

module.exports = sequelize;