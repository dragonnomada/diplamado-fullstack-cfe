// services/cfe/recibos/index.js

const dbService = require("../../db")

async function getTodos(id, num_servicio, codigo_barras,total_min,total_max,mes,año) {
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
			}else if (total_min) {
                sql = "SELECT * FROM recibos WHERE total = ?"
                params = [total_min]
            }else if (total_max) {
                sql = "SELECT * FROM recibos WHERE total = ?"
                params = [total_max]
            }else if (mes) {
                sql = "SELECT * FROM recibos WHERE mes = ?"
                params = [mes]
            }else if (año) {
                sql = "SELECT * FROM recibos WHERE año = ?"
                params = [año]
            } 

      const [results, fields] = await connection.execute(sql, params)

      return results
  } else {
		return null
	}
}

async function getPagados(id, num_servicio, codigo_barras,total_min,total_max,mes,año) {
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
			}else if (total_min) {
                sql = "SELECT * FROM recibos WHERE total = ? and pagado IS NOT NULL"
                params = [total_min]
            }else if (total_max) {
                sql = "SELECT * FROM recibos WHERE total = ? and pagado IS NOT NULL"
                params = [total_max]
            }else if (mes) {
                sql = "SELECT * FROM recibos WHERE mes = ? and pagado IS NOT NULL"
                params = [mes]
            }else if (año) {
                sql = "SELECT * FROM recibos WHERE año = ? and pagado IS NOT NULL"
                params = [año]
            }

      const [results, fields] = await connection.execute(sql, params)

      return results
  } else {
		return null
	}
}

async function getPagadosCancelados(id, num_servicio, codigo_barras,total_min,total_max,mes,año) {
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
			}else if (total_min) {
                sql = "SELECT * FROM recibos WHERE total = ? and pagado IS NOT NULL and cancelado IS NOT NULL"
                params = [total_min]
            }else if (total_max) {
                sql = "SELECT * FROM recibos WHERE total = ? and pagado IS NOT NULL and cancelado IS NOT NULL"
                params = [total_max]
            }else if (mes) {
                sql = "SELECT * FROM recibos WHERE mes = ? and pagado IS NOT NULL and cancelado IS NOT NULL"
                params = [mes]
            }else if (año) {
                sql = "SELECT * FROM recibos WHERE año = ? and pagado IS NOT NULL and cancelado IS NOT NULL"
                params = [año]
            }

      const [results, fields] = await connection.execute(sql, params)

      return results
  } else {
		return null
	}
}

async function getCancelados(id, num_servicio, codigo_barras,total_min,total_max,mes,año) {
	if (dbService.isConnected()) {
      const connection = dbService.getConnection()
      
			let sql = "SELECT * FROM recibos WHERE cancelado IS NOT NULL"
			let params = []

			if (id) {
				sql = "SELECT * FROM recibos WHERE id = ? and cancelado IS NOT NULL"
				params = [id]
			} else if (num_servicio) {
				sql = "SELECT * FROM recibos WHERE num_servicio = ? and cancelado IS NOT NULL"
				params = [num_servicio]
			} else if (codigo_barras) {
				sql = "SELECT * FROM recibos WHERE codigo_barras = ? and cancelado IS NOT NULL"
				params = [codigo_barras]
			}else if (total_min) {
                sql = "SELECT * FROM recibos WHERE total = ? and cancelado IS NOT NULL"
                params = [total_min]
            }else if (total_max) {
                sql = "SELECT * FROM recibos WHERE total = ? and cancelado IS NOT NULL"
                params = [total_max]
            }else if (mes) {
                sql = "SELECT * FROM recibos WHERE mes = ? and cancelado IS NOT NULL"
            }else if (año) {
                sql = "SELECT * FROM recibos WHERE año = ? and cancelado IS NOT NULL"
                params = [año]
            }

      const [results, fields] = await connection.execute(sql, params)

      return results
  } else {
		return null
	}
}

