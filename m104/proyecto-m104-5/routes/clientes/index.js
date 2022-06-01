// middleware: /clientes
module.exports = (request, response) => {
    response.writeHead(200, "ok", [["content-type", "text/html"]])
    response.write(`
        <h1>Lista de clientes</h1>
        <ol>
            <li>Ana Ming</li>
            <li>Pepe el Toro</li>
            <li>Paco Navajas</li>
            <li>Alfredo Adame</li>
        </ol>
    `)
    response.end()
}