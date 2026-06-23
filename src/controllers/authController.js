import { loginUsuario } from "../services/authService.js";

class AuthController {
  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const { token, usuario } = await loginUsuario(email, password);

      res.json({
        mensaje: "Login exitoso",
        token,
        usuario,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new AuthController();
