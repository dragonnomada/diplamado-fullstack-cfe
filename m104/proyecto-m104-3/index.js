const http = require("http")

// La retrollamabilidad -> podemos observar como se controlan nuestras llamadas
// una llamada a nuestra función ocurrirá por la naturaleza del la función anterior

// retrollamada -> handler(request, response)
// La llamada ocurrirá cada que se reciba una petición
// alguien construirá un objeto request y un objeto response
// y nos los confiará para usarlos de manera responsable
// y poder cominicarnos con el cliente.

const server = http.createServer(function (request, response) {

    // this -> server !!!
    console.log(this) 
    
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

server.listen(5000, function () {
    console.log("Servidor iniciado en http://localhost:5000")
})