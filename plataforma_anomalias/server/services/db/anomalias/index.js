const db = require("../../db")

async function publicadas() {
    const sql = "SELECT * FROM anomalias WHERE publicado IS NOT NULL"
    const params = []
    const [rows] = await db.execute(sql, params)
    return rows
}

async function delUsuario(id_usuario) {
    const sql = "SELECT * FROM anomalias WHERE id_usuario = ?"
    const params = [id_usuario]
    const [rows] = await db.execute(sql, params)
    return rows
}

async function nueva(id_usuario, id_ubicacion, id_tipo_anomalia, id_qr) {
    const sql = "INSERT INTO anomalias (id_usuario, id_ubicacion, id_tipo_anomalia, id_qr, publicado) VALUES (?, ?, ?, ?, ?)"
    const params = [id_usuario, id_ubicacion, id_tipo_anomalia, id_qr, false]
    const [result] = await db.execute(sql, params)
    return result.insertId
}

module.exports = {
    publicadas,
    delUsuario,
    nueva
}