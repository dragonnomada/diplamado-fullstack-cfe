// routes/cfe/contacto/index.js

const express = require("express")

const router = express.Router()

router.post("/", (request, response) => {
    const usuario = request.body.usuario
    const correo = request.body.correo
		// TODO: Recibir los demás campos del formulario de contacto

    console.log(`Recibido: ${usuario} | ${correo}`)

    response.redirect("/contact.html#ok")
})

module.exports = router

// NOTA: Enlazar el router en el index.js del servidor

// const cfeContactoRouter = require("./routers/cfe/contacto")
// ...
// app.use("/api/cfe/contacto", cfeContactoRouter)