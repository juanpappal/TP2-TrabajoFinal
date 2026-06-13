const express = require("express");
const sequelize = require("./src/config/database");
require("./src/models");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API funcionando" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

process.on("SIGINT", async () => {
  await sequelize.close();
  process.exit(0);
});
