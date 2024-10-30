const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");

// Definición del modelo Articulos
const Articulos = sequelize.define(
  "articulo",
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false, // El nombre no puede ser nulo
    },
    fecha_modificacion: {
      type: DataTypes.DATE, // Puede ser nulo por defecto
      defaultValue: DataTypes.NOW, // Se establece la fecha actual como valor predeterminado
    },
    marca: {
      type: DataTypes.STRING,
      allowNull: false, // Permitido, puede ser nulo
    },
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true, // Por defecto el estado es verdadero (activo)
    },
  },
  {
    timestamps: false,
  }
);

// Exportar el modelo para ser utilizado en otras partes de la aplicación
module.exports = Articulos;
