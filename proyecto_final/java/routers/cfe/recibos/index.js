// routers/cfe/recibos/index.js

const express = require("express")

const cfeRecibosService = require("../../../services/cfe/recibos")

const router = express.Router()

// GET /api/cfe/recibos
router.get("/", async (request, response) => {
    // TODO: Recuperar los parámetros de búsqueda de `request`
    const id = request.query.id
    const num_servicio = request.query.num_servicio
    const codigo_barras = request.query.codigo_barras
    const total = request.query.total
    const mes = request.query.mes
    const ano = request.query.ano
	const recibos = await cfeRecibosService.getTodos(id, num_servicio, codigo_barras, total, mes, ano)

	response.json(recibos)
})

// GET /api/cfe/recibos/entregados
router.get("/entregados", async (request, response) => {
    const id = request.query.id
    const num_servicio = request.query.num_servicio
    const codigo_barras = request.query.codigo_barras
    const total = request.query.total
    const mes = request.query.mes
    const ano = request.query.ano

    const recibos = await cfeRecibosService.getEntregados(id, num_servicio, codigo_barras, total, mes, ano)

    response.json(recibos)
})

// GET /api/cfe/recibos/pagados
router.get("/pagados", async (request, response) => {
    // TODO: Recuperar los parámetros de búsqueda de `request`
    const id = request.query.id
    const num_servicio = request.query.num_servicio
    const codigo_barras = request.query.codigo_barras
    const total = request.query.total
    const mes = request.query.mes
    const ano = request.query.ano

    const recibos = await cfeRecibosService.getPagados(id, num_servicio, codigo_barras, total, mes, ano)

    response.json(recibos)
})

// GET /api/cfe/recibos/pagados/cancelados
router.get("/pagados/cancelados", async (request, response) => {
    // TODO: Recuperar los parámetros de búsqueda de `request`
    const id = request.query.id
    const num_servicio = request.query.num_servicio
    const codigo_barras = request.query.codigo_barras
    const total = request.query.total
    const mes = request.query.mes
    const ano = request.query.ano

    const recibos = await cfeRecibosService.getPagadosCancelados(id, num_servicio, codigo_barras, total, mes, ano)

    response.json(recibos)
})

// GET /api/cfe/recibos/cancelados
router.get("/cancelados", async (request, response) => {
    const id = request.query.id
    const num_servicio = request.query.num_servicio
    const codigo_barras = request.query.codigo_barras
    const total = request.query.total
    const mes = request.query.mes
    const ano = request.query.ano

    const recibos = await cfeRecibosService.getCancelados(id, num_servicio, codigo_barras, total, mes, ano)

    response.json(recibos)
})

// GET /api/cfe/recibos/entregados/pagados
router.get("/entregados/pagados", async (request, response) => {
    const id = request.query.id
    const num_servicio = request.query.num_servicio
    const codigo_barras = request.query.codigo_barras
    const total = request.query.total
    const mes = request.query.mes
    const ano = request.query.ano

    const recibos = await cfeRecibosService.getEntregadosPagados(id, num_servicio, codigo_barras, total, mes, ano)

    response.json(recibos)
})

// GET /api/cfe/recibos/entregados/pagados/cancelados
router.get("/entregados/pagados/cancelados", async (request, response) => {
    const id = request.query.id
    const num_servicio = request.query.num_servicio
    const codigo_barras = request.query.codigo_barras
    const total = request.query.total
    const mes = request.query.mes
    const ano = request.query.ano

    const recibos = await cfeRecibosService.getEntregadosPagadosCancelados(id, num_servicio, codigo_barras, total, mes, ano)

    response.json(recibos)
})

// GET /api/cfe/recibos/entregados/cancelados
router.get("/entregados/cancelados", async (request, response) => {
    const id = request.query.id
    const num_servicio = request.query.num_servicio
    const codigo_barras = request.query.codigo_barras
    const total = request.query.total
    const mes = request.query.mes
    const ano = request.query.ano

    const recibos = await cfeRecibosService.getEntregadosCancelados(id, num_servicio, codigo_barras, total, mes, ano)

    response.json(recibos)
})

// PUT /api/cfe/recibos
router.put("/", async (request, response) => {
    // TODO: Recuperar los datos del cuerpo de `request`
    const datos = request.body
    const id = datos.id
    const num_servicio = datos.num_servicio
    const codigo_barras = datos.codigo_barras
    const total = datos.total
    const mes = datos.mes
    const ano = datos.ano

    const [status, result] = await cfeRecibosService.nuevoRecibo(datos)

    response.status(status).json(result)
})

// POST /api/cfe/recibos/:num_servicio/pagar
router.post("/:num_servicio/pagar", async (request, response) => {
    // TODO: Recuperar los datos del cuerpo de `request`
    // console.log(request)
    const datos = request.body

    // TODO: Recuperar el parámetro dinámico del `request`
    const num_servicio = request.params.num_servicio

    const [status, result] = await cfeRecibosService.pagarRecibo(num_servicio, datos)

    response.status(status).json(result)
})

// POST /api/cfe/recibos/:num_servicio/entregar
router.post("/:num_servicio/entregar", async (request, response) => {
    // TODO: Recuperar los datos del cuerpo de `request`
    const datos = request.body


    // TODO: Recuperar el parámetro dinámico del `request`
    const num_servicio = request.params.num_servicio
    // console.log("num_servicio:" + num_servicio)

    const [status, result] = await cfeRecibosService.entregarRecibo(num_servicio, datos)

    response.status(status).json(result)
})

// POST /api/cfe/recibos/:num_servicio/notificar
router.post("/:num_servicio/notificar", async (request, response) =>
{
    const datos = request.body
    const num_servicio = request.params.num_servicio
    const [status, result] = await cfeRecibosService.notificarRecibo(num_servicio, datos)

    response.status(status).json(result)
})

// DELETE /api/cfe/recibos/:num_servicio/cancelar
router.delete("/:num_servicio/cancelar", async (request, response) => {
    // TODO: Recuperar los datos del cuerpo de `request`
    const datos = request.body

    // TODO: Recuperar el parámetro dinámico del `request`
    const num_servicio = request.params.num_servicio
// console.log("num_servicio: " + num_servicio)
    const [status, result] = await cfeRecibosService.cancelarRecibo(num_servicio, datos)

    response.status(status).json(result)
})

module.exports = router