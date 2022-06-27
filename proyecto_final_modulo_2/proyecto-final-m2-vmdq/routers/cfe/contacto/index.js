// routes/cfe/contacto/index.js

const express = require("express")

const router = express.Router()

router.post("/", (request, response) => {
    const usuario = request.body.usuario
    const correo = request.body.correo
		// TODO: Recibir los demás campos del formulario de contacto

    console.log(`Recibido: ${usuario} | ${correo}`)

    response.redirect("/contacto.html")
})

module.exports = router

