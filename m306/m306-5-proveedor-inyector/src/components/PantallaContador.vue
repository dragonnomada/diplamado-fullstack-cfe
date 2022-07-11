<template>
    <h1>{{conteo}}</h1>
    <h2>{{tipoConteo}}</h2>
</template>

<script setup>
import { inject, computed } from 'vue'

const conteo = inject('conteo') // <= `ref`

const tipoConteo = computed(() => conteo.value >= 0 ? 'Positivo' : 'Negativo')
</script>