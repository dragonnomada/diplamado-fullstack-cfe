const UsuarioService = require("../../../services/db/usuarios")
const SesionService = require("../../../services/db/sesiones")

const express = require("express")

const router = express.Router()

router.post("/auth/login", async (request, response) => {
    const { correo, contraseña } = request.body

    if (!correo) {
        response.status(401).json({
            error: true,
            message: `Correo no válido: ${correo || "SIN CORREO"}`,
            correo: correo,
            token: null
        })
        return
    }

    if (!contraseña) {
        response.status(401).json({
            error: true,
            message: `Contraseña no válida para el correo: ${correo || "SIN CORREO"}`,
            correo: correo,
            token: null
        })
        return
    }

    const usuario = await UsuarioService.buscarPorCorreo(correo)

    if (usuario === null) {
        response.status(401).json({
            error: true,
            message: `No existe el usuario con este correo: ${correo || "SIN CORREO"}`,
            correo: correo,
            token: null
        })
        return
    }

    const contraseñaValida = await UsuarioService.validarContraseña(usuario.id_usuario, contraseña)

    if (!contraseñaValida) {
        response.status(401).json({
            error: true,
            message: `La contraseña no es válida para el usuario con correo: ${correo || "SIN CORREO"}`,
            correo: correo,
            token: null
        })
        return
    }

    // El correo y la contraseña son válidas

    const token = await SesionService.generarToken()

    const id_sesion = await SesionService.nueva(usuario.id_usuario, token, "NO DATA", "NO DATA")

    const sesionIniciada = await SesionService.iniciar(id_sesion)

    if (!sesionIniciada) {
        response.status(401).json({
            error: true,
            message: `No pudo iniciar sesión para el usuario con correo: ${correo || "SIN CORREO"}`,
            correo: correo,
            token: null
        })
        return
    }

    response.status(200).json({
        error: false,
        message: null,
        correo: correo,
        token: token
    })
})

module.exports = router