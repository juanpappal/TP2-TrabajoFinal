import { Usuario } from "../models/index.js";

class UsuarioController {
  async getUsuarios(req, res, next) {
    try {
      const usuarios = await Usuario.findAll();
      res.json(usuarios);
    } catch (error) {
      next(error);
    }
  }

  async getUsuarioById(req, res, next) {
    try {
      const usuario = await Usuario.findByPk(req.params.id);
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
      const usuario = await Usuario.create(req.body);
      res.status(201).json(usuario);
    } catch (error) {
      error.status = 400;
      next(error);
    }
  }

  async updateUsuario(req, res, next) {
    try {
      const usuario = await Usuario.findByPk(req.params.id);
      if (!usuario) {
        const err = new Error("Usuario no encontrado");
        err.status = 404;
        throw err;
      }

      const usuarioActualizado = await usuario.update(req.body);
      res.json(usuarioActualizado);
    } catch (error) {
      error.status = error.status || 400;
      next(error);
    }
  }

  async deleteUsuario(req, res, next) {
    try {
      const usuario = await Usuario.findByPk(req.params.id);
      if (!usuario) {
        const err = new Error("Usuario no encontrado");
        err.status = 404;
        throw err;
      }
      await usuario.destroy();
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}

export default new UsuarioController();
