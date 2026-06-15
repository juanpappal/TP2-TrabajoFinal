import express from "express";
import usuarioController from "../controllers/usuarioController.js";

const router = express.Router();

router.get("/", usuarioController.getUsuarios);
router.get("/:id", usuarioController.getUsuarioById);
router.post("/", usuarioController.createUsuario);
router.put("/:id", usuarioController.updateUsuario);
router.delete("/:id", usuarioController.deleteUsuario);

export default router;