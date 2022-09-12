export default {
    async fetchProducts(store, limit) {
        // Llamar a un servicio ProductoApi.fetchAll()
        try {
            const response = await fetch(`http://.../api/productos?limit=${limit || 100}`)
            if (!response.ok) {
                const error = await response.text()
                throw new Error(error)
            }
            const products = await response.json()
            for (let product of products) {
                store.commit("addProduct", product)
            }
        } catch (error) {
            console.warn(error)
        }
    }
}