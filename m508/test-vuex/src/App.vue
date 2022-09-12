<template>
  <h1>Hola mundo</h1>
  <br>
  <p>{{ store.getters.lockLabel }}</p>
  <h2>Contador: {{ store.state.value }}</h2>
  <button @click="store.commit('increment', 2)">Incrementar</button>
  <button @click="store.commit('lock')">Bloquear</button>
  <button @click="store.commit('unlock')">Desbloquear</button>
  <button @click="store.commit('setLockAndValue', { lock: Math.random() > 0.5, value: Math.floor(Math.random() * 100) })">Ajustar aleatorio</button>
  <button @click="store.commit('setLockAndValue', { lock: false, value: 1 })">Reiniciar</button>
  <button @click="store.dispatch('sleepAndIncrement', 5000)" :disabled="store.state.lock">Dormir e Incrementar</button>
</template>

<script setup>
import { useStore } from "vuex"

const store = useStore()
</script>