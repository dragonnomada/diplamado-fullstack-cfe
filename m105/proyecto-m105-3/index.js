const http = require("http")
const express = require("express")

const app = express()

app.use(express.json()) // Mejora el contralador para soportar json

// GET - Método HTTP común que se utiliza para consultar cosas
//       y es el consumido por un navegador web por defecto
app.get("/hello", (request, response) => {
    response.send("Hola mundo con GET") // response.writeHead(...) response.write(...) response.end()
})

// POST - Método HTTP conocido por enviar datos adjuntos a la url, es decir,
//        En una petición del cliente hacía la url se pueden mandar datos ocultos:
//        www-form-urlencoded (formulario web)
//        json, binary, file, ...
app.post("/hello", (request, response) => {
    response.send("Hola mundo con POST")
})

// PUT -> CREAR
// POST -> ACTUALIZAR / CONSULTAS AVANZADAS
// DELETE -> ELIMINAR

app.put("/hello", (request, response) => {
    const datos = request.body
    console.log(request.body)
    response.send(`El costo más iva es ${datos.costo * 1.16}`)
})

const server = http.createServer(app)

server.listen(8080, () => {
    console.log(`Servidor iniciado en http://localhost:8080`)
})