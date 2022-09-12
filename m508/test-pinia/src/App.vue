<template>
  <h1>Reloj: {{ reloj.display }}</h1>
  <button @click="reloj.tic()">Tic</button>
  <button @click="reloj.tac()">Tac</button>
  <button @click="reloj.toc()">Toc</button>
  <hr>
  <h1>Reloj 2: {{ reloj2.display }}</h1>
  <button @click="reloj2.tic()">Tic 2</button>
  <button @click="reloj2.tac()">Tac 2</button>
  <button @click="reloj2.toc()">Toc 2</button>
</template>

<script setup>
import { useReloj } from './stores/reloj'

const reloj = useReloj()
const reloj2 = useReloj()
</script>