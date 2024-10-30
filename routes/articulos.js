const express = require("express");
const {
  insertarArt,
  updateArt,
  deleteArt,
  getArt,
} = require("../controllers/articulos");
const {
  validatorInsert,
  validatorGetArticulo,
  validatorGet,
} = require("../validators/articulo");

const router = express.Router();

router.get("/mostrar", validatorGet, getArt);

/**
 * Obtener la lista de artículos
 * @openapi
 * /articulos/mostrar:
 *   get:
 *     tags:
 *       - articulos
 *     summary: "Obtener todos los artículos"
 *     description: "Esta ruta permite obtener una lista de todos los artículos disponibles"
 *     parameters:
 *       - in: query
 *         name: nombre
 *
 *         schema:
 *           type: string
 *         description: "Filtrar artículos por coincidencia en el nombre"
 *       - in: query
 *         name: estado
 *
 *         schema:
 *           type: boolean
 *         description: "Filtrar artículos activos/inactivos"
 *     responses:
 *       '200':
 *         description: "Lista de artículos obtenida correctamente"
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/articulos"
 *       '403':
 *         description: "Error de validación en los filtros de búsqueda"
 *       '404':
 *         description: "No se encontraron artículos"
 */

router.post("/insertar", validatorInsert, insertarArt);

/**
 * Insertar un nuevo artículo
 * @openapi
 * /articulos/insertar:
 *   post:
 *     tags:
 *       - articulos
 *     summary: "Insertar un nuevo artículo"
 *     description: "Esta ruta permite insertar un nuevo artículo en el sistema"
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/articulos"
 *     responses:
 *       '201':
 *         description: "Artículo insertado correctamente"
 *       '400':
 *         description: "Error de validación en los datos del artículo"
 */

router.put("/:id", validatorGetArticulo, validatorInsert, updateArt);

/**
 * Actualizar un artículo existente
 * @openapi
 * /articulos/{id}:
 *   put:
 *     tags:
 *       - articulos
 *     summary: "Actualizar un artículo existente"
 *     description: "Esta ruta permite actualizar los datos de un artículo existente"
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: "ID del artículo a actualizar"
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/articulos"
 *     responses:
 *       '200':
 *         description: "Artículo actualizado correctamente"
 *       '400':
 *         description: "Error de validación en los datos del artículo"
 *       '404':
 *         description: "Artículo no encontrado"
 */

router.put("/delete/:id", validatorGetArticulo, deleteArt);

/**
 * Desactivar un artículo en lugar de eliminarlo
 * @openapi
 * /articulos/delete/{id}:
 *   put:
 *     tags:
 *       - articulos
 *     summary: "Desactivar un artículo"
 *     description: "Esta ruta permite desactivar un artículo en lugar de eliminarlo"
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: "ID del artículo a desactivar"
 *     responses:
 *       '200':
 *         description: "Artículo desactivado correctamente"
 *       '404':
 *         description: "Artículo no encontrado"
 */
module.exports = router;
