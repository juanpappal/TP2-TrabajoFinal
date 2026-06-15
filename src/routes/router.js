import express from "express";
import usuarioRoutes from "./usuarioRoutes.js";
import libroRoutes from "./libroRoutes.js";

const router = express.Router();

router.use("/usuarios", usuarioRoutes);
router.use("/libros", libroRoutes);

export default router;
