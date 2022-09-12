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
import { useContador } from './stores/contador'

const contador = useContador(state => {
  console.log("Nuevo contador:", state)
})
</script>