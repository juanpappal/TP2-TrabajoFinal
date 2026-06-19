import bcrypt from "bcrypt";
import { Usuario } from "../models/index.js";

export async function getUsuarios() {
  return Usuario.findAll();
}

export async function getUsuarioById(id) {
  return Usuario.findByPk(id);
}

export async function createUsuario(data) {
  const passwordHasheada = await bcrypt.hash(data.password, 10);
  return Usuario.create({ ...data, password: passwordHasheada });
}

export async function updateUsuario(id, data) {
  const usuario = await Usuario.findByPk(id);
  if (!usuario) {
    const err = new Error("Usuario no encontrado");
    err.status = 404;
    throw err;
  }
  return usuario.update(data);
}

export async function deleteUsuario(id) {
  const usuario = await Usuario.findByPk(id);
  if (!usuario) {
    const err = new Error("Usuario no encontrado");
    err.status = 404;
    throw err;
  }
  await usuario.destroy();
}
