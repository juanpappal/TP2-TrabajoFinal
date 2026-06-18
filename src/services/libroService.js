import { Libro } from "../models/index.js";

export async function getLibros() {
  return Libro.findAll();
}

export async function getLibroById(id) {
  return Libro.findByPk(id);
}

export async function createLibro(data) {
  return Libro.create(data);
}

export async function updateLibro(id, data) {
  const libro = await Libro.findByPk(id);
  if (!libro) {
    const err = new Error("Libro no encontrado");
    err.status = 404;
    throw err;
  }
  return libro.update(data);
}

export async function deleteLibro(id) {
  const libro = await Libro.findByPk(id);
  if (!libro) {
    const err = new Error("Libro no encontrado");
    err.status = 404;
    throw err;
  }
  await libro.destroy();
}
