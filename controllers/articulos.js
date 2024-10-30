const { handleHttpError } = require("../utils/handleError");
const { matchedData } = require("express-validator");
const Articulos = require("../models/articulo"); // Asegúrate de que la ruta sea correcta
const { sequelize } = require("../config/mysql");
/**
 * Mostrar los artículos
 */

const getArt = async (req, res) => {
  try {
    const { nombre, estado} = matchedData(req);

    const nombreParam = nombre || '';
    const estadoParam = estado  === true ? 1 : 0;

    const [articulos] = await sequelize.query(
      'CALL dev_art.filtrar_articulos(:nombreParam, :estadoParam)',
      /*
      CREATE DEFINER=`root`@`localhost` PROCEDURE `filtrar_articulos`(
    IN nombre_param VARCHAR(255),
    IN estado_param boolean
                )
      BEGIN
    SELECT * FROM Articulos
    WHERE (nombre LIKE CONCAT('%', nombre_param, '%') OR nombre_param IS NULL OR nombre_param = '')
    OR (estado = estado_param OR estado_param IS NULL);
      END
      */
      {
        replacements: { nombreParam, estadoParam },
        type: sequelize.QueryTypes.RAW,
      }
    );
    console.log("articulos: ",articulos)


    if (articulos  === undefined) {
      return res.status(404).send({
        message: 'No se encontraron artículos con los filtros especificados',
      });
    }

    return res.status(200).send({ data: articulos });
  } catch (e) {
    console.error(e);
    handleHttpError(res, 'ERROR_GET_FILTERED_ARTICULOS');
  }
};

/**
 * Insertar los artículos
 */
const insertarArt = async (req, res) => {
  try {
    const articleData = matchedData(req); // Obtén los datos validados
    const newArticle = await Articulos.create(articleData); // Crea un nuevo artículo
    res.status(201).send({ newArticle });
  } catch (e) {
    console.log(e);
    handleHttpError(res, "ERROR_INSERT_ARTICULOS");
  }
};

/**
 * Actualizar los artículos
 */

const updateArt = async (req, res) => {
  try {
    // Obtener el id y los datos del cuerpo de la solicitud
    const { id, ...body } = matchedData(req);

    // Buscar el artículo por ID y actualizar
    const [updated] = await Articulos.update(body, {
      where: { id },
    });

    // Comprobar si se actualizó algún registro
    if (!updated) {
      return res.status(404).send({ message: "Artículo no encontrado" });
    }

    // Obtener y devolver el artículo actualizado
    const updatedArticle = await Articulos.findByPk(id);
    return res.status(200).send({ data: updatedArticle });
  } catch (e) {
    console.error(e);
    handleHttpError(res, "ERROR_UPDATE_ARTICULOS");
  }
};

/**
 * Eliminar los artículos
 */

const deleteArt = async (req, res) => {
  try {
    const { id } = matchedData(req);

    // Actualizar el estado del artículo a `false` en lugar de eliminarlo
    const [updated] = await Articulos.update(
      { estado: false },
      {
        where: { id },
      }
    );

    // Verificar si se actualizó algún registro
    if (!updated) {
      return res.status(404).send({ message: "Artículo no encontrado" });
    }

    // Enviar una respuesta indicando que el artículo ha sido desactivado
    return res
      .status(200)
      .send({ message: "Artículo desactivado exitosamente" });
  } catch (e) {
    console.error(e);
    handleHttpError(res, "ERROR_DELETE_ARTICULO");
  }
};

module.exports = { insertarArt, updateArt, deleteArt, getArt };
