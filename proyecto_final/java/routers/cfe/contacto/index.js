const express = require("express")

const router = express.Router()

router.post("/", async (request, response) => {
    const usuario = request.body.usuario
    const correo = request.body.correo
    const mensaje = request.body.mensaje

    console.log(`Recibido: ${usuario} | ${correo} \n ${mensaje}`)

    response.redirect("/contact.html#ok")
})

module.exports = router