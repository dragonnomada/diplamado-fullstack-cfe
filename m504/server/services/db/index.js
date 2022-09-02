const mysql = require("mysql2/promise")

let connection = null;

async function connect() {
    connection = await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWD,
        database: process.env.MYSQL_DB
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