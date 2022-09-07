const db = require("../../db")

async function nuevo(id_anomalia, id_usuario, id_evidencia, texto) {
    const sql = "INSERT INTO comentarios (id_anomalia, id_usuario, id_evidencia, texto) VALUES (?, ?, ?, ?)"
    const params = [id_anomalia, id_usuario, id_evidencia, texto]
    const [result] = await db.execute(sql, params)
    return result.insertId
}

module.exports = {
    nuevo
}