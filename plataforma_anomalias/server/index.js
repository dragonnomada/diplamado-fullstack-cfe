const db = require("./services/db")
const UsuariosService = require("./services/db/usuarios")

db.connect().then(async () => {
    const usuarios_activos = await UsuariosService.activos()
    const usuarios_inactivos = await UsuariosService.inactivos()

    console.log(usuarios_activos)
    console.log(usuarios_inactivos)

    await db.disconnect()
}).catch(error => console.log(error))