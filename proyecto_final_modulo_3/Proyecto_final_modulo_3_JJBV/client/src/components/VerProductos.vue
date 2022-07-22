
<template>  
    <template v-for="producto in productos">
        <div class="d-flex justify-content-between">
            <span>{{producto.nombre}}</span>
            <span> $ {{producto.precio}} pesos</span>
        </div>
    </template>
</template>

<script setup>
    import {ref, inject, onMounted, onBeforeMount} from "vue"

    const id = ref(null)

    const productos = inject("productos/data")
    const fetchObtenerProductos =inject("productos/@fetchObtener")

    onMounted(() => {
        fetchObtenerProductos()
        id.value = setInterval(fetchObtenerProductos, 5000)
    })

    onBeforeMount(() => {
        clearInterval(id.value)    
    })
</script>
