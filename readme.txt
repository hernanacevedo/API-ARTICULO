Los Puntos 1-4  se encuentra en la carpeta "puntos_algoritmos", para ejecutar necesitamos posicionarnos a esa carpeta y ejecutar node nombre_archivo.js
El punto 5 se encuentra en la carpeta "punto 5 sql", se encuentra script de estructura_y_datos y en el otro archivo las diferentes query que se solicitaron.

El resto de la carpeta son para el punto 6
Se utilizo nodejs con javascript ,express,ORM sequelize para mapear las tablas y realizar consultas a la base de datos mysql, y un procedimiento almacenado( estos dos ultimos se pueden encontrar en la carpetar helper BD) 

En .env_example se encuentran las variables de entorno a configurar, se debe crear un archivo .env con todas esas variables
ejemplo:
NODE_ENV=development
PORT=3000
MYSQL_DATABASE= dev_art
MYSQL_USER= root
MYSQL_PASSWORD=
MYSQL_HOST= db
ENGINE_DB=mySql

Se deben instalar todas las dependencias
npm i install
Correr la aplicación
npm run dev

si se requiere utilizar docker

docker-compose down
docker-compose up --build
docker-compose logs api
docker-compose logs db


Documentacion de API con swagger

http://localhost:3000/docs/

Ejemplos de Pruebas de endpoint en postman 

Get articulos
    GET   http://localhost:3000/api/articulos/mostrar
body - raw - json
{
  "nombre": "string",
  "estado": true

}
Delete articulos
    PUT   http://localhost:3000/api/articulos/delete/1

Update articulos
    PUT   http://localhost:3000/api/articulos/1

body - raw - json
    {
  "nombre": "auto456",
  "marca": "mercedesb fdhfghbnewrfdg"
}

Insertar articulos
    POST  http://localhost:3000/api/articulos/insertar
body - raw - json
    {
  "nombre": "auto",
  "marca": "mercedes ben"
}
  