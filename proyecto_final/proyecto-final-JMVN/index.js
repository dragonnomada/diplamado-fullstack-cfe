// index.js
//JMVN

require("dotenv").config()

const http = require("http")
const express = require("express")

//const dbService = require("./services/db")

const cfeRecibosRouter = require("./routers/cfe/recibos")
const cfeContactoRouter = require("./routers/cfe/contacto")

async function main() {

    //console.log("Estableciendo conexión a la base de datos...")
    //await dbService.connect()
    //console.log("Se ha establecido la conexión a la base de datos")

    const app = express()
		app.use(express.json())
    app.use(express.urlencoded({ extended: true }));

    // TODO: RUTAS
    app.use("/", express.static("public"))
    app.use("/api/cfe/recibos", cfeRecibosRouter)
    app.use("/api/cfe/contacto", cfeContactoRouter)
    const server = http.createServer(app)

    console.log("Servidor iniciado un servidor en http://localhost:5000/")

    server.listen(5000)

}

main().catch(error => {
    console.log(`${error}`)
})