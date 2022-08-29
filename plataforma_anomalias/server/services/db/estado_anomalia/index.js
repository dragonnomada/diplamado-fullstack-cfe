const db = require("../../db")

async function nuevo(descripcion, codigo) {
    const sql = "INSERT INTO estado_anomalia (descripcion, codigo, creado) VALUES (?, ?, NOW())"
    const params = [descripcion, codigo]
    const [result] = await db.execute(sql, params)
    return result.insertId
}

module.exports = {
    nuevo
}