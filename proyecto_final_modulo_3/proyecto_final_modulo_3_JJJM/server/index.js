//require("dotenv").config()

const http = require("http")
const express = require("express")
const cors = require("cors")

const cfeContactoRouter = require("./routers/cfe/contacto")
const cfeRecibosRouter = require("./routers/cfe/recibos")
const cfeProductosRouter = require("./routers/cfe/productos")


async function main() {

    //console.log("Estableciendo conexión a la base de datos...")
    //await dbService.connect()
   // console.log("Se ha establecido la conexión a la base de datos")

    const app = express()
    app.use(cors())
		app.use(express.json())
    app.use(express.urlencoded({ extended: false }))

    // TODO: RUTAS
    app.use("/",express.static("public"))
    app.use("/api/cfe/contacto", cfeContactoRouter)
    app.use("/api/cfe/recibos", cfeRecibosRouter)
    app.use("/api/cfe/productos", cfeProductosRouter)

    const server = http.createServer(app)

    console.log("Servidor iniciado un servidor en http://localhost:5000/")

    server.listen(5000)

}

main().catch(error => {
    console.log(`${error}`)
})