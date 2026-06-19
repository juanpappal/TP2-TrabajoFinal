import express from "express";
import { pathToFileURL } from "url";
import swaggerUi from "swagger-ui-express";
import sequelize from "./src/connection/database.js";
import { PORT } from "./src/config/config.js";
import router from "./src/routes/router.js";
import errorHandler from "./src/middlewares/errorHandler.js";
import notFound from "./src/middlewares/notFound.js";
import "./src/models/index.js";
import swaggerSpec from "./src/config/swagger.js";

export const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.json({ message: "API funcionando" });
});

app.use(router);
app.use(notFound);
app.use(errorHandler);

export async function initDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Conexión a MySQL establecida.");

    await sequelize.sync({ alter: true });
    console.log("Tablas sincronizadas con MySQL.");
  } catch (error) {
    console.error("Error al inicializar la base de datos:", error);
    throw error;
  }
}

function startServer() {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}

async function start() {
  try {
    await initDatabase();
    startServer();
  } catch (error) {
    console.error("Error al iniciar la aplicación:", error);
    process.exit(1);
  }
}


start();

process.on("SIGINT", async () => {
  await sequelize.close();
  process.exit(0);
});

export default app;
