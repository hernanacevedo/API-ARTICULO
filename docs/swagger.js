const swaggerJsdoc = require("swagger-jsdoc");

/**
 * API Config Info
 */
const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "DOCUMENTACION DE API CRUD ARTICULOS",
    version: "1.0.1",
    description: "API para gestionar el CRUD de artículos, incluyendo nombre, fecha de modificación, marca y estado de actividad.",
  },
  servers: [
    {
      url: "http://localhost:3000/api", // Ajusta si tu URL base es diferente
    },
  ],
  components: {
    schemas: {
      articulos: {
        type: "object",
        required: ["nombre", "fecha_mod", "marca", "estado"],
        properties: {
          nombre: {
            type: "string",
            description: "Nombre del artículo",
          },
          fecha_mod: {
            type: "string",
            format: "date", // Ajuste correcto para fecha
            description: "Fecha de última modificación",
          },
          marca: {
            type: "string",
            description: "Marca del artículo",
          },
          estado: {
            type: "boolean",
            description: "Estado del artículo (activo o inactivo)",
          },
        },
      },
    },
  },
};

/**
 * Opciones
 */
const options = {
  swaggerDefinition,
  apis: ["./routes/*.js"], // Rutas donde se documentan los endpoints
};

const openApiConfigration = swaggerJsdoc(options);

module.exports = openApiConfigration;