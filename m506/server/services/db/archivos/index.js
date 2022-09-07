const db = require("../../db")

async function nuevo(id_usuario, id_ubicacion, ruta, tipo, info, meta) {
    const sql = "INSERT INTO archivos (id_usuario, id_ubicacion, ruta, tipo, info, meta) VALUES (?, ?, ?, ?, ?, ?)"
    const params = [id_usuario, id_ubicacion, ruta, tipo, info, meta]
    const [result] = await db.execute(sql, params)
    return result.insertId
}

module.exports = {
    nuevo
}