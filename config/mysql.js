const { Sequelize } = require("sequelize");
const database = process.env.MYSQL_DATABASE;
const username = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;


const sequelize = new Sequelize(database, username, password || '', {
    host: process.env.MYSQL_HOST || '127.0.0.1'|| 'db',
    dialect: 'mysql',
    port:  3306,
});

const dbConnectMySql = async () => {
  try {
    await sequelize.authenticate();
    console.log("MYSQL Conexión correcta");
  } catch (e) {
    console.log("MYSQL Error de Conexión", e);
  }
};


module.exports = {sequelize, dbConnectMySql}
