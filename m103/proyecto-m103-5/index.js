const http = require('http')

const server = http.createServer((request, response) => {
	response.writeHead(200, 'text/plain')
	response.end('Hola mundo soy un servidor y estoy a tus ordenes')
})

server.listen(4000)