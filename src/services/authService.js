import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config.js";
import { Usuario } from "../models/index.js";

export async function loginUsuario(email, password) {
  if (!email || !password) {
    const err = new Error("Credenciales invalidas");
    err.status = 401;
    throw err;
  }

  const usuario = await Usuario.findOne({ where: { email } });

  if (!usuario) {
    const err = new Error("Credenciales invalidas");
    err.status = 401;
    throw err;
  }

  const passwordValida = await bcrypt.compare(password, usuario.password);

  if (!passwordValida) {
    const err = new Error("Credenciales invalidas");
    err.status = 401;
    throw err;
  }

  const payload = {
    id: usuario.id,
    email: usuario.email,
    rol: usuario.rol,
  };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });

  return {
    token,
    usuario: {
      id: usuario.id,
      nombre: usuario.nombre,
      email: usuario.email,
      rol: usuario.rol,
    },
  };
}
