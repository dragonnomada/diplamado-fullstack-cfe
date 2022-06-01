const http = require("http") // requerir/importar el módulo http

/**
 * Existen diversos tipos de funciones que pueden funcionar como el callback
 * 
 * 1. function handler(request, response) { ... }
 * 2. function (request, response) { ... }
 * 3. (request, reponse) => { ... }
 * 
 */

function handler(request, response) {
    switch(request.url) {
        case "/clientes":
            response.writeHead(200, "ok", [["content-type", "text/plain"]])
            response.write("CLIENTES: ...")
            response.end()
            break
        case "/productos":
            response.writeHead(200, "ok", [["content-type", "text/plain"]])
            response.write("PRODUCTOS: ...")
            response.end()
            break
        default:
            response.writeHead(403, "nop", [["content-type", "text/plain"]])
            response.write("ACCESO NO AUTORIZADO")
            response.end()
            break
    }
}

const server = http.createServer(handler)

function onServerStarted() {
    console.log("Servidor iniciado en http://localhost:5000/")
    console.log("Presiona [CTRL+C] para detener")
    console.log("/clientes")
    console.log("/productos")
}

server.listen(5000, onServerStarted)

