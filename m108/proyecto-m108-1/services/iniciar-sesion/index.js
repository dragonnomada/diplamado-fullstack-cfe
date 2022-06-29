/**
 * Tabla: usuarios
 * id int primary key
 * nombre varchar(60) not null unique
 * correo varchar(120) not null unique
 * contraseña varchar(255) not null
 * token varchar(255)
 */

const dbService = require("../db")

async function obtenerUsuarioPorCorreo(correo) {
    const connection = dbService.getConnection()
        
    const sql = "SELECT * FROM usuarios WHERE correo = ? LIMIT 1"
    const params = [correo]

    const [results] = await connection.execute(sql, params)

    return results[0] // true: si existe | false: no existe
}

async function obtenerUsuarioPorNombre(nombre) {
    const connection = dbService.getConnection()
        
    const sql = "SELECT * FROM usuarios WHERE nombre = ? LIMIT 1"
    const params = [nombre]

    const [results] = await connection.execute(sql, params)

    return results[0] // true: si existe | false: no existe
}

async function existeNombre(nombre = "undefined") {
    const connection = dbService.getConnection()
        
    const sql = "SELECT * FROM usuarios WHERE nombre = ? LIMIT 1"
    const params = [nombre]

    const [results] = await connection.execute(sql, params)

    return results.length > 0 // true: si existe | false: no existe
}

async function existeCorreo(correo = "undefined") {
    const connection = dbService.getConnection()
        
    const sql = "SELECT * FROM usuarios WHERE correo = ? LIMIT 1"
    const params = [correo]

    const [results] = await connection.execute(sql, params)

    return results.length > 0 // true: si existe | false: no existe
}

async function existeCorreoContraseña(correo = "undefined", contraseña = "*******") {
    const connection = dbService.getConnection()
        
    const sql = "SELECT * FROM usuarios WHERE correo = ? and contraseña = ? LIMIT 1"
    const params = [correo, contraseña]

    const [results] = await connection.execute(sql, params)

    return results.length > 0 // true: si existe | false: no existe
}

async function existeNombreToken(nombre = "undefined", token = "************") {
    const connection = dbService.getConnection()
        
    const sql = "SELECT * FROM usuarios WHERE nombre = ? and token = ? LIMIT 1"
    const params = [nombre, token]

    const [results] = await connection.execute(sql, params)

    return results.length > 0 // true: si existe | false: no existe
}

function tokenAleatorio(n = 128, radix = 32) {
    token = ""
    while (token.length < n) {
        // Agregamos texto aleatorio a la cadena aleatoria llamada `token`
        token += Math.random().toString(radix).slice(2)
    }
    return token.slice(0, n)
}

async function generarToken(nombre = "undefined") {
    const connection = dbService.getConnection()
        
    const token = tokenAleatorio(64)

    const sql = "UPDATE usuarios SET token = ? WHERE nombre = ?"
    const params = [token, nombre]

    const [results] = await connection.execute(sql, params)

    return results
}

async function iniciarSesionCorreoContraseña(correo = "undefind", contraseña = "undefined") {
    if (await existeCorreo(correo)) {
        if (await existeCorreoContraseña(correo, contraseña)) {
            let usuario = await obtenerUsuarioPorCorreo(correo)
            await generarToken(usuario.nombre)
            usuario = await obtenerUsuarioPorCorreo(correo)
            delete usuario.contraseña
            return usuario
        }
    }
    return null
}

async function iniciarSesionNombreToken(nombre = "undefined", token = "***********") {
    if (await existeNombre(nombre)) {
        // TODO: Validar la vigencia del token
        if (await existeNombreToken(nombre, token)) {
            const usuario = await obtenerUsuarioPorNombre(nombre)
            delete usuario.contraseña
            return usuario
        }
    }
    return null
}

module.exports = {
    iniciarSesionCorreoContraseña,
    iniciarSesionNombreToken
}