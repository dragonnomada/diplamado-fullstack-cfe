<script setup>

import { ref, provide, defineProps, onMounted } from "vue"
import newProduct from './components/newProduct.vue'
import products from "./components/products.vue"


const dataproducts = ref([])
const statusObtenerproducts = ref("unknown")
const statusNuevoProducto = ref("unknown")
const showNew = ref(false)
const showLists = ref(false)

const modal = ref(null)


// const props = defineProps(['descripcion-producto'])
// const descrProducto = ref(props["descripcion-producto"] || "")
// provide("descrProducto", descrProducto)

const product = async (nombre, precio) => {
	statusNuevoProducto.value = "fetching"
	const url = "http://localhost:3000/api/cfe/products/nuevo"
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
    	showModal("se agrego con exito")
	} else {
		statusNuevoProducto.value = "error"
	}

}
const getProducts = async (usuario, contraseña) => {
	statusObtenerproducts.value = "fetching"
	const url = "http://localhost:3000/api/cfe/products"
	const response = await fetch(url)
	statusObtenerproducts.value = "fetched"
	if (response.ok) {
		statusObtenerproducts.value = "ok"
		dataproducts.value = await response.json()
		statusObtenerproducts.value = "success"
    
	} else {
		statusObtenerproducts.value = "error"
	}
}


function showNewProduct(){
  showNew.value = true
  showLists.value = false
}


function showProducts(){

   showNew.value = false
  showLists.value = true
  
}
onMounted(() => {
  modal.value = new bootstrap.Modal("#exampleModal")
})


function showModal() {
  modal.value.show()
}


function cerrarModal() {
  modal.value.hide()
  console.log("va por los productos");
  showProducts()
}



provide("products/data", dataproducts)
provide("products/status:nuevo", statusNuevoProducto)
provide("products/status:obtener", statusObtenerproducts)
provide("products/@postNew", product)
provide("products/@getProducts", getProducts)


</script>

<template>

  <!-- <newProduct :descripcion-producto="descrProducto"></newProduct> -->

   <div class="mt-5 text-center p-2">
        <button @click="showNewProduct()" class="btn btn-primary profile-button p-2" type="button">Nuevo Producto</button>
        <button @click="showProducts()" class="btn btn-primary profile-button p-2" type="button">products</button>
        </div>

  <br>
  <br>
  <div v-if="showNew">
    <newProduct :descripcion-producto="descrProducto"></newProduct>
  </div> 
  <div v-if="showLists">
    <products></products>
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

        </div>
      </div>
    </div>
  </div>
  
</template>

<style scoped>


</style>
