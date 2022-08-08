const express = require("express")

const cfeRecibosService = require("../../../services/cfe/recibos")

const router = express.Router()

// GET /api/cfe/recibos
router.get("/", async (request, response) => {
    // TODO: Recuperar los parámetros de búsqueda de `request`
		const id = request.query.id
		const num_servicio = request.query.num_servicio
		const codigo_barras = request.query.codigo_barras
		const total_min = request.query.total_min
		const total_max = request.query.total_max
		const mes = request.query.mes
		const anio = request.query.anio

		const recibos = await cfeRecibosService.getTodos(id, num_servicio, codigo_barras,total_min,total_max,mes,anio)

		response.json(recibos)
})

// GET /api/cfe/recibos/pagados
router.get("/pagados", async (request, response) => {
    // TODO: Recuperar los parámetros de búsqueda de `request`
	console.log(request.query);
		const id = request.query.id
		const num_servicio = request.query.num_servicio
		const codigo_barras = request.query.codigo_barras
		const total_min = request.query.total_min
		const total_max = request.query.total_max
		const mes = request.query.mes
		const anio = request.query.anio

		const recibos = await cfeRecibosService.getPagados(id, num_servicio, codigo_barras,total_min,total_max,mes,anio)

		response.json(recibos)
})

// GET /api/cfe/recibos/pagados/cancelados
router.get("/pagados/cancelados", async (request, response) => {
    // TODO: Recuperar los parámetros de búsqueda de `request`
		const id = request.query.id
		const num_servicio = request.query.num_servicio
		const codigo_barras = request.query.codigo_barras
		const total_min = request.query.total_min
		const total_max = request.query.total_max
		const mes = request.query.mes
		const anio = request.query.anio
		
		const recibos = await cfeRecibosService.getPagadosCancelados(id, num_servicio, codigo_barras,total_min,total_max,mes,anio)

		response.json(recibos)
})

router.get("/cancelados", async (request, response) => {
    // TODO: Recuperar los parámetros de búsqueda de `request`
	console.log(request.query);
		const id = request.query.id
		const num_servicio = request.query.num_servicio
		const codigo_barras = request.query.codigo_barras
		const total_min = request.query.total_min
		const total_max = request.query.total_max
		const mes = request.query.mes
		const anio = request.query.anio

		const recibos = await cfeRecibosService.getCancelados(id, num_servicio, codigo_barras,total_min,total_max,mes,anio)

		response.json(recibos)
})

router.get("/entregados", async (request, response) => {
    // TODO: Recuperar los parámetros de búsqueda de `request`
	console.log(request.query);
		const id = request.query.id
		const num_servicio = request.query.num_servicio
		const codigo_barras = request.query.codigo_barras
		const total_min = request.query.total_min
		const total_max = request.query.total_max
		const mes = request.query.mes
		const anio = request.query.anio

		const recibos = await cfeRecibosService.getEntregados(id, num_servicio, codigo_barras,total_min,total_max,mes,anio)

		response.json(recibos)
})

router.get("/entregados/pagados", async (request, response) => {
    // TODO: Recuperar los parámetros de búsqueda de `request`
		console.log(request.query);
		const id = request.query.id
		const num_servicio = request.query.num_servicio
		const codigo_barras = request.query.codigo_barras
		const total_min = request.query.total_min
		const total_max = request.query.total_max
		const mes = request.query.mes
		const anio = request.query.anio

		const recibos = await cfeRecibosService.getEntregadosPagados(id, num_servicio, codigo_barras,total_min,total_max,mes,anio)

		response.json(recibos)
})

router.get("/entregados/pagados/cancelados", async (request, response) => {
    // TODO: Recuperar los parámetros de búsqueda de `request`
		console.log(request.query);
		const id = request.query.id
		const num_servicio = request.query.num_servicio
		const codigo_barras = request.query.codigo_barras
		const total_min = request.query.total_min
		const total_max = request.query.total_max
		const mes = request.query.mes
		const anio = request.query.anio

		const recibos = await cfeRecibosService.getEntregadosPagadosCancelados(id, num_servicio, codigo_barras,total_min,total_max,mes,anio)

		response.json(recibos)
})

router.get("/entregados/cancelados", async (request, response) => {
    // TODO: Recuperar los parámetros de búsqueda de `request`
		console.log(request.query);
		const id = request.query.id
		const num_servicio = request.query.num_servicio
		const codigo_barras = request.query.codigo_barras
		const total_min = request.query.total_min
		const total_max = request.query.total_max
		const mes = request.query.mes
		const anio = request.query.anio

		const recibos = await cfeRecibosService.getEntregadosCancelados(id, num_servicio, codigo_barras,total_min,total_max,mes,anio)

		response.json(recibos)
})

// PUT /api/cfe/recibos
router.put("/", async (request, response) => {
    // TODO: Recuperar los datos del cuerpo de `request`
		const datos = request.body

		const [status, result] = await cfeRecibosService.nuevoRecibo(datos)

		response.status(status).json(result)
})

// POST /api/cfe/recibos/:num_servicio/pagar
router.post("/:num_servicio/pagar", async (request, response) => {
    // TODO: Recuperar los datos del cuerpo de `request`
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