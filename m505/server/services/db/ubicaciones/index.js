const db = require("../../db")

async function porId(id) {
    const sql = "SELECT * FROM ubicaciones WHERE id_ubicacion = ?"
    const params = [id]
    const [rows] = await db.execute(sql, params)
    return rows[0]
}

async function nuevo(id_usuario, latitud, longitud, uuid, info) {
    const sql = "INSERT INTO ubicaciones (id_usuario, latitud, longitud, uuid, info) VALUES (?, ?, ?, ?, ?)"
    const params = [id_usuario, latitud, longitud, uuid, info]
    const [result] = await db.execute(sql, params)
    return result.insertId
}

async function info(id_ubicacion) {
    const sql = "SELECT * FROM ubicaciones WHERE id_ubicacion = ?"
    const params = [id_ubicacion]
    const [rows] = await db.execute(sql, params)
    const ubicacion = rows[0]
    return ubicacion
}

module.exports = {
    porId,
    nuevo,
    info
}