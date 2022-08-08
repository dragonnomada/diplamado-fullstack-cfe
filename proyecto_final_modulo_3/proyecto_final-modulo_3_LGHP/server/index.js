const http = require("http")
const express = require("express")
const cors = require("cors")

const cfeProductosRouter = require("./routers/cfe/productos")

async function main() {

    

    console.log("Se ha establecido la conexión a la base de datos")

    const app = express()

		app.use(express.json())
    app.use(cors())
    app.use(express.urlencoded({extended: true}))

    app.use("/api/cfe/productos", cfeProductosRouter)

    app.use("/", express.static("public"))

    const server = http.createServer(app)

    console.log("Servidor iniciado un servidor en http://localhost:5000/")

    server.listen(5000)

}

main().catch(error => {
    console.log(`${error}`)
})