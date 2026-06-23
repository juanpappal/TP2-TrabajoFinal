import { Router } from "express";
import usuarioRoutes from "./usuarioRoutes.js";
import libroRoutes from "./libroRoutes.js";
import authRoutes from "./authRoutes.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/usuarios", usuarioRoutes);
router.use("/libros", libroRoutes);

export default router;
