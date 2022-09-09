import { alertController } from "@ionic/core"

export async function putEvidencia(evidencia: any) {
    const url = `http://localhost:5000/api/evidencias/nueva`
    try {
        const response = await fetch(url, {
            method: "put",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(evidencia)
        })

        if (!response.ok) {
            const error = await response.text()
            throw new Error(error)
        }

        const alert = await alertController.create({
            message: "La evidencia ha sido enviada"
        })
        await alert.present()
        return true
    } catch (error) {
        console.warn(error)
        const alert = await alertController.create({
            message: `${error}`
        })
        await alert.present()
        return false
    }
}