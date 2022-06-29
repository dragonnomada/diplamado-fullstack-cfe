const express = require("express")

const dbService = require("../../../services/db")

const cfeRecibosService = require("../../../services/recibos")

const router = express.Router()

/**
 * Aqui van todos los metodos GET
 */
// GET /api/cfe/recibos
router.get("/", async (request, response) => {
    // TODO: Recuperar los parámetros de búsqueda de `request`
    const id = request.query.id
    const num_servicio = request.query.num_servicio
    const codigo_barras = request.query.codigo_barras

    const recibos = await cfeRecibosService.getTodos(id, num_servicio, codigo_barras)

    response.json(recibos)
})

// GET /api/cfe/recibos/pagados
router.get("/pagados", async (request, response) => {
    // TODO: Recuperar los parámetros de búsqueda de `request`
    const id = request.query.id
    const num_servicio = request.query.num_servicio
    const codigo_barras = request.query.codigo_barras

    const recibos = await cfeRecibosService.getPagados(id, num_servicio, codigo_barras)

    response.json(recibos)
})

// GET /api/cfe/recibos/cancelados
router.get("/cancelados", async (request, response) => {
    // TODO: Recuperar los parámetros de búsqueda de `request`
    const id = request.query.id
    const num_servicio = request.query.num_servicio
    const codigo_barras = request.query.codigo_barras

    const recibos = await cfeRecibosService.getCancelados(id, num_servicio, codigo_barras)

    response.json(recibos)
})

// GET /api/cfe/recibos/entregados
router.get("/entregados", async (request, response) => {
    // TODO: Recuperar los parámetros de búsqueda de `request`
    const id = request.query.id
    const num_servicio = request.query.num_servicio
    const codigo_barras = request.query.codigo_barras

    const recibos = await cfeRecibosService.getEntregados(id, num_servicio, codigo_barras)

    response.json(recibos)
})

// GET /api/cfe/recibos/entregados/pagados
router.get("/entregados/pagados", async (request, response) => {
    // TODO: Recuperar los parámetros de búsqueda de `request`
    const id = request.query.id
    const num_servicio = request.query.num_servicio
    const codigo_barras = request.query.codigo_barras

    const recibos = await cfeRecibosService.getEntregadosPagados(id, num_servicio, codigo_barras)

    response.json(recibos)
})

// GET /api/cfe/recibos/entregados/pagados/cancelados
router.get("/entregados/pagados/cancelados", async (request, response) => {
    // TODO: Recuperar los parámetros de búsqueda de `request`
    const id = request.query.id
    const num_servicio = request.query.num_servicio
    const codigo_barras = request.query.codigo_barras

    const recibos = await cfeRecibosService.getEntregadosPagadosCancelados(id, num_servicio, codigo_barras)

    response.json(recibos)
})

// GET /api/cfe/recibos/pagados/cancelados
router.get("/pagados/cancelados", async (request, response) => {
    // TODO: Recuperar los parámetros de búsqueda de `request`
    const id = request.query.id
    const num_servicio = request.query.num_servicio
    const codigo_barras = request.query.codigo_barras

    const recibos = await cfeRecibosService.getPagadosCancelados(id, num_servicio, codigo_barras)

    response.json(recibos)
})

/**
 * Aqui van todos los metodos PUT
 */
// PUT /api/cfe/recibos
router.put("/", async (request, response) => {
    // TODO: Recuperar los datos del cuerpo de `request`
    const datos = request.body

    console.log(datos)

    const [status, result] = await cfeRecibosService.nuevoRecibo(datos)

    response.status(status).json(result)
})

/**
 * Aqui van todos los metodos POST
 */
// POST /api/cfe/recibos/:num_servicio/pagar
router.post("/:num_servicio/pagar", async (request, response) => {
    // TODO: Recuperar los datos del cuerpo de `request`
    const datos = request.body

    // TODO: Recuperar el parámetro dinámico del `request`
    const num_servicio = request.params.num_servicio
    
    const [status, result] = await cfeRecibosService.pagarRecibo(num_servicio, datos)
    
    response.json(result)
})

// POST /api/cfe/recibos/:num_servicio/entregar
router.post("/:num_servicio/entregar", async (request, response) => {
    // TODO: Recuperar los datos del cuerpo de `request`
    const datos = request.body

    // TODO: Recuperar el parámetro dinámico del `request`
    const num_servicio = request.params.num_servicio

    const [status, result] = await cfeRecibosService.entregarRecibo(num_servicio, datos)

    response.status(status).json(result)
})

// POST /api/cfe/recibos/:num_servicio/notificar
router.post("/:num_servicio/notificar", async (request, response) => {
    // TODO: Recuperar los datos del cuerpo de `request`
    const datos = request.body

    // TODO: Recuperar el parámetro dinámico del `request`
    const num_servicio = request.params.num_servicio

    const [status, result] = await cfeRecibosService.notificarRecibo(num_servicio, datos)

    response.status(status).json(result)
})
/**
 * Terminan todos los metodos POST
 */

/**
 * Aqui van todos los metodos DELETE
 */
// DELETE /api/cfe/recibos/:num_servicio/cancelar
router.delete("/:num_servicio/cancelar", async (request, response) => {
    // TODO: Recuperar los datos del cuerpo de `request`
    const datos = request.body

    // TODO: Recuperar el parámetro dinámico del `request`
    const num_servicio = request.params.num_servicio

    const [status, result] = await cfeRecibosService.cancelarRecibo(num_servicio, datos)

    response.status(status).json(result)
})

module.exports = router