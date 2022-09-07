import { ref } from "vue"; 

export const anomalia = ref(null)
export const anomalias = ref([])

export async function fetchAnomalia(id) {
    const url = `http://localhost:5000/api/anomalias/${id}`
    try {
        const response = await fetch(url)
        if (!response.ok) {
            const error = await response.text()
            throw new Error(error)
        }
        anomalia.value = await response.json()
        localStorage.setItem(`anomalia.${id}`, JSON.stringify(anomalia))
    } catch (error) {
        console.warn(error)
        anomalia.value = JSON.parse(localStorage.getItem(`anomalia.${id}`) || "null")
    }
}

export async function fetchAllAnomalias() {
    const url = `http://localhost:5000/api/anomalias`
    try {
        const response = await fetch(url)
        if (!response.ok) {
            const error = await response.text()
            throw new Error(error)
        }
        anomalias.value = await response.json()
        console.log("Anomalias cargadas", anomalias.value)
        localStorage.setItem(`anomalias`, JSON.stringify(anomalia))
    } catch (error) {
        console.warn(error)
        anomalia.value = JSON.parse(localStorage.getItem(`anomalias`) || "[]")
    }
}