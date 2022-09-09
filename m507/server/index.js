const http = require("http")

// npm install express
const express = require("express")

const apiEvidencias = require("./api/evidencias")
const apiEvidenciasNueva = require("./api/evidencias/nueva")

// Middleware (intermediario que resuelve las peticiones)
const app = express()

app.use(express.static("public"))
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