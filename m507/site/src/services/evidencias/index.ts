import { ref } from "vue"

export const evidencias = ref([])

export async function getEvidencias() {
    const url = `http://localhost:5000/api/evidencias`
    try {
        const response = await fetch(url)

        if (!response.ok) {
            const error = await response.text()
            throw new Error(error)
        }

        const result = await response.json()

        evidencias.value = result
    } catch (error) {
        console.warn(error)
        evidencias.value = []
    }
}