<template>
    <template v-for="producto in productos">
      <div class="productos">
          <span>{{producto.nombre}}</span>
          <span> ${{producto.precio}} MXN</span>
      </div>
    </template>
</template>

<script setup>
import { ref, inject, onMounted, onBeforeUnmount } from "vue"

const id = ref(null)

const productos = inject("productos/data")
const fetchObtenerProductos = inject("productos/@fetchObtener")

onMounted(() => {
    fetchObtenerProductos()
    id.value = setInterval(fetchObtenerProductos, 20000)
})

onBeforeUnmount(() => {
    clearInterval(id.value)
})
</script>

<style scoped>
.productos {
    border: 1px solid gray;
    padding: 2px;
    color: navy;
    background: rgb(223, 221, 221); 
}

</style>