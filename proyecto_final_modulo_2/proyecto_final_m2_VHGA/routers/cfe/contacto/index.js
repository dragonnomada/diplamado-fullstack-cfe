const express = require("express")

const router = express.Router()

router.post("/", (request, response) => {
    const name = request.body.form_name
    const lastname = request.body.form_lastname
    const email = request.body.form_email
    const message = request.body.form_message

    console.log(`Contacto => ${name} -> ${lastname} -> ${email} -> ${message}`)
    console.log(request.body)
    response.redirect("/contacto.html#ok")
})

module.exports = router