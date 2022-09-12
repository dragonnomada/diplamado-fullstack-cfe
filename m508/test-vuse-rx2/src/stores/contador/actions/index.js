import { from, startWith } from "rxjs"

export default {
  // Una acción es un meta-función que devuelve una función
  // que recibe el estado actual y devuelve las partes del nuevo estado
  // a actualizar
  increment(step = 1) {
    return state => {
      return {
        value: Math.max(state.maxValue, state.value + step)
      }
    }
  },
  lock() {
    return state => {
      return {
        lock: true
      }
    }
  },
  unlock() {
    return state => {
      return {
        lock: false
      }
    }
  },
  setLock(lock) {
    return state => {
      return {
        lock
      }
    }
  },
  toggleLock() {
    return state => {
      return {
        lock: !state.lock
      }
    }
  },
  sleepAndIncrement(timeout = 5000, step = 1) {
    return state => from((async () => {
      const value = state.value // retenido
      await new Promise(resolve => setTimeout(resolve, timeout))
      return {
        value: Math.max(state.maxValue, value + step),
        // value: state.value + step, // reciente
        lock: false
      }
    })()).pipe(
      startWith({
        lock: true
      })
    )
  },
  reset: () => state => ({ value: 0 }),
  resetToMaxValue: () => state => ({ value: state.maxValue }),
}

// import actions from "./stores/contador/actions"

// USE:
//      const useContador = () => useRxState(state)(actions).suscribe()