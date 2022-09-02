const db = require("../../db")

async function nuevo(id_ubicacion, texto, imagen) {
    const sql = "INSERT INTO qr (id_ubicacion, texto, imagen) VALUES (?, ?, ?)"
    const params = [id_ubicacion, texto, imagen]
    const [result] = await db.execute(sql, params)
    return result.insertId
}

module.exports = {
    nuevo
}