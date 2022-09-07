const AnomaliaService = require("../../services/db/anomalias")
const UsuarioService = require("../../services/db/usuarios")
const UbicacionService = require("../../services/db/ubicaciones")

const express = require("express")

const router = express.Router()

router.get("/api/anomalias", async (request, response) => {
    const todas = await AnomaliaService.todas()

    const anomalias = []

    for (let anomalia of todas) {
        const usuario = await UsuarioService.info(anomalia.id_usuario)
        const ubicacion = await UbicacionService.info(anomalia.id_ubicacion)
        anomalias.push({
            id_anomalia: anomalia.id_anomalia,
            usuario,
            ubicacion,
            publicado: anomalia.publicado,
            creado: anomalia.creado
        })        
    }

    response.send(anomalias)
})

module.exports = router