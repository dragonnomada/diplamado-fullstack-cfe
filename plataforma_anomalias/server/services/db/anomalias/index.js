const db = require("../../db")

async function todas() {
    const sql = "SELECT * FROM anomalias"
    const [rows] = await db.execute(sql)
    return rows
}

async function publicadas() {
    const sql = "SELECT * FROM anomalias WHERE publicado IS NOT NULL"
    const [rows] = await db.execute(sql)
    return rows
}

async function noPublicadas() {
    const sql = "SELECT * FROM anomalias WHERE publicado IS NULL"
    const [rows] = await db.execute(sql)
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

async function publicar(id_anomalia) {
    const sql = "UPDATE anomalias SET publicado = NOW() WHERE id_anomalia = ?"
    const params = [id_anomalia]
    const [result] = await db.execute(sql, params)
    return result
}

module.exports = {
    todas,
    publicadas,
    delUsuario,
    nueva,
    noPublicadas,
    publicar
}