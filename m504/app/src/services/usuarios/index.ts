import type { Ref } from 'vue'
import { ref, computed } from "vue"

import { alertController } from '@ionic/vue';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem'

export const usuario: Ref<null | { correo: string, token: string }> = ref(null) // usuario.value = null

// Inicio de Sesión

export const sesionIniciada = computed(() => usuario.value !== null)

export async function autoIniciarSesion() {
    try {
        const usuarioLocal = await Filesystem.readFile({
            path: 'secrets/usuarioLocal.json',
            directory: Directory.Library,
            encoding: Encoding.UTF8,
        })
        console.log(usuarioLocal.data)
        console.log("Sesión recuperada")
        usuario.value = JSON.parse(usuarioLocal.data)
        return true
    } catch (error) {
        console.warn(error)
        console.log("El usuario no ha iniciado sesión")
        false
    }
}

// Activar la Sesión
export async function activarSesion(correo: string, token: string) {
    try {
        await Filesystem.writeFile({
            path: 'secrets/usuarioLocal.json',
            directory: Directory.Library,
            encoding: Encoding.UTF8,
            data: JSON.stringify({
                correo,
                token
            })
        })
        console.log("Sesión guardada")
    } catch (error) {
        console.log("No se pudo guardar la sesión")
    }

    usuario.value = {
        correo,
        token
    }
}

// Servicio: Iniciar Sesión
export async function apiIniciarSesion(correo: string, contraseña: string) {
    // TODO: Llamada al API de iniciar sesión
    const response = await fetch("http://localhost:5000/auth/login", {
        method: "post",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            correo,
            contraseña
        })
    })

    if (response.ok) {
        const data = await response.json() // { error, token, correo, token }
        if (data.error) {
            console.log(data.message)
        } else {
            console.log(data.correo, data.token)
            // TODO: Activar Sesión (actualizar el archivo de usuario local y la referencia)
            await activarSesion(data.correo, data.token)
        }
    } else {
        const error = await response.json()
        console.warn(error)
        const alert = await alertController.create({
            header: error.message,
            buttons: [
                {
                    text: "aceptar",
                    handler: () => {
                        alert.dismiss()
                    }
                }
            ]
        })
        await alert.present()
    }
}

export async function cerrarSesion() {
    try {
        await Filesystem.deleteFile({
            path: 'secrets/usuarioLocal.json',
            directory: Directory.Library
        })
        console.log("Se ha borrado la sesión local")
    } catch (error) {
        console.warn(error)
        console.log("No se puede borrar el archivo del usuario local")
    }
    usuario.value = null
}

export async function iniciarSesion() {
    // TODO: Lanzar un formulario y llamar al api /auth/login
    const alert = await alertController.create({
        header: "Iniciar Sesión",
        buttons: [
            {
                text: "Aceptar",
                handler: async alertData => {
                    console.log(alertData)
                    // Hacer un fetch o llamar a la función encargada de iniciar sesión
                    await apiIniciarSesion(alertData.correo, alertData.contraseña)
                }
            }
        ],
        inputs: [
            {
                name: "correo",
                type: "text",
                placeholder: "Correo"
            },
            {
                name: "contraseña",
                type: "password",
                placeholder: "Contraseña"
            },
        ]
    })

    await alert.present()
}

export default {
    usuario,
    sesionIniciada,
    iniciarSesion,
    autoIniciarSesion,
    cerrarSesion,
    apiIniciarSesion,
    activarSesion
}