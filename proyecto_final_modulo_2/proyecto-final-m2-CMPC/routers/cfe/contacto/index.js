const express = require("express")

const router = express.Router()

router.post("/", (request, response) => {
    const nombre = request.body.nombre
    const correo = request.body.correo
    const mensaje = request.body.mensaje
		// TODO: Recibir los demás campos del formulario de contacto

    console.log(`Recibido: ${nombre} | ${correo} | ${mensaje}`)

    response.redirect("/contact.html#ok")
})

module.exports = router