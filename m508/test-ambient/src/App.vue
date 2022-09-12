<template>
  <h1>Host: {{ host }}</h1>
  <h1>Port: {{ port }}</h1>
  <h1>DB: {{ db }}</h1>
</template>

<script setup>
import { host, port, db, ping } from "./services/ping"

// console.log(process.env)
console.log(import.meta.env)
</script>