async function getEntregados(id, num_servicio, codigo_barras,total_min,total_max,mes,año) {
	if (dbService.isConnected()) {
      const connection = dbService.getConnection()
      
			let sql = "SELECT * FROM recibos WHERE entregado IS NOT NULL"
			let params = []

			if (id) {
				sql = "SELECT * FROM recibos WHERE id = ? and entregado IS NOT NULL"
				params = [id]
			} else if (num_servicio) {
				sql = "SELECT * FROM recibos WHERE num_servicio = ? and entregado IS NOT NULL"
				params = [num_servicio]
			} else if (codigo_barras) {
				sql = "SELECT * FROM recibos WHERE codigo_barras = ? and entregado IS NOT NULL"
				params = [codigo_barras]
			}else if (total_min) {
                sql = "SELECT * FROM recibos WHERE total = ? and entregado IS NOT NULL"
                params = [total_min]
            }else if (total_max) {
                sql = "SELECT * FROM recibos WHERE total = ? and entregado IS NOT NULL"
                params = [total_max]
            }else if (mes) {
                sql = "SELECT * FROM recibos WHERE mes = ? and entregado IS NOT NULL"
                params = [mes]
            }else if (año) {
                sql = "SELECT * FROM recibos WHERE año = ? and entregado IS NOT NULL"
                params = [año]
            }

      const [results, fields] = await connection.execute(sql, params)

      return results
  } else {
		return null
	}
}

async function getEntregadosPagados(id, num_servicio, codigo_barras,total_min,total_max,mes,año) {
	if (dbService.isConnected()) {
      const connection = dbService.getConnection()
      
			let sql = "SELECT * FROM recibos WHERE entregado IS NOT NULL and pagado IS NOT NULL"
			let params = []

			if (id) {
				sql = "SELECT * FROM recibos WHERE id = ? and entregado IS NOT NULL and pagado IS NOT NULL"
				params = [id]
			} else if (num_servicio) {
				sql = "SELECT * FROM recibos WHERE num_servicio = ? and entregado IS NOT NULL and pagado IS NOT NULL"
				params = [num_servicio]
			} else if (codigo_barras) {
				sql = "SELECT * FROM recibos WHERE codigo_barras = ? and entregado IS NOT NULL and pagado IS NOT NULL"
				params = [codigo_barras]
			}else if (total_min) {
                sql = "SELECT * FROM recibos WHERE total = ? and entregado IS NOT NULL and pagado IS NOT NULL"
                params = [total_min]
            }else if (total_max) {
                sql = "SELECT * FROM recibos WHERE total = ? and entregado IS NOT NULL and pagado IS NOT NULL"
                params = [total_max]
            }else if (mes) {
                sql = "SELECT * FROM recibos WHERE mes = ? and entregado IS NOT NULL and pagado IS NOT NULL"
                params = [mes]
            }else if (año) {
                sql = "SELECT * FROM recibos WHERE año = ? and entregado IS NOT NULL and pagado IS NOT NULL"
                params = [año]
            } 

      const [results, fields] = await connection.execute(sql, params)

      return results
  } else {
		return null
	}
}

