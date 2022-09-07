const AnomaliaService = require("../../../services/db/anomalias")
const UbicacionService = require("../../../services/db/ubicaciones")
const QrService = require("../../../services/db/qr")

const express = require("express")
var QRCode = require('qrcode')

const router = express.Router()

router.post("/api/anomalias/:codigo/publicar", async (request, response) => {
    const { codigo, id_tipo_anomalia, descripcion, id_usuario, latitud, longitud } = request.body

    const id_ubicacion = await UbicacionService.nuevo(id_usuario, latitud, longitud, "SIN UUID", "SIN INFO")

    QRCode.toDataURL(codigo, async (error, url) => {
        if (error) {
            response.status(500).send(`${error}`)
            return
        }

        console.log(url)
        
        const id_qr = await QrService.nuevo(id_ubicacion, codigo, url)
    
        const anomaliaId = await AnomaliaService.nueva(id_usuario, id_ubicacion, id_tipo_anomalia, id_qr)
    
        const anomalia = await AnomaliaService.porId(anomaliaId)

        response.status(200).json(anomalia)
    })

})

module.exports = router