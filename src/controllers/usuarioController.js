import {
  getUsuarios,
  getUsuarioById,
  createUsuario,
  updateUsuario,
  deleteUsuario,
} from "../services/usuarioService.js";

class UsuarioController {
  async getUsuarios(req, res, next) {
    try {
      const usuarios = await getUsuarios();
      res.json(usuarios);
    } catch (error) {
      next(error);
    }
  }

  async getUsuarioById(req, res, next) {
    try {
      const usuario = await getUsuarioById(req.params.id);
      if (!usuario) {
        const err = new Error("Usuario no encontrado");
        err.status = 404;
        throw err;
      }
      res.json(usuario);
    } catch (error) {
      next(error);
    }
  }

  async createUsuario(req, res, next) {
    try {
      const usuario = await createUsuario(req.body);
      res.status(201).json(usuario);
    } catch (error) {
      error.status = 400;
      next(error);
    }
  }

  async updateUsuario(req, res, next) {
    try {
      const usuarioActualizado = await updateUsuario(req.params.id, req.body);
      res.json(usuarioActualizado);
    } catch (error) {
      error.status = error.status || 400;
      next(error);
    }
  }

  async deleteUsuario(req, res, next) {
    try {
      await deleteUsuario(req.params.id);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}

export default new UsuarioController();
