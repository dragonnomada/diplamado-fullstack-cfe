// npm install --save express
// npm install --save mysql2
// npm install --save cors
// npm install --save dotenv

require("dotenv").config()

const http = require("http")
const express = require("express")
const cors = require("cors")

const db = require("./services/db")

const AuthLoginApi = require("./api/auth/login")
const AnomaliasApi = require("./api/anomalias")
const AnomaliasPublicarApi = require("./api/anomalias/publicar")
const AnomaliasTiposApi = require("./api/anomalias/tipos")
const AnomaliasTiposNuevoApi = require("./api/anomalias/tipos/nuevo")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(AuthLoginApi)
app.use(AnomaliasApi)
app.use(AnomaliasPublicarApi)
app.use(AnomaliasTiposApi)
app.use(AnomaliasTiposNuevoApi)

db.connect().then(async () => {
    console.log("Se ha conectado a la base de datos")
    const server = http.createServer(app)
    server.listen(5000, "0.0.0.0", () => {
        console.log("Servidor iniciado en http://localhost:5000/")
        console.log("Presiona [ctrl+c] para finalizar")
    })
}).catch(error => console.log(error))