const http = require("http")

const routeClientes = require("./routes/clientes") // routes/clientes/index.js -> module.exports
const routeProductos = require("./routes/productos") // routes/productos/index.js -> module.exports
const routePedidos = require("./routes/pedidos") // routes/pedidos/index.js -> module.exports

const server = http.createServer((request, response) => {
    switch(request.url) {
        case "/clientes":
            try {
                routeClientes(request, response) // Delegamiento | (request, response) => { ... }
            } catch(error) {
                response.writeHead(500, "error en el servidor", [["content-type", "text/plain"]])
                response.write(`Error en /clientes\n${error}`)
                response.end()
            }
            break
        case "/producto":
            try {
                routeProductos(request, response)
            } catch(error) {
                response.writeHead(500, "error en el servidor", [["content-type", "text/plain"]])
                response.write(`Error en /productos\n${error}`)
                response.end()
            }
            break
        case "/pedidos":
            try {
                routePedidos(request, response)
            } catch(error) {
                response.writeHead(500, "error en el servidor", [["content-type", "text/plain"]])
                response.write(`Error en /pedidos\n${error}`)
                response.end()
            }
            break
        default:
            response.writeHead(400, "ruta no válida", [["content-type", "text/plain"]])
            response.write("La ruta no está disponible")
            response.end()
            break
    }
})

server.listen(5000, () => {
    console.log("Servidor iniciado en http://localhost:5000")
})