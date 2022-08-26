require("dotenv").config()

const db = require("./services/db")
const UsuariosService = require("./services/db/usuarios")

db.connect().then(async () => {
    const usuarios_activos = await UsuariosService.activos()
    const usuarios_inactivos = await UsuariosService.inactivos()

    console.log(usuarios_activos)
    console.log(usuarios_inactivos)

    const usuario_id = Math.random().toString(16).slice(2)

    const insertId = await UsuariosService.nuevo({
        nombre: `usu${usuario_id}`,
        correo: `usu${usuario_id}@test.com`,
        contraseña: `usu${usuario_id}_123`,
        activo: Math.random() >= 0.5
    })

    console.log(insertId)

    await db.disconnect()
}).catch(error => console.log(error))