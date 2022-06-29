const express = require("express")

const router = express.Router()

router.post("/", (request, response) => {

    const nombre = request.body.nombre
    const usuario = request.body.usuario
    const correo = request.body.correo
    const mensaje = request.body.mensaje

    console.log(`Recibido: ${usuario} | ${nombre} | ${mensaje}|  ${correo} `)

    response.redirect("/contact.html#ok")
})

module.exports = router