const evidencias = [
    {
        id_evidencia: 1,
        id_anomalia: 1,
        anomalia: {
            tipo: "INCIDENTE",
            qr: "..."
        },
        id_usuario: 1,
        usuario: {
            nombre: "Ana Ming",
            correo: "ana.ming@gmail.com"
        },
        id_ubicacion: 1,
        ubicacion: {
            latitud: 123,
            longitud: 456
        },
        id_estado_anomalia: 1,
        estado: {
            descripcion: "No visitado",
            codigo: 5
        },
        id_archivo: 1,
        archivo: {
            url: "http://.../...",
            tipo: "image/png"
        },
        id_comentario: 1,
        comentario: "Pendiente de revisión",
        creado: "2022-05-23T15:44:55.123Z"
    }
]

async function obtenerEvidencias() {
    return evidencias
}

async function crearEvicencia(anomalia, estado, archivo, comentario) {
    evidencias.push({
        id_evidencia: 1,
        id_anomalia: 1,
        anomalia,
        id_usuario: 1,
        usuario: {
            nombre: "Ana Ming",
            correo: "ana.ming@gmail.com"
        },
        id_ubicacion: 1,
        ubicacion: {
            latitud: 123,
            longitud: 456
        },
        id_estado_anomalia: 1,
        estado,
        id_archivo: 1,
        archivo,
        id_comentario: 1,
        comentario: comentario,
        creado: new Date().toISOString()
    })
}

const fs = require("fs/promises")
const path = require("path")
const crypto = require("crypto")

async function generarEvidenciaPrueba() {
    const anomalia = {
        tipo: "PRUEBA",
        qr: "..."
    }

    const estado = {
        descripcion: "Generada desde la prueba",
        codigo: 1001
    }

    const uuid = crypto.randomUUID()

    const filename = `evidencia-${uuid}.txt`

    await fs.writeFile(path.join(process.cwd(), "public", "archivos", filename), `Esta es una prueba aleatoria ubicada en ${filename}`, "utf-8")

    const archivo = {
        url: `/archivos/${filename}`,
        tipo: "text/plain"
    }

    const comentario = `
        Este es un comentario de prueba
        Generado el ${ new Date().toLocaleString() }
    `

    return [anomalia, estado, archivo, comentario]
}

module.exports = {
    obtenerEvidencias,
    crearEvicencia,
    generarEvidenciaPrueba
}