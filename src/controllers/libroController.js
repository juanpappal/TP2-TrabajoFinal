import { Libro } from "../models/index.js";

class LibroController {
  async getLibros(req, res, next) {
    try {
      const libros = await Libro.findAll();
      res.json(libros);
    } catch (error) {
      next(error);
    }
  }

  async getLibroById(req, res, next) {
    try {
      const libro = await Libro.findByPk(req.params.id);
      if (!libro) {
        const err = new Error("Libro no encontrado");
        err.status = 404;
        throw err;
      }
      res.json(libro);
    } catch (error) {
      next(error);
    }
  }

  async createLibro(req, res, next) {
    try {
      const libro = await Libro.create(req.body);
      res.status(201).json(libro);
    } catch (error) {
      error.status = 400;
      next(error);
    }
  }

  async updateLibro(req, res, next) {
    try {
      const libro = await Libro.findByPk(req.params.id);
      if (!libro) {
        const err = new Error("Libro no encontrado");
        err.status = 404;
        throw err;
      }

      const libroActualizado = await libro.update(req.body);
      res.json(libroActualizado);
    } catch (error) {
      error.status = error.status || 400;
      next(error);
    }
  }

  async deleteLibro(req, res, next) {
    try {
      const libro = await Libro.findByPk(req.params.id);
      if (!libro) {
        const err = new Error("Libro no encontrado");
        err.status = 404;
        throw err;
      }
      await libro.destroy();
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}

export default new LibroController();
