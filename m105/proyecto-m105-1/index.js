const http = require("http")
// Módulo no-nativo ExpressJS
// > npm install express --save
const express = require("express")

const app = express() // Controlador principal de express: super middleware

// CONFIGURAR EL APP

// Configurar una ruta tipo GET /clientes
app.get("/clientes", (request, response) => {
    response.send(`
        <h1>Lista de Clientes</h1>
        <ol>
            <li>Ana Ming</li>
            <li>Pepe el Toro</li>
            <li>Paco Navajas</li>
            <li>Alfredo Adame</li>
        </ol>
    `) // writeHead + write + end
})

// Configurar una ruta tipo GET /productos
app.get("/productos", (request, response) => {
    response.send([
        {
            id: 1,
            name: "Coca Cola",
            price: 18.5
        },
        {
            id: 2,
            name: "Gansito",
            price: 10.5
        },
        {
            id: 3,
            name: "Galletas Marías",
            price: 22.99
        },
    ]) // writeHead + write + end
})

const server = http.createServer(app)

server.listen(5000, () => {
    console.log("Servidor iniciado en http://localhost:5000/")
})