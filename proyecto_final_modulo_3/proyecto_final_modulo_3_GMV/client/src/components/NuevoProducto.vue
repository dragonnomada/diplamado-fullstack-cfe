<template>
    <input type="text" placeholder="Nombre" v-model="nombre">
    <input type="number" placeholder="Precio" v-model="precio">
    <button @click="fetchNuevoProducto(nombre,precio)">Agregar</button>
</template>

<script setup>
    import { ref, inject } from "vue"

    const nombre = ref("")
    const precio = ref(0)

    const fetchNuevoProducto = inject("productos/@fetchNuevo")
</script>