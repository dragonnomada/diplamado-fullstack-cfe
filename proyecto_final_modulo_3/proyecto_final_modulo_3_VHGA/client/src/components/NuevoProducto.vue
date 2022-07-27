<template>
    <input type="text" placeholder="Nombre Producto" v-model="nombre">
    <input type="number" placeholder="Precio Producto" v-model="precio">
    <button @click="fetchNuevoProducto(nombre, precio)">Agregar Producto</button>
</template>

<script setup>
    import {ref, inject} from "vue"

    const nombre = ref("")
    const precio = ref(0)

    const fetchNuevoProducto = inject("productos/@fetchNuevo")
</script>