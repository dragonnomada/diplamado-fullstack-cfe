const express = require("express")

const dbService = require("../../services/db")

const router = express.Router()

router.get("/", async (request, response) => {
    if (dbService.isConnected()) {
        const connection = dbService.getConnection()
        
        const [results, fields] = await connection.query("SELECT * FROM pruebas")

        response.json(results)
    } else {
        response.status(5000).send("No hay conexión a la base de datos")
    }

})

module.exports = router