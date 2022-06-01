const express = require("express")

const router = express.Router()

router.get("/", (request, response) => {
    response.send([
        {
            id: 123,
            name: "Ana Ming",
            age: 23,
            active: true
        },
        {
            id: 456,
            name: "Chucho el Roto",
            age: 67,
            active: false
        },
    ])
})

module.exports = router