const http = require("http")

// npm install express
const express = require("express")
// npm install cors
const cors = require("cors")

const apiEvidencias = require("./api/evidencias")
const apiEvidenciasNueva = require("./api/evidencias/nueva")

// Middleware (intermediario que resuelve las peticiones)
const app = express()

app.use(express.static("public"))
app.use(cors())
app.use(express.json({ limit: "10mb" }))

app.use(apiEvidencias)
app.use(apiEvidenciasNueva)

// Delegado (callback)
app.get("/", (request, response) => {
    response.send("Hola mundo")
})

const server = http.createServer(app)

server.listen(5000, () => {
    console.log("Servidor iniciado en http://localhost:5000/")
})