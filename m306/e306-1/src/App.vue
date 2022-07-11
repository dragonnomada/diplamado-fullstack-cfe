<template>
<h1>Ejercicio e306-1</h1>

<Reloj></Reloj>
<!-- <MiComponente></MiComponente> -->
<!-- <mi-componente></mi-componente> -->
</template>

<!-- Composition API -->
<script setup>
import Reloj from "./components/Reloj.vue"
</script>

<!-- 

Option API

<script>
import Reloj from "./components/Reloj.vue"
export default {
  components: {
    Reloj: Reloj
  }
}
</script>

-->

<!-- 

Crear proyecto:

> npm init vue@3

  ? project name: e306-1
  ...

> cd e306-1
> npm install

> npm run dev

  http://localhost:3000

-->