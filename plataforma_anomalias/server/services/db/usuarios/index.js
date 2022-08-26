const db = require("../../db")

async function activos() {
    const sql = "SELECT * FROM usuarios WHERE activo=?"
    const params = [true]
    const [rows] = await db.execute(sql, params)
    return rows
}

async function inactivos() {
    const sql = "SELECT * FROM usuarios WHERE activo=?"
    const params = [false]
    const [rows] = await db.execute(sql, params)
    return rows
}

module.exports = {
    activos,
    inactivos
}