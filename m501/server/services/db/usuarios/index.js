const DBService = require("../../db")

async function activos() {
    const sql = "SELECT * FROM usuarios WHERE activo=?"
    const params = [true]
    const usuarios = await DBService.execute(sql, params)
    return usuarios
}

async function inactivos() {
    const sql = "SELECT * FROM usuarios WHERE activo=?"
    const params = [false]
    const usuarios = await DBService.execute(sql, params)
    return usuarios
}

async function nuevo(nombre, correo, contraseña, imagen, activo) {
    const sql = "INSERT INTO usuarios (nombre, correo, contraseña, imagen, activo) VALUES (?, ?, ?, ?, ?)"
    const params = [nombre, correo, contraseña, imagen, activo]
    const result = await DBService.execute(sql, params)
    return result.insertId
}

// ...

module.exports = {
    activos,
    inactivos,
    nuevo
}