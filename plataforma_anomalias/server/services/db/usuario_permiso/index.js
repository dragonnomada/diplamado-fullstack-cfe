const db = require("../../db")

async function nuevo(id_usuario, id_permiso, activo) {
    const sql = "INSERT INTO usuario_permiso (id_usuario, id_permiso, activo) VALUES (?, ?, ?)"
    const params = [id_usuario, id_permiso, activo]
    const [result] = await db.execute(sql, params)
    return result.insertId
}

module.exports = {
    nuevo
}