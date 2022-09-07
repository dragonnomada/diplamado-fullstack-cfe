const AnomaliaService = require("../../../services/db/anomalias")
const UsuarioService = require("../../../services/db/usuarios")
const UbicacionService = require("../../../services/db/ubicaciones")
const QRService = require("../../../services/db/qr")

const express = require("express")

const router = express.Router()

router.get("/api/anomalias/:id", async (request, response) => {
    const { id } = request.params

    try {
        const anomalia = await AnomaliaService.porId(id)
        const usuario = await UsuarioService.info(anomalia.id_usuario)
        const ubicacion = await UbicacionService.info(anomalia.id_ubicacion)
        const qr = await QRService.imagen(anomalia.id_qr)

        anomalia.usuario = usuario
        anomalia.ubicacion = ubicacion
        anomalia.qr = qr

        response.status(200).json(anomalia)
    } catch (error) {
        response.status(500).send(`${error}`)
    }
})

module.exports = router