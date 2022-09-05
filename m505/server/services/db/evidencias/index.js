const db = require("../../db")

async function nuevo(id_anomalia, id_usuario, id_ubicacion) {
    const sql = "INSERT INTO evidencias (id_anomalia, id_usuario, id_ubicacion) VALUES (?, ?, ?)"
    const params = [id_anomalia, id_usuario, id_ubicacion]
    const [result] = await db.execute(sql, params)
    return result.insertId
}

module.exports = {
    nuevo
}