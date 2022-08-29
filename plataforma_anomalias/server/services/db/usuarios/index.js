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

async function nuevo(nombre, correo, contraseña, imagen, activo) {
    const sql = "INSERT INTO usuarios (nombre, correo, contraseña, imagen, activo) VALUES (?, ?, ?, ?, ?)"
    const params = [nombre, correo, contraseña, imagen || "default.png", !!activo]
    const [result] = await db.execute(sql, params)
    return result.insertId
}

module.exports = {
    activos,
    inactivos,
    nuevo
}