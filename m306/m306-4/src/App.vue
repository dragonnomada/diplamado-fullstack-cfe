<template>
<h1>Reloj</h1>
<Reloj></Reloj>
<Reloj :zone="zonaLocal"></Reloj>
<Reloj :zone="-6"></Reloj>
<Reloj :zone="-2"></Reloj>
<Reloj :zone="3"></Reloj>
<Reloj :zone="5 + 3"></Reloj>
<input type="range" min="-12" max="12" v-model="zonaLocal">
</template>

<script setup>
import Reloj from "./components/Reloj.vue"

import { ref } from "vue"

const zonaLocal = ref(0)
</script>