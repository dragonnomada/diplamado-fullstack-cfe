import type { Ref } from 'vue'
import { ref, watch } from "vue"

import { Filesystem, Directory, Encoding } from '@capacitor/filesystem'

import { menuController } from "@ionic/vue"

export const anomalias: Ref<any> = ref({}) // anomalias.value = {}
export const anomaliaSeleccionada: Ref<null | any> = ref(null)
export const tiposAnomalias = ref([])
export const descripcionAnomalia: Ref<string> = ref("")
export const tipoAnomaliaSeleccionado: Ref<number | null> = ref(null)

watch(tiposAnomalias, tipos => {
    console.log(tipos)
})

export async function publicarAnomaliaSeleccionada() {
    await publicarAnomalia(anomaliaSeleccionada.value.anomaliaId, tipoAnomaliaSeleccionado.value, descripcionAnomalia.value)
}

async function publicarAnomalia(anomaliaId: string, tipoAnomaliaSeleccionado: number | null, descripcion: string) {
    const datosAnomaliaPublicar = {
        id_usuario: 1,
        latitud: 123,
        longitud: 456,
        codigo: anomaliaId,
        id_tipo_anomalia: tipoAnomaliaSeleccionado,
        descripcion: descripcion
    }

    try {
        const url = `http://localhost:5000/api/anomalias/${anomaliaId}/publicar`
        const response = await fetch(url, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datosAnomaliaPublicar)
        })

        if (!response.ok) {
            const error = await response.text()
            throw new Error(error)
        }

        anomaliaSeleccionada.value.publicada = true
    } catch (error) {
        console.warn(error)
        // TODO: Guardar los datos de la publicación en un archivo
        // cuándo haya internet mandar a publicar los pendientes del archivo
    }
}

export function seleccionarTipoAnomalia(idTipoAnomalia: number) {
    tipoAnomaliaSeleccionado.value = idTipoAnomalia
}

export async function autoCargarAnomalias() {
    try {
        const { data } = await Filesystem.readFile({
            path: 'secrets/tiposAnomalias.json',
            directory: Directory.Library,
            encoding: Encoding.UTF8,
        })
        tiposAnomalias.value = JSON.parse(data)
    } catch (error) {
        console.warn("No se pueden cargar los tipos de anomalías", error)
    }
}

export async function cargarTiposAnomalias() {
    try {
        const response = await fetch("http://localhost:5000/api/anomalias/tipos")
        if (!response.ok) {
            const error = await response.text()
            throw new Error(error)
        }
        tiposAnomalias.value = await response.json()
        await Filesystem.writeFile({
            path: 'secrets/tiposAnomalias.json',
            directory: Directory.Library,
            encoding: Encoding.UTF8,
            data: JSON.stringify(tiposAnomalias.value)
        })
    } catch(error) {
        await autoCargarAnomalias()
    }
}

export async function crearAnomalia(latitude: number, longitude: number, map: any) {
    const anomaliaId = Math.random().toString(32).slice(2) // ID: 13 (32 digitos y letras) 1/13^32

    const anomalia = {
        anomaliaId,
        marcador: {
            id: 0,
            title: `Anomalía #${anomaliaId}`,
            coordinate: {
                lat: latitude,
                lng: longitude
            }
        },
        publicada: false,
        registrada: false,
        registro: null // { >>> API }
    }

    const markerId = await map.value.addMarker(anomalia.marcador)

    anomalia.marcador.id = markerId

    anomalias.value[markerId] = anomalia

    console.log("Marcador creado", markerId, anomaliaId, latitude, longitude)

    // Guardar localmente las anomalía mientras no estén registradas en la base de datos
    // Mandar a llamar al API para registrar la animalía
    // y si es correcto borrar la anomalía del archivo local
}

export async function abrirAnomalia(markerId: string) {
    console.log("Abrir la anomalía con marcador", markerId)

    // TODO: Abrir la anomalía
    const anomalia = anomalias.value[markerId]

    console.log({ ...anomalia, marcador: { ...anomalia.marcador } })

    anomaliaSeleccionada.value = anomalia

    await menuController.open("detalles")
}