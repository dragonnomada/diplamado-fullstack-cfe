const db = require("../../db")

async function porId(id) {
    const sql = "SELECT * FROM usuarios WHERE id_usuario = ?"
    const params = [id]
    const [rows] = await db.execute(sql, params)
    return rows[0]
}

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

async function buscarPorCorreo(correo) {
    const sql = "SELECT * FROM usuarios WHERE correo = ? and activo = TRUE"
    const params = [correo]
    const [rows] = await db.execute(sql, params)
    return rows[0] || null
}

async function validarContraseña(id_usuario, contraseña) {
    const sql = "SELECT * FROM usuarios WHERE id_usuario = ? and contraseña = ? and activo = TRUE"
    const params = [id_usuario, contraseña]
    const [rows] = await db.execute(sql, params)
    return !!rows[0]
}

async function info(id_usuario) {
    const sql = "SELECT * FROM usuarios WHERE id_usuario = ?"
    const params = [id_usuario]
    const [rows] = await db.execute(sql, params)
    const usuario = rows[0]
    delete usuario.contraseña
    return usuario
}

module.exports = {
    porId,
    activos,
    inactivos,
    nuevo,
    buscarPorCorreo,
    validarContraseña,
    info
}