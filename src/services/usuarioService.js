import bcrypt from "bcrypt";
import { Usuario } from "../models/index.js";

function sinPassword(usuario) {
  if (!usuario) return usuario;
  const data = usuario.toJSON();
  delete data.password;
  return data;
}

export async function getUsuarios() {
  const usuarios = await Usuario.findAll();
  return usuarios.map(sinPassword);
}

export async function getUsuarioById(id) {
  const usuario = await Usuario.findByPk(id);
  return sinPassword(usuario);
}

export async function createUsuario(data) {
  const passwordHasheada = await bcrypt.hash(data.password, 10);
  const usuario = await Usuario.create({
    ...data,
    password: passwordHasheada,
    rol: "usuario",
  });
  return sinPassword(usuario);
}

export async function updateUsuario(id, data) {
  const usuario = await Usuario.findByPk(id);
  if (!usuario) {
    const err = new Error("Usuario no encontrado");
    err.status = 404;
    throw err;
  }

  const datosActualizados = { ...data };
  delete datosActualizados.rol;

  if (datosActualizados.password) {
    datosActualizados.password = await bcrypt.hash(datosActualizados.password, 10);
  }

  const usuarioActualizado = await usuario.update(datosActualizados);
  return sinPassword(usuarioActualizado);
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
