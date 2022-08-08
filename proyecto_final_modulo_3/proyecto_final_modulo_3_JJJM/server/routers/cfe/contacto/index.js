const express = require("express")

const router = express.Router()

router.post("/", (request, response) => {
    const usuario = request.body.usuario
    const correo = request.body.correo
    const celular = request.body.celular


    console.log(`Recibido: ${usuario} | ${correo} | ${celular} `)
    response.redirect("/contact.html#ok")
})

module.exports = router