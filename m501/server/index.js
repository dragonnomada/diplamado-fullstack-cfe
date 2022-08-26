const DBService = require("./services/db")
const UsuarioService = require("./services/db/usuarios")

DBService.connect().then(async () => {
    console.log("Conectado a la base de datos")

    const rows = await DBService.execute("SELECT NOW() AS FECHA_ACTUAL")

    console.log(rows)

    // Test UsuarioService
    {
        const usuarios_activos = await UsuarioService.activos()
        console.log("USUARIOS ACTIVOS:")
        console.log(usuarios_activos)

        const usuarios_inactivos = await UsuarioService.inactivos()
        console.log("USUARIOS INACTIVOS:")
        console.log(usuarios_inactivos)

        // const pepe_id = await UsuarioService.nuevo("Pepe", "pepe@gmail.com", "pepe123", "pepe.jpg", true)
        // console.log("Se creó al usuario pepe con id:", pepe_id)
        // const paco_id = await UsuarioService.nuevo("Paco", "paco@hotmail.com", "paco123", "paco.png", false)
        // console.log("Se creó al usuario paco con id:", paco_id)

    }

    await DBService.disconnect()

    console.log("Desconectado de la base de datos")
})
