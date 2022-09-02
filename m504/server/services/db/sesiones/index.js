const crypto = require("crypto")

const db = require("../../db")

async function nueva(id_usuario, token, codigo, meta) {
    // TODO: Verificar que el id_usuario sea válido
    // TODO: Verificar que el token cumpla los requisitos
    const sql = "INSERT INTO sesiones (id_usuario, token, codigo, meta) VALUES (?, ?, ?, ?)"
    const params = [id_usuario, token, codigo, meta]
    const [result] = await db.execute(sql, params)
    return result.insertId
}

async function generarToken() {
    return crypto.randomUUID()
}

async function iniciar(id_sesion) {
    const sql = "UPDATE sesiones SET iniciado = NOW(), actualizado = NOW() WHERE id_sesion = ?"
    const params = [id_sesion]
    const [result] = await db.execute(sql, params)
    return result
}

module.exports = {
    nueva,
    generarToken,
    iniciar
}