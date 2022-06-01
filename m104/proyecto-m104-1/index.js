// El módulo nativo http nos permite construir un servidor web
// que procese las peticiones web desde los clientes
const http = require("http")

// http.createServer(<handler>)

// Un <handler> es una función callback diseñada para
// atrapar las peticiones y brindar las respuestas
// por lo que también se le conoce como `middleware`

// <handler> ~ callback(request, request)

// `request` es un objeto que atrapa la información http
// relacionada a la petición del cliente, por ejemplo,
// si el cliente manda a llamar una url expuesta por el servidor
// esa información estará disponible en el objeto `request`
// Algunos atributos y métodos importantes son:
//  request.headers - el objeto de headers del cliente -> servidor

// `reponse` es un objeto que se comunica con el cliente
// para darle una respuesta. 
// Algunos métodos importantes son:
//  response.writeHead(<statusCode>, <statusText>, <headers>)
//  reponse.write(<string|buffer>) - escribir contenido en cliente
//  response.end() - finaliza la petición del cliente

// <headers> ~ { ... <header>: <value> ... }
// el objeto de headers del servidor -> cliente

// El `server` es un objeto capaz de escuchar un puerto de red
// sobre nuestra máquina en la ip (o el host) determinado
// server.listen(<port>, <host>, <callback>)

const server = http.createServer(function (request, response) {

    // Esta es una función anónima de tipo callback, es decir,
    // se encuentra contenida directamente como parámetro de la otra función
    // createServer(<callback ~ handler ~ middleware>)

    console.log(request.headers) // los headers del cliente
    console.log(request.url)     // la url que pide el cliente
    console.log(request.method)  // el método HTTP
    console.log(request.read())  // el buffer de datos enviados por el cliente

    response.writeHead(200, "hola, todo bien", {
        "content-type": "text/plain", // MIME-TYPE
        "content-length": "Hola mundo".length // Bytes
    }) // informamos en las cabeceras sobre los recursos
    
    response.write("Hola mundo") // escribimos los recursos

    response.end()

})

server.listen(5000, "localhost", function () {
    console.log("Servidor iniciado en http://localhost:5000")
    console.log("Presiona [CTRL+C] para detener el servidor")
})