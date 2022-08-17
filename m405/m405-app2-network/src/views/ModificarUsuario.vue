<template>
<div class="container">
    <template v-if="connected">
        <input placeholder="Escribe el nombre del usuario" v-model="username">
    </template>
    <template v-else>
        <label>No hay conexión a internet, no se puede modifica el usuario <strong>{{ username }}</strong></label>
    </template>
</div>
</template>

<script setup>
import { ref, inject } from "vue"

const { connected, connectionType } = inject("network")

const username = ref("pepe")
</script>

<style scoped>
.container {
    padding: 12px;
}
</style>