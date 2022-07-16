<script setup>
import { ref, provide, defineProps, onMounted } from "vue"
import NuevoProducto from "./components/NuevoProducto.vue"
import VerProductos from "./components/VerProductos.vue"



const dataProductos = ref([])
const statusObtenerProductos = ref("unknown")
const statusNuevoProducto = ref("unknown")
const mostrarNuevoProducto = ref(false)
const mostrarListaProducto = ref(false)

const modal = ref(null)


// const props = defineProps(['descripcion-producto'])
// const descrProducto = ref(props["descripcion-producto"] || "")

// provide("descrProducto", descrProducto)

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
    	abrirModal("se agrego con exito")
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
    
    //fetchObtenerProductos()
	} else {
		statusObtenerProductos.value = "error"
	}
}



function muestraNuevoProducto(){
  mostrarNuevoProducto.value = true
  mostrarListaProducto.value = false
}

function muestraListaProductos(){
  //fetchObtenerProductos()
   mostrarNuevoProducto.value = false
  mostrarListaProducto.value = true
  
}


onMounted(() => {
  modal.value = new bootstrap.Modal("#exampleModal")
})
function abrirModal() {
  modal.value.show()
}
function cerrarModal() {
  modal.value.hide()
  muestraListaProductos()

}

provide("productos/data", dataProductos)
provide("productos/status:nuevo", statusNuevoProducto)
provide("productos/status:obtener", statusObtenerProductos)
provide("productos/@fetchNuevo", fetchNuevoProducto)
provide("productos/@fetchObtener", fetchObtenerProductos)
</script>

<template>
  <div>
<!--   <pre><code>{{ statusNuevoProducto }}</code></pre> 
  <pre><code>{{ statusObtenerProductos }}</code></pre> 
  <pre><code>{{ dataProductos || "null" }}</code></pre>  -->
    <button @click="muestraNuevoProducto()">Prueba Nuevo Producto</button>
    <button @click="muestraListaProductos()">Prueba Obtener Productos</button>
  </div>
  <br>
  <br>
  <div v-if="mostrarNuevoProducto">
    <NuevoProducto :descripcion-producto="descrProducto"></NuevoProducto>
  </div> 
  <div v-if="mostrarListaProducto">
    <VerProductos></VerProductos>
  </div> 
  
    <br> 



 <!-- Button trigger modal -->
<!--   <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Launch demo modal
  </button> -->

  

  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-success">
          <h5 class="modal-title text-white " id="exampleModalLabel">
			<i class="fa-regular fa-circle-check text-white"></i> Exito</h5>
          <button type="button" class="btn-close"  @click="cerrarModal()" aria-label="Close"></button>
        </div>
        <div class="modal-body">
         Se agrego satisfactoriamente {{nombre}}
        </div>
        <div class="modal-footer">
			 <button class="btn btn-warning" @click="cerrarModal()">Cerrar</button>
<!--           <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

