export default {
    addProduct(state, product) {
        state.products.push(product)
    },
    removeProduct(state, product) {
        state.products = state.products.filter(product_ => product_ !== product)
    },
    selectProductByIndex(state, index) {
        state.selectedProduct = state.products[index]
    },
}