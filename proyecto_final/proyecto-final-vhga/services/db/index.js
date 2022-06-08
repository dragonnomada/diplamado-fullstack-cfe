/**
 * Codigo de Conexion a la Base de Datos
 */

const mysql2 = require("mysql2/promise")

const options = {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DBNAME,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
}

let connection = null

async function connect() {
    connection = await mysql2.createConnection(options)
}

async function disconnect() {
    await connection.end()
    connection = null
}

function getConnection() {
    return connection
}

function isConnected() {
    return connection !== null
}

module.exports = {
    connect,
    disconnect,
    getConnection,
    isConnected
}