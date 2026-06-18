import {
  getLibros,
  getLibroById,
  createLibro,
  updateLibro,
  deleteLibro,
} from "../services/libroService.js";

class LibroController {
  async getLibros(req, res, next) {
    try {
      const libros = await getLibros();
      res.json(libros);
    } catch (error) {
      next(error);
    }
  }

  async getLibroById(req, res, next) {
    try {
      const libro = await getLibroById(req.params.id);
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
      const libro = await createLibro(req.body);
      res.status(201).json(libro);
    } catch (error) {
      error.status = 400;
      next(error);
    }
  }

  async updateLibro(req, res, next) {
    try {
      const libroActualizado = await updateLibro(req.params.id, req.body);
      res.json(libroActualizado);
    } catch (error) {
      error.status = error.status || 400;
      next(error);
    }
  }

  async deleteLibro(req, res, next) {
    try {
      await deleteLibro(req.params.id);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}

export default new LibroController();
