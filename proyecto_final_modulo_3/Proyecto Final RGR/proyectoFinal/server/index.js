// index.js

require("dotenv").config()

const http = require("http")
const express = require("express")
const cors = require("cors")

const cfeProductosRouter = require("./routers/cfe/productos")

// ...

async function main() {   
    const app = express()

    app.use(express.json());
    app.use(cors());


    // TODO: RUTAS
    app.use("/api/cfe/productos", cfeProductosRouter)

    const server = http.createServer(app)

    console.log("Servidor iniciado un servidor en http://localhost:5000/")

    server.listen(5000)

}

main().catch(error => {
    console.log(`${error}`)
})