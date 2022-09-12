export default {
    state() {
        return {
            lock: false,
            value: 1
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
        }
    },
    actions: {
        async sleepAndIncrement(store, timeout) {
            store.commit("lock")
            await new Promise(resolve => setTimeout(resolve, timeout))
            store.commit("increment")            
            store.commit("unlock")
        }
    }
}