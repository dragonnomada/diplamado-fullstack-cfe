const db = require("../../db")

async function nuevo(id_ubicacion, texto, imagen) {
    const sql = "INSERT INTO qr (id_ubicacion, texto, imagen) VALUES (?, ?, ?)"
    const params = [id_ubicacion, texto, imagen]
    const [result] = await db.execute(sql, params)
    return result.insertId
}

async function info(id) {
    const sql = "SELECT * FROM qr WHERE id_qr = ?"
    const params = [id]
    const [rows] = await db.execute(sql, params)
    return rows[0]
}

async function imagen(id) {
    const sql = "SELECT * FROM qr WHERE id_qr = ?"
    const params = [id]
    const [rows] = await db.execute(sql, params)
    return rows[0].imagen
}

module.exports = {
    nuevo,
    info,
    imagen
}