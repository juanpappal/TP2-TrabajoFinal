const Usuario = require("./Usuario");
const Libro = require("./Libro");

Usuario.hasMany(Libro, {
  foreignKey: "usuario_id",
  as: "libros"
});

Libro.belongsTo(Usuario, {
  foreignKey: "usuario_id",
  as: "usuario"
});

module.exports = {
  Usuario,
  Libro,
};
