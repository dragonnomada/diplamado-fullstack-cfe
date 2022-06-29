const express = require("express")

const router = express.Router()

router.post("/", (request, response) => {
    const nombre = request.body.nombre
    const correo = request.body.correo
    const mensaje = request.body.mensaje

    console.log(`
        Mensaje de contacto recibido:
        Nombre: ${nombre}
        Correo: ${correo}
        Mensaje: ${mensaje}
    `)

    response.redirect("/contact.html#ok")

})

module.exports = router