require("dotenv").config()

const http = require("http")
const express = require("express")

//const dbService = require("./services/db")

const cfeContactoRouter = require("./routes/cfe/contacto")
const cfeRecibosRouter = require("./routes/cfe/recibos")

async function main() {

    console.log("Estableciendo conexion a la base de datos...")

    //await dbService.connect()

    console.log("Se ha establecido la conexion a la base de datos")
    
    const app = express()
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    
    app.use("/", express.static("public"))
    app.use("/api/cfe/contacto", cfeContactoRouter)
    app.use("/api/cfe/recibos", cfeRecibosRouter)

    const server = http.createServer(app)

    console.log("Servidor iniciado en el puerto 5000")

    server.listen(5000)

}

main().catch(error => {
    console.log(`Error: ${error}`)
})