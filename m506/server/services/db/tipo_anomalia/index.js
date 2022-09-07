const db = require("../../db")

async function todos() {
    const sql = "SELECT * FROM tipo_anomalia"
    const [result] = await db.execute(sql)
    return result
}

async function nuevo(descripcion, codigo) {
    const sql = "INSERT INTO tipo_anomalia (descripcion, codigo, creado) VALUES (?, ?, NOW())"
    const params = [descripcion, codigo]
    const [result] = await db.execute(sql, params)
    return result.insertId
}

module.exports = {
    todos,
    nuevo
}