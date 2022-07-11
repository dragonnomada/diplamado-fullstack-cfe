<template>
    <button @click="decrementar()">Decrementar</button>
</template>

<script setup>
import { inject } from "vue"

const conteo = inject('conteo')

function decrementar() {
    conteo.value--
}
</script>