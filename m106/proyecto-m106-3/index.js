require("dotenv").config()

const mysql2 = require("mysql2/promise")

async function main() {

    const connection = await mysql2.createConnection({
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT,
        database: process.env.MYSQL_DBNAME,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
    })

    const [results1, fields1] = await connection.query("SELECT * FROM pruebas")
    const [results2, fields2] = await connection.query("SELECT * FROM pruebas WHERE activo = 0")

    console.log(results1)
    console.log(results2)

    let html = ""
    for (let prueba of results1) {
        html += `
            <div>
                <h1>${prueba.id}</h1>
                <h2>${prueba.nombre}</h2>
                <span>${prueba.creado.toLocaleString()}</span>
                <span>${prueba.modificado || "SIN MODIFICAR"}</span>
                <span>${prueba.activo ? "ACTIVO" : "INACTIVO"}</span>
            </div>
        `
    }

    console.log(html)

    await connection.end()

} // Estabiliza el código ya que no tenemos ningún callback

main().catch(error => {
    console.log(`${error}`)
})