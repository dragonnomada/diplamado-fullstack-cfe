const http = require("http")
const express = require("express")

const clientesRouter = require("./routes/clientes")
const productosRouter = require("./routes/productos")

const app = express()

app.use("/clientes", clientesRouter)
app.use("/productos", productosRouter)

const server = http.createServer(app)

server.listen(5000, () => {
    console.log(`[${new Date()}] Servidor iniciado en http://localhost:5000/`)
})
