<template>

<table class="table table-striped table-bordered overflow-auto">
  <thead class="bg-warning">
    <tr class="text-white">
      <th scope="col">Nombre </th>
      <th scope="col">Precio</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="producto in products">
      <th >{{producto.nombre}}</th>
      <td>$ {{producto.precio}} MXN</td>
    </tr>
  </tbody>
</table>

</template>

<script setup>
import { ref, inject, onMounted, onBeforeUnmount } from "vue"

const id = ref(null)
const products = inject("products/data")
const getProducts = inject("products/@getProducts")

onMounted(() => {

    getProducts()
    id.value = setInterval(getProducts, 20000)
})

onBeforeUnmount(() => {

    clearInterval(id.value)
})

</script>