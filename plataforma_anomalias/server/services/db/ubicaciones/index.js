const db = require("../../db")

async function nuevo(id_usuario, latitud, longitud, uuid, info) {
    const sql = "INSERT INTO ubicaciones (id_usuario, latitud, longitud, uuid, info) VALUES (?, ?, ?, ?, ?)"
    const params = [id_usuario, latitud, longitud, uuid, info]
    const [result] = await db.execute(sql, params)
    return result.insertId
}

module.exports = {
    nuevo
}