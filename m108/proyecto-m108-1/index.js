require("dotenv").config()

const http = require("http")
const express = require("express")

const dbService = require("./services/db")
const iniciarSesionService = require("./services/iniciar-sesion")

const pruebasRouter = require("./routes/pruebas")
const iniciarSesionRouter = require("./routes/iniciar-sesion")

async function main() {

    console.log("Estableciendo conexión a la base de datos...")

    await dbService.connect()

    console.log("Se ha establecido la conexión a la base de datos")

    const app = express()

    app.use(express.json())

    // TODO: RUTAS
    app.use("/pruebas", pruebasRouter)
    app.use("/auth", iniciarSesionRouter)
    app.use("/api", async (request, response, next) => {
        const nombre = request.query.usuario
        const token = request.query.token

        const usuario = await iniciarSesionService.iniciarSesionNombreToken(nombre, token)

        if (usuario === null) {
            response.status(401).send("El usuario o token no son válidos (quizás el token expiró)")
        } else {
            request.usuario = usuario
            next()
        }
    })
    // TODO: Registras las demás APIs

    const server = http.createServer(app)

    console.log("Servidor iniciado un servidor en http://localhost:5000/")

    server.listen(5000)

}

main().catch(error => {
    console.log(`${error}`)
})