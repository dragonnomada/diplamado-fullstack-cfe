const { Router } = require("express")

const { crearEvicencia, generarEvidenciaPrueba } = require("../../../services/evidencias/test")

const router = Router()

module.exports = router

// Configurar

router.put("/api/evidencias/nueva", async (request, response) => {

    console.log(request.body)

    const [anomalia, estado, archivo, comentario] = await generarEvidenciaPrueba()

    archivo.url = request.body.imagen || "xx"

    await crearEvicencia(anomalia, estado, archivo, comentario)

    response.json({
        ok: 1
    })

})