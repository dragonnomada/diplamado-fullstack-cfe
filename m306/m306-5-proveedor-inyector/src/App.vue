<template>
<Contador></Contador>
<Contador :inicial="8"></Contador>
<Contador :inicial="-8"></Contador>
<hr>
<p>{{ conteo }}</p>
<IncrementarContador></IncrementarContador>
</template>

<script setup>
import Contador from "./components/Contador.vue"
import IncrementarContador from "./components/IncrementarContador.vue"

import { provide, ref, defineProps } from "vue";

const props = defineProps(['inicial'])

const conteo = ref(props.inicial || 100)

// Provee un estado (ref) a todos los hijos y los hijos de los hijos ... (sin importar el nivel)
provide("conteo", conteo)
</script>