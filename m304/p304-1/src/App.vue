<template>
  <h1>Hola Vue mod</h1>
  <hr>
  <button @click="saludar()">Pulsame</button>
</template>

<script setup>
function saludar() {
  alert("Hola mundo")
}
</script>