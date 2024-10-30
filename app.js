const express = require("express");
require("dotenv").config();
const { dbConnectMySql } = require("./config/mysql");
const swaggerUI = require("swagger-ui-express");
const openApiConfigration = require("./docs/swagger");

const cors = require("cors");

const app = express();

// Middleware para parsear JSON
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

// documentación Api
app.use("/docs", swaggerUI.serve, swaggerUI.setup(openApiConfigration));

// invocación de rutas
app.use("/api", require("./routes"));

// Inicia el servidor

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

dbConnectMySql();

module.exports = app;
