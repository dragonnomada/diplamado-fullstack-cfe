const db = require("../../db")

async function nuevo(descripcion, codigo, activo) {
    const sql = "INSERT INTO permisos (descripcion, codigo, activo) VALUES (?, ?, ?)"
    const params = [descripcion, codigo, activo]
    const [result] = await db.execute(sql, params)
    return result.insertId
}

module.exports = {
    nuevo
}