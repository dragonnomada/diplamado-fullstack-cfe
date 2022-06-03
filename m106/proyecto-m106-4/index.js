require("dotenv").config()

const http = require("http")
const express = require("express")

const dbService = require("./services/db")

const pruebasRouter = require("./routes/pruebas")

async function main() {

    console.log("Estableciendo conexión a la base de datos...")

    await dbService.connect()

    console.log("Se ha establecido la conexión a la base de datos")

    const app = express()

    // TODO: RUTAS
    app.use("/pruebas", pruebasRouter)

    const server = http.createServer(app)

    console.log("Servidor iniciado un servidor en http://localhost:5000/")

    server.listen(5000)

}

main().catch(error => {
    console.log(`${error}`)
})