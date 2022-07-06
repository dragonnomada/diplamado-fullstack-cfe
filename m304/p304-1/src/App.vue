<template>
  <h1>{{title}}</h1>
  <hr>
  <button @click="saludar()">Pulsame</button>
</template>

<script setup>
import { ref } from 'vue'

const title = ref("Hola Vue")

function saludar() {
  title.value = "Modificado"
}
</script>