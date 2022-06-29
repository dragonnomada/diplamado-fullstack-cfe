// routes/cfe/contacto/index.js

const express = require("express");

const router = express.Router();

router.post("/", (request, response) => {
  const nombre = request.body.nombre;
  const edad = request.body.edad;
  const usuario = request.body.usuario;
  const correo = request.body.correo;



  console.log(`Recibido: ${nombre} | ${edad} | ${usuario} | ${correo}`);

  response.redirect("/contact.html#ok");
});

module.exports = router;
