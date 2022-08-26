const mysql = require("mysql2/promise")

let connection = null

async function connect() {
    connection = await mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "password",
        database: "plataforma_anomalias"
    })
}

async function disconnect() {
    if (!connection) throw Error("No hay conexión a la base de datos")
    await connection.end()
}

async function execute(sql, params) {
    if (!connection) throw Error("No hay conexión a la base de datos")
    const [rows] = await connection.execute(sql, params)
    return rows
}

module.exports = {
    connect,
    disconnect,
    execute
}