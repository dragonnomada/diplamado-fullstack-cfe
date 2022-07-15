<script setup>
import NuevoProducto from "./components/NuevoProducto.vue"
import VerProductos from "./components/VerProductos.vue"

import { ref, provide } from "vue"

const dataProductos = ref([])
const statusObtenerProductos = ref("unknown")
const statusNuevoProducto = ref("unknown")

const fetchNuevoProducto = async (nombre, precio) => {
  statusNuevoProducto.value = "fetching"
  const url = "http://localhost:5000/api/cfe/productos/nuevo"
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: Math.random().toString(16).slice(2),
      nombre,
      precio
    })
  }
  const response = await fetch(url, options)
  statusNuevoProducto.value = "fetched"
  if (response.ok) {
    statusNuevoProducto.value = "success"
  } else {
    statusNuevoProducto.value = "error"
  }
}

const fetchObtenerProductos = async (usuario, contraseña) => {
  statusObtenerProductos.value = "fetching"
  const url = "http://localhost:5000/api/cfe/productos"
  const response = await fetch(url)
  statusObtenerProductos.value = "fetched"
  if (response.ok) {
    statusObtenerProductos.value = "ok"
    dataProductos.value = await response.json()
    statusObtenerProductos.value = "success"
  } else {
    statusObtenerProductos.value = "error"
  }
}

provide("productos/data", dataProductos)
provide("productos/status:nuevo", statusNuevoProducto)
provide("productos/status:obtener", statusObtenerProductos)
provide("productos/@fetchNuevo", fetchNuevoProducto)
provide("productos/@fetchObtener", fetchObtenerProductos)
</script>

<template>
  <div>
    <pre><code>{{ statusNuevoProducto }}</code></pre>
    <pre><code>{{ statusObtenerProductos }}</code></pre>
    <!-- <pre><code>{{ dataProductos || "null" }}</code></pre> -->
    <button @click="fetchNuevoProducto('hola', 33.3)">Prueba Nuevo Producto</button>
    <button @click="fetchObtenerProductos()">Prueba Obtener Productos</button>
  </div>
  <div>
    <NuevoProducto />
  </div>
  <div>
    <VerProductos />
  </div>
</template>