const { Router } = require("express")

const { obtenerEvidencias } = require("../../services/evidencias/test")

const router = Router()

module.exports = router

// Configurar

router.get("/api/evidencias", async (request, response) => {

    const evidencias = await obtenerEvidencias()

    response.json(evidencias)

})