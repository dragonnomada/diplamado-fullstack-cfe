const express = require("express")

const router = express.Router()

router.post("/", (request, response) => {
    const usuario = request.body.usuario
    const correo = request.body.correo
    const mensaje = request.body.mensaje

    console.log(`Recibido: ${usuario} | ${correo} | ${mensaje}`)

    response.redirect("/contact.html#ok")
})

module.exports = router