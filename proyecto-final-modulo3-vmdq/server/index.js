const http = require("http")
const cors = require("cors")
const express = require("express");

const cfeProductosRouter = require("./routers/cfe/productos")
const { appendFile } = require("fs")


const app = express()

app.use(cors())
app.use(express.json())
// ...
app.use("/api/cfe/products", cfeProductosRouter)

const server = http.createServer(app)
console.log("Servidor iniciado en http://localhost:3000/");
server.listen(3000)