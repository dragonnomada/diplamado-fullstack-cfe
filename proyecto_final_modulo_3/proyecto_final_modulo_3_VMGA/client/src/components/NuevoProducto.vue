<template>
   <div class="data">
      <input type="text"   placeholder="Nombre del producto" v-model="nombre">
      <input type="number" required min="0" step="0.01" title="Precio" v-model="precio">
      <button @click="fetchNuevoProducto(nombre, precio)">Agregar</button>
   </div>
</template>

<script setup>
  import { ref, inject } from "vue"

  var nombre = ref("")
  var precio = ref(0)

  const fetchNuevoProducto = inject("productos/@fetchNuevo")

</script>

 
<style scoped>
.data {
    border: 1px solid gray;
    padding: 20px;
    display: flex;
    flex-direction: columns;
    align-items: rigth;    
}
</style>
