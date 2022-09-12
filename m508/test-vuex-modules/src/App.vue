<template>
  <h1>Productos</h1>
  <p>Total: ${{ store.getters["productos/total"] }}</p>
  <div>
    <template v-for="producto in store.state.productos.products">
      <p>{{ producto.name }} ${{ producto.price }}</p>
    </template>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()

console.log(store)
</script>