async function getEntregadosPagadosCancelados(id, num_servicio, codigo_barras,total_min,total_max,mes,año) {
	if (dbService.isConnected()) {
      const connection = dbService.getConnection()
      
			let sql = "SELECT * FROM recibos WHERE entregado IS NOT NULL and pagado IS NOT NULL and cancelado IS NOT NULL"
			let params = []

			if (id) {
				sql = "SELECT * FROM recibos WHERE id = ? and entregado IS NOT NULL and pagado IS NOT NULL and cancelado IS NOT NULL"
				params = [id]
			} else if (num_servicio) {
				sql = "SELECT * FROM recibos WHERE num_servicio = ? and entregado IS NOT NULL and pagado IS NOT NULL and cancelado IS NOT NULL"
				params = [num_servicio]
			} else if (codigo_barras) {
				sql = "SELECT * FROM recibos WHERE codigo_barras = ? and entregado IS NOT NULL and pagado IS NOT NULL and cancelado IS NOT NULL"
				params = [codigo_barras]
			}else if (total_min) {
                sql = "SELECT * FROM recibos WHERE total = ? and entregado IS NOT NULL and pagado IS NOT NULL and cancelado IS NOT NULL"
                params = [total_min]
            }else if (total_max) {
                sql = "SELECT * FROM recibos WHERE total = ? and entregado IS NOT NULL and pagado IS NOT NULL and cancelado IS NOT NULL"
                params = [total_max]
            }else if (mes) {
                sql = "SELECT * FROM recibos WHERE mes = ? and entregado IS NOT NULL and pagado IS NOT NULL and cancelado IS NOT NULL"
                params = [mes]
            }else if (año) {
                sql = "SELECT * FROM recibos WHERE año = ? and entregado IS NOT NULL and pagado IS NOT NULL and cancelado IS NOT NULL"
                params = [año]
            } 

      const [results, fields] = await connection.execute(sql, params)

      return results
  } else {
		return null
	}
}

async function getEntregadosCancelados(id, num_servicio, codigo_barras,total_min,total_max,mes,año) {
	if (dbService.isConnected()) {
      const connection = dbService.getConnection()
      
			let sql = "SELECT * FROM recibos WHERE entregado IS NOT NULL and cancelado IS NOT NULL"
			let params = []

			if (id) {
				sql = "SELECT * FROM recibos WHERE id = ? and entregado IS NOT NULL and cancelado IS NOT NULL"
				params = [id]
			} else if (num_servicio) {
				sql = "SELECT * FROM recibos WHERE num_servicio = ? and entregado IS NOT NULL and cancelado IS NOT NULL"
				params = [num_servicio]
			} else if (codigo_barras) {
				sql = "SELECT * FROM recibos WHERE codigo_barras = ? and entregado IS NOT NULL and cancelado IS NOT NULL"
				params = [codigo_barras]
			}else if (total_min) {
                sql = "SELECT * FROM recibos WHERE total = ? and entregado IS NOT NULL and cancelado IS NOT NULL"
                params = [total_min]
            }else if (total_max) {
                sql = "SELECT * FROM recibos WHERE total = ? and entregado IS NOT NULL and cancelado IS NOT NULL"
                params = [total_max]
            }else if (mes) {
                sql = "SELECT * FROM recibos WHERE mes = ? and entregado IS NOT NULL and cancelado IS NOT NULL"
                params = [mes]
            }else if (año) {
                sql = "SELECT * FROM recibos WHERE año = ? and entregado IS NOT NULL and cancelado IS NOT NULL"
                params = [año]
            } 

      const [results, fields] = await connection.execute(sql, params)

      return results
  } else {
		return null
	}
}

async function nuevoRecibo(datos) {
	if (dbService.isConnected()) {
      const connection = dbService.getConnection()
      
			let sql = "INSERT INTO recibos (num_servicio, codigo_barras, total, mes, año, consumo, nivel) VALUES (?, ?, ?, ?, ?, ?, ?)"
			let params = [datos.num_servicio, datos.codigo_barras, datos.total, datos.mes, datos["año"], datos.consumo, datos.nivel]

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

async function notificarRecibo(num_servicio, datos) {
	if (dbService.isConnected()) {
      const connection = dbService.getConnection()
      
			let sql = "UPDATE recibos SET actualizado = NOW(), notificado = NOW(), firma_notificacion = ? WHERE num_servicio = ?"
			let params = [datos.firma_notificacion, num_servicio]

      const result = await connection.execute(sql, params)

      return [200, result]
  } else {
		return [500, null]
	}
}

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

module.exports = {
	getTodos,
	getPagados,
	getPagadosCancelados,
    getCancelados,
    getEntregados,
    getEntregadosPagados,
    getEntregadosPagadosCancelados,
    getEntregadosCancelados,
	nuevoRecibo,
	pagarRecibo,
	entregarRecibo,
    notificarRecibo,
	cancelarRecibo
}