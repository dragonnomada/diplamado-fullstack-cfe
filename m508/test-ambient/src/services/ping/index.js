import { ref } from "vue"

export const host = ref(import.meta.env.VITE_API_HOST)
export const port = ref(import.meta.env.VITE_API_PORT)
export const db = ref(import.meta.env.VITE_API_DB)

export async function ping() {
    const url = `http://${host.value}:${port.value}/${db.value}`

    try {
        const response = await fetch(url)
        return response.ok
    } catch (error) {
        return false
    }
}