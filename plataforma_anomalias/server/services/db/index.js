const mysql = require("mysql2/promise")

let connection = null;

async function connect() {
    connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "plataforma_anomalias"
    })
    return connection
}

async function disconnect() {
    if (!connection) throw new Error(`No hay conexión a la base de datos`)
    await connection.end()
}

async function execute(sql, params) {
    if (!connection) throw new Error(`No hay conexión a la base de datos`)
    return await connection.execute(sql, params)
}

module.exports = {
    connection,
    isConnected: () => !!connection,
    connect,
    disconnect,
    execute
}