<template>
<table class="table table-striped table-bordered overflow-auto">
  <thead class="bg-warning">
    <tr class="text-white">
      <th scope="col">Descripcion </th>
      <th scope="col">Costo</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="producto in productos">
      <th >{{producto.nombre}}</th>
      <td>$ {{producto.precio}} MXN</td>
    </tr>
  </tbody>
</table>
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