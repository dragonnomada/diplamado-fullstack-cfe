
const express=require("express")
const router=express.Router()

router.post("/", (request,response) => {
    const usuario=request.body.usuario
    const correo=request.body.correo
    const telefono=request.body.telefono
    const mensaje=request.body.mensaje

    console.log(`Recibido: ${usuario} | ${correo} | ${telefono} | ${mensaje}`)

    response.redirect("/contact.html#ok")
})

module.exports = router