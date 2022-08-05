const { response } = require("express");
const express = require("express");

const router = express.Router();

const productos = [];

router.put("/nuevo",(req, res) => {
    const producto = req.body
    console.log(producto);
    productos.push(producto)
    res.send("ok")
})

router.get("/",(req,res) => {
    res.send(productos)
})

module.exports = router