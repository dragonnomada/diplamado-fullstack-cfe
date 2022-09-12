<template>
  <h1>{{ contador.state.lock ? "BLOQUEADO" : "DESBLOQUEADO" }}</h1>
  <h1>Contador: {{ contador.state.value }}</h1>
  <button @click="contador.actions.increment(10)">Incrementar</button>
  <button @click="contador.actions.lock()">Bloquear</button>
  <button @click="contador.actions.unlock()">Desbloquear</button>
  <button @click="contador.actions.toggleLock()">Alternar Bloqueo</button>
  <button @click="contador.actions.sleepAndIncrement()" :disabled="contador.state.lock">Dormir e Incrementar</button>
</template>

<script setup>
import { useRxState } from "vuse-rx"
import { from, startWith } from "rxjs"

const state = {
  lock: false,
  value: 1
}

const actions = {
  // Una acción es un meta-función que devuelve una función
  // que recibe el estado actual y devuelve las partes del nuevo estado
  // a actualizar
  increment(step = 1) {
    return state => {
      return {
        value: state.value + step
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
        value: value + step,
        // value: state.value + step, // reciente
        lock: false
      }      
    })()).pipe(
      startWith({
        lock: true
      })
    )
  }
}

const useContador = (subscriber) => useRxState(state)(actions).subscribe(subscriber)

const contador = useContador(state => {
  console.log("Nuevo contador:", state)
})
</script>