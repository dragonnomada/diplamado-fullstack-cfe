
const dbService = require("../../db")

async function getTodos(id, num_servicio, codigo_barras) {
	if (dbService.isConnected()) {
      const connection = dbService.getConnection()
      
			let sql = "SELECT * FROM recibos"
			let params = []

			if (id) {
				sql = "SELECT * FROM recibos WHERE id = ?"
				params = [id]
			} else if (num_servicio) {
				sql = "SELECT * FROM recibos WHERE num_servicio = ?"
				params = [num_servicio]
			} else if (codigo_barras) {
				sql = "SELECT * FROM recibos WHERE codigo_barras = ?"
				params = [codigo_barras]
			}
console.log(sql)
      const [results, fields] = await connection.execute(sql, params)

      return results
  } else {
		return null
	}
}

async function getPagados(id, num_servicio, codigo_barras) {
	if (dbService.isConnected()) {
      const connection = dbService.getConnection()
      
			let sql = "SELECT * FROM recibos WHERE pagado IS NOT NULL"
			let params = []

			if (id) {
				sql = "SELECT * FROM recibos WHERE id = ? and pagado IS NOT NULL"
				params = [id]
			} else if (num_servicio) {
				sql = "SELECT * FROM recibos WHERE num_servicio = ? and pagado IS NOT NULL"
				params = [num_servicio]
			} else if (codigo_barras) {
				sql = "SELECT * FROM recibos WHERE codigo_barras = ? and pagado IS NOT NULL"
				params = [codigo_barras]
			}

      const [results, fields] = await connection.execute(sql, params)

      return results
  } else {
		return null
	}
}

async function getPagadosCancelados(id, num_servicio, codigo_barras) {
	if (dbService.isConnected()) {
      const connection = dbService.getConnection()
      
			let sql = "SELECT * FROM recibos WHERE pagado IS NOT NULL and cancelado IS NOT NULL"
			let params = []

			if (id) {
				sql = "SELECT * FROM recibos WHERE id = ? and pagado IS NOT NULL and cancelado IS NOT NULL"
				params = [id]
			} else if (num_servicio) {
				sql = "SELECT * FROM recibos WHERE num_servicio = ? and pagado IS NOT NULL and cancelado IS NOT NULL"
				params = [num_servicio]
			} else if (codigo_barras) {
				sql = "SELECT * FROM recibos WHERE codigo_barras = ? and pagado IS NOT NULL and cancelado IS NOT NULL"
				params = [codigo_barras]
			}

      const [results, fields] = await connection.execute(sql, params)

      return results
  } else {
		return null
	}
}

async function getCancelados(id, num_servicio, codigo_barras) {
	if (dbService.isConnected()) {
      const connection = dbService.getConnection()
      
			let sql = "SELECT * FROM recibos WHERE cancelado IS NOT NULL"
			let params = []

			if (id) {
				sql = "SELECT * FROM recibos WHERE id = ?  and cancelado IS NOT NULL"
				params = [id]
			} else if (num_servicio) {
				sql = "SELECT * FROM recibos WHERE num_servicio = ?  and cancelado IS NOT NULL"
				params = [num_servicio]
			} else if (codigo_barras) {
				sql = "SELECT * FROM recibos WHERE codigo_barras = ? and cancelado IS NOT NULL"
				params = [codigo_barras]
			}

      const [results, fields] = await connection.execute(sql, params)

      return results
  } else {
		return null
	}
}
// ...

async function nuevoRecibo(datos) {
	if (dbService.isConnected()) {
      const connection = dbService.getConnection()
      
			let sql = "INSERT INTO recibos (num_servicio, codigo_barras, total, mes, anio, consumo, nivel) VALUES (?, ?, ?, ?, ?, ?, ?)"
			let params = [datos.num_servicio, datos.codigo_barras, datos.total, datos.mes, datos["anio"], datos.consumo, datos.nivel]

      const result = await connection.execute(sql, params)

      return [200, result]
  } else {
		return null
	}
}

async function pagarRecibo(num_servicio, datos) {
	if (dbService.isConnected()) {
      const connection = dbService.getConnection()
      
			let sql = "UPDATE recibos SET actualizado = NOW(), pagado = NOW(), cadena_pago = ? WHERE num_servicio = ?"
			let params = [datos.cadena_pago, num_servicio]

      const result = await connection.execute(sql, params)

      return [200, result]
  } else {
		return [500, null]
	}
}

async function entregarRecibo(num_servicio, datos) {
	if (dbService.isConnected()) {
      const connection = dbService.getConnection()
      
			let sql = "UPDATE recibos SET actualizado = NOW(), entregado = NOW(), firma_entrega = ? WHERE num_servicio = ?"
			let params = [datos.firma_entrega, num_servicio]

      const result = await connection.execute(sql, params)

      return [200, result]
  } else {
		return [500, null]
	}
}

// ...

async function cancelarRecibo(num_servicio, datos) {
	if (dbService.isConnected()) {
      const connection = dbService.getConnection()
      
			// TODO: Validar la firma de cancelación y checar los permisos

			let sql = "UPDATE recibos SET actualizado = NOW(), cancelado = NOW(), firma_cancelacion = ? WHERE num_servicio = ?"
			let params = [datos.firma_cancelacion, num_servicio]

      const result = await connection.execute(sql, params)

      return [200, result]
  } else {
		return [500, null]
	}
}
async function getEntregados(id, num_servicio, codigo_barras) {
	if (dbService.isConnected()) {
      const connection = dbService.getConnection()
      
			let sql = "SELECT * FROM recibos where entregado is not null"
			let params = []

			if (id) {
				sql = "SELECT * FROM recibos WHERE id = ? and entregado is not null"
				params = [id]
			} else if (num_servicio) {
				sql = "SELECT * FROM recibos WHERE num_servicio = ? and entregado is not null"
				params = [num_servicio]
			} else if (codigo_barras) {
				sql = "SELECT * FROM recibos WHERE codigo_barras = ? and entregado is not null"
				params = [codigo_barras]
			}
console.log(sql)
      const [results, fields] = await connection.execute(sql, params)

      return results
  } else {
		return null
	}
}



module.exports = {
	
	getTodos,
	getPagados,
	getPagadosCancelados,
	getCancelados,
	getEntregados,
	nuevoRecibo,
	pagarRecibo,
	entregarRecibo,
	cancelarRecibo
	
}