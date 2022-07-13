<!-- SFC (.vue) -->

<!-- Template: Vista -->
<template>
  <IniciarSesion :usuario-defecto="user"></IniciarSesion>
</template>

<!-- Script      : Lógica Option API -->
<!-- Script setup: Lógica Composition API -->
<script setup>
import IniciarSesion from "./components/IniciarSesion.vue"

import {ref} from "vue"

const user = ref("admin")
</script>

<!-- Style       : Diseño Global -->
<!-- Style scoped: Diseño Local -->
<style>
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css);
</style>