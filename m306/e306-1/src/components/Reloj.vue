<template>
<div>
<span>{{horas}}:{{minutos}}:{{segundos}}</span>
</div>
</template>

<!-- Option API -->
<script>
export default {
    data() {
        return {
            horas: 12,
            minutos: 34,
            segundos: 56
        }
    }
}
</script>

<!-- 

Composition API

<script setup>
import { ref } from 'vue'

const horas = ref(12)
const minutos = ref(34)
const segundos = ref(56)
</script>

-->