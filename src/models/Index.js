import Usuario from "./Usuario.js";
import Libro from "./Libro.js";

Usuario.hasMany(Libro, {
  foreignKey: "usuario_id",
  as: "libros"
});

Libro.belongsTo(Usuario, {
  foreignKey: "usuario_id",
  as: "usuario"
});

export { Usuario, Libro };
