const express = require("express")

const router = express.Router()

router.get("/", (request, response) => {
    response.send([
        {
            id: 1,
            name: "Coca Cola",
            price: 18.5
        },
        {
            id: 2,
            name: "Gansito",
            price: 10.5
        },
        {
            id: 3,
            name: "Galletas Marías",
            price: 22.99
        },
    ])
})

module.exports = router