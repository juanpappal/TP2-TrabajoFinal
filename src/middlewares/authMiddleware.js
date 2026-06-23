import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config.js";

export function authMiddleware(req, res, next) {
  const authorization = req.headers.authorization;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Token no enviado" });
  }

  const token = authorization.split(" ")[1];

  try {
    req.usuario = jwt.verify(token, JWT_SECRET);
    next();
  } catch (error) {
    return res.status(401).json({ error: "Token invalido" });
  }
}
