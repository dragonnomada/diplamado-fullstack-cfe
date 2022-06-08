const express = require("express")

const iniciarSesionService = require("../../services/iniciar-sesion")

const router = express.Router()

// POST /auth/iniciar-sesion/correo
router.post("/iniciar-sesion/correo", async (request, response) => {
    const correo = request.body.correo || "undefined@mail.com"
    const contraseña = request.body.contraseña || "**********"

    const usuario = await iniciarSesionService.iniciarSesionCorreoContraseña(correo, contraseña)

    if (usuario === null) {
        response.status(401).send("Error al iniciar sesión")
    } else {
        response.status(200).json(usuario)
    }
})

module.exports = router