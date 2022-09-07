const TipoAnomaliaService = require("../../../../services/db/tipo_anomalia")

const express = require("express")

const router = express.Router()

router.put("/api/anomalias/tipos/nuevo", async (request, response) => {
    const { descripcion } = request.body
    const idTipoAnomalia = await TipoAnomaliaService.nuevo(descripcion, "SIN CÓDIGO")
    response.json(idTipoAnomalia)
})

module.exports = router