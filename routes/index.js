const express = require("express");
const fs = require("fs")
const router = express.Router();

const PATH_ROUTES = __dirname;

const removeExtension = (fileName) => {

    return fileName.split('.').shift()
}

fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = removeExtension(file)
    if(name !== 'index'){
        console.log(`Cargando ruta ${name}`)
        try {
            router.use(`/${name}`,require(`./${file}`)) 
        }
        catch(e){
            console.log("ocurrio un error:",e)
        } 
    }
})

module.exports = router