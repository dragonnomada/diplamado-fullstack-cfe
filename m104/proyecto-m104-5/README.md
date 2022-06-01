# Documentación del Servidor

## Proceso para agregar una ruta

> Paso 1 - Crear una carpeta dentro `./routes/`

> Paso 2 - Crear un index.js que exporte el middleware

```js
// routes/<entity>/index.js
module.exports = (request, response) => {
    // TODO: Responder la petición del server
}
```

> Paso 3 - Cargar el módulo (middleware) en `./index.js`

```js
const http = require("http")

...

const entityRoute = require("./routes/<entity>")

...
```

> Paso 4 - Controlar la ruta del servidor en `./index.js`

```js
const http = require("http")

...

const entityRoute = require("./routes/<entity>")

...

    swtich (request.url) {
        ...
        case "/<entity>":
            try {
                entityRoute(request, response)
            } catch(error) {
                // TODO: Maneja el error y response al usuario
                response.end("ERROR!!!!")
            }
        ...
    }
```