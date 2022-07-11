<template>
    <button @click="reiniciar()">Reiniciar</button>
</template>

<script setup>
import { inject } from "vue"

const conteo = inject('conteo')

function reiniciar() {
    conteo.value = 0
}
</script>