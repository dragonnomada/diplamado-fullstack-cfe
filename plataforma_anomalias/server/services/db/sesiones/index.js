const db = require("../../db")

async function nuevo(id_usuario, token, codigo, meta) {
    const sql = "INSERT INTO sesiones (id_usuario, token, codigo, meta) VALUES (?, ?, ?, ?)"
    const params = [id_usuario, token, codigo, meta]
    const [result] = await db.execute(sql, params)
    return result.insertId
}

module.exports = {
    nuevo
}