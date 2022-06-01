const http = require("http")

const server = http.createServer((request, response) => {
    console.log(this) // n_n!

    switch(request.url) {
        case "/clientes":
            response.writeHead(200, "oki", [["content-type", "text/plain"]])
            response.write("LISTA DE CLIENTE: ....")
            response.end()
            break
        case "/productos":
            response.writeHead(200, "oki", [["content-type", "text/plain"]])
            response.write("LISTA DE PRODUCTOS: ....")
            response.end()
            break
        default:
            response.writeHead(400, "ups", [["content-type", "text/plain"]])
            response.write("No encuentro esa ruta")
            response.end()
            break
    }
})

server.listen(5000, () => {
    console.log("Servidor iniciado en http://localhost:5000")
})