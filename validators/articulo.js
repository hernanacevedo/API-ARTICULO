const { check } = require("express-validator");
const validateResults = require("../utils/handleValidators");

const validatorInsert = [
  check("nombre").exists().notEmpty().isLength({ min: 3, max: 99 }),
  check("marca").exists().notEmpty().isLength({ min: 3, max: 99 }),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

const validatorGet = [
  check("nombre").exists().isString().isLength({ min: 3, max: 99 }),
  check("estado").exists().isBoolean(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

const validatorGetArticulo = [
  check("id").exists().withMessage("El ID es requerido"),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

module.exports = { validatorInsert, validatorGetArticulo, validatorGet };
