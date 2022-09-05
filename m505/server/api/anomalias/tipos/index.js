const TipoAnomaliaService = require("../../../services/db/tipo_anomalia")

const express = require("express")

const router = express.Router()

router.get("/api/anomalias/tipos", async (request, response) => {
    const tipos = await TipoAnomaliaService.todos()
    response.json(tipos)
})

module.exports = router