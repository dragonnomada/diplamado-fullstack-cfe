<template>
    <div style="border: 1px solid red">
        <PantallaContador></PantallaContador>
        <ControlesContador></ControlesContador>
    </div>
</template>

<script setup>
import PantallaContador from "./PantallaContador.vue"
import ControlesContador from "./ControlesContador.vue"

import { provide, ref, defineProps } from "vue";

const props = defineProps(['inicial'])

const conteo = ref(props.inicial || 0)

// Provee un estado (ref) a todos los hijos y los hijos de los hijos ... (sin importar el nivel)
provide("conteo", conteo)
</script>