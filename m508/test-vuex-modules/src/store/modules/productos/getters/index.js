export default {
    total(state) {
        let total = 0
        for (let product of state.products) {
            total += product.price * 1.16
        }
        return total
    }
}