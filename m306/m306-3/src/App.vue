<template>
<h1>Reloj</h1>
<Reloj></Reloj>
<Reloj :zone="zonaLocal"></Reloj>
<Reloj :zone="-6"></Reloj>
<Reloj :zone="-2"></Reloj>
<Reloj :zone="3"></Reloj>
<Reloj :zone="5 + 3"></Reloj>

<input type="range" min="-24" max="24" v-model="zonaLocal">
</template>

<script setup>
import Reloj from "./components/Reloj.vue"

import {ref} from "vue"

const zonaLocal = ref(-8)


</script>

<!-- 

Props son atributos que se pueden enviar a los componentes SFC (.vue)

Y esos atributos pueden especificarse de dos formas:

Estática: <componente [atributo 1]="valor 1" [atributo 2]>
  => [atributo 1] = "valor 1"
  => [atributo 2] = true
  ! (SÓLO LECTURA)

Dinámica: <componente :[atributo 1]="expresión 1" :[atributo 2]="false">
  => [atributo 1] = <expresión 1>
  => [atributo 2] = false
  ! (SÓLO LECTURA + DETECCIÓN DE CAMBIOS)

-->