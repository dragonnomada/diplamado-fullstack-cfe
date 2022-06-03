require("dotenv").config()

const mysql2 = require("mysql2/promise")

let context = {}

mysql2.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DBNAME,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
}).then(connection => {
    context.connection = connection
    return connection.query("SELECT * FROM pruebas")
}).then(paquete => {
    const results = paquete[0]
    //const fields = paquete[1]
    console.log(results)
    return context.connection.query("SELECT * FROM pruebas WHERE activo=0")
}).then(paquete => {
    const results = paquete[0]
    console.log(results)
}).catch(error => {
    console(`Ocurrió un error: ${error}`)
})