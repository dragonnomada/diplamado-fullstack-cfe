// > npm install dotenv --save
require("dotenv").config() // Carga las variables de entorno del archivo `.env`

// > npm install mysql2 --save
const mysql2 = require("mysql2")

const connection = mysql2.createConnection({
    host: process.env.MYSQL_HOST, // "localhost"
    port: process.env.MYSQL_PORT, // 3306
    database: process.env.MYSQL_DBNAME, // xyz_cfe
    user: process.env.MYSQL_USER, // "root"
    password: process.env.MYSQL_PASSWORD, // "password123"
})

connection.connect((error) => {
    if (error) {
        console.log(`Error al conectar la base de datos: ${error}`)
        process.exit(1) // ABORTA LA EJECUCIÓN DE NODE
    }

    console.log("Conectado a la base de datos")

    connection.query("SELECT * FROM pruebas", (error, result, fields) => {
        if (error) {
            console.log(`Error en el query 1: ${error}`)
            process.exit(1) // ABORTA LA EJECUCIÓN DE NODE
        }

        console.log(result)

        connection.query("SELECT * FROM pruebas WHERE id=1", (error, result, fields) => {
            if (error) {
                console.log(`Error en el query 2: ${error}`)
                process.exit(1) // ABORTA LA EJECUCIÓN DE NODE
            }
    
            console.log(result)
        })
    })
})
