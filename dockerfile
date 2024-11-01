FROM node:18-alpine

# Crea y establece el directorio de trabajo
WORKDIR /app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de tu aplicación
COPY . .

# Exponer el puerto en el que tu aplicación escuchará
EXPOSE 3000

# Define el comando para iniciar la aplicación
CMD ["npm", "run","dev"]