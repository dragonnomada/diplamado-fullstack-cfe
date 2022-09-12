import { createApp } from 'vue'
import { createStore } from "vuex"

import App from './App.vue'

import './assets/main.css'

const app = createApp(App)

const store = createStore({
    state() {
        // TODO: Cargar el store
        const contador = Number(localStorage.getItem("contador") || "0")
        return {
            lock: false,
            value: contador
        }
    },
    getters: {
        lockLabel(state) {
            return state.lock ? "[BLOQUEADO]": "[DESBLOQUEADO]"
        }
    },
    mutations: {
        increment(state, step = 1) {
            state.value = state.value + step
            // TODO: Guardar el store
            localStorage.setItem("contador", state.value)
        },
        lock(state) {
            state.lock = true
        },
        unlock(state) {
            state.lock = false
        },
        setLock(state, lock) {
            state.lock = lock
        },
        setLockAndValue(state, { lock, value }) {
            state.lock = lock
            state.value = value
        },
        // addProduct(state, product) {
        //     state.products.push(product)
        // }
    },
    actions: {
        async sleepAndIncrement(store, timeout) {
            store.commit("lock")
            await new Promise(resolve => setTimeout(resolve, timeout))
            store.commit("increment")            
            store.commit("unlock")
        },
        // async newProduct(context, { name, price }) {
        //     const response = await fetch("api/productos", {
        //         ...
        //         body: JSON.stringify({
        //             name,
        //             price
        //         })
        //     })
        //     const product = await response.json()

        //     context.commit("addProduct", product)
        // }
    }
})

app.use(store)

app.mount('#app')
