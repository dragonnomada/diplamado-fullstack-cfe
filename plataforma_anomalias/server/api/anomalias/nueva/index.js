const AnomaliaService = require("../../../services/db/anomalias")
const UsuarioService = require("../../../services/db/usuarios")
const UbicacionService = require("../../../services/db/ubicaciones")

const express = require("express")

const router = express.Router()

router.put("/api/anomalias/nueva", async (request, response) => {
    const { id_tipo_anomalia, usuario, ubicacion } = request.body

    if (!usuario) {
        return response.status(401).json({
            error: true,
            message: `El usuario no es válido`
        })
    }

    if (!ubicacion) {
        return response.status(401).json({
            error: true,
            message: `La ubicacion no es válida`
        })
    }

    const id_usuario = await UsuarioService.buscarPorCorreo()

    const anomaliaId = await AnomaliaService.nueva()
})

module.exports = router