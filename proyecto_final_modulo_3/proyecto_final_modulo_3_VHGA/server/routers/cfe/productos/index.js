const express = require("express")

const router = express.Router()

const productos = []

router.put("/nuevo", (request, response) => {
    const producto = request.body
    productos.push(producto)
    response.send("ok")
})

router.get("/", (request, response) => {
    response.send(productos)
})

module.exports = router