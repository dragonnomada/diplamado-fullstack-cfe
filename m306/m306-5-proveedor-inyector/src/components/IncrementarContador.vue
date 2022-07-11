<template>
    <button @click="incrementar()">Incrementar</button>
</template>

<script setup>
import { inject } from "vue"

const conteo = inject('conteo')

function incrementar() {
    conteo.value++
}
</script>