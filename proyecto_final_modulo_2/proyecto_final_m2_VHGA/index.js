require("dotenv").config()

const http = require("http")
const express = require("express")

const dbService = require("./services/db")

const recibosRouter = require("./routers/cfe/recibos")
const contactoRouter = require("./routers/cfe/contacto")

async function main() {
    /* Deshabilitamos la base de datos
    console.log("Estableciendo la Conexion a la Base de Datos")
    await dbService.connect()
    console.log("Se establecio la Conexion a la Base de Datos")
    */
    const app = express()

    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))

    //TODO: Rutas
    app.use("/", express.static("public"))

    app.use("/api/cfe/recibos", recibosRouter)
    app.use("/api/cfe/contacto", contactoRouter)

    const server = http.createServer(app)

    server.listen(5000)
    console.log("Servidor Inicializado en http://localhost:5000")

} // Estabiliza el codigo ya que no tenemos ningun CALLBACK

main().catch(error => {
    console.log(`Error :: ${error}`)
})