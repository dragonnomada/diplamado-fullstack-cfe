<script setup>
  import { ref, provide} from "vue"

  const dataProductos = ref(null)
  const statusObtenerProductos = ref("unknown")
  const statusNuevoProducto = ref("unknown")
  const mostrarProductos = ref(false)
  

  function regresarInicio()
  {
    mostrarProductos = false;
  }

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
    statusNuevoProducto.value = "Agregando..."
    if (response.ok) {
      statusNuevoProducto.value = "Producto Agregado Correctamente"
      setTimeout(() => {
        statusNuevoProducto.value = "unknown"
      }, 5000)
      
    } else {
      statusNuevoProducto.value = "Ocurrió un error"
      setTimeout(() => {
        statusNuevoProducto.value = "unknown"
      }, 5000)
    }
  }


  const fetchObtenerProductos = async (showTable) => {
    if(showTable)
    {
      mostrarProductos.value = true
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
    else
    {
      mostrarProductos.value = false
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
  <div id="Menu" class="pb-2">
    <header class="p-3 bg-dark text-white">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="#" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <span>Proyecto Final M3 LGHP</span>
          </a>

          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" class="nav-link px-2 text-white" @click="fetchObtenerProductos(false)">Inicio</a></li>
            <li><a href="#" class="nav-link px-2 text-white" @click="fetchObtenerProductos(true)">Productos</a></li>
            <li><a href="#" class="nav-link px-2 text-white" :disabled="true">Contacto</a></li>
            <li><a href="#" class="nav-link px-2 text-white" :disabled="true">Acerca de</a></li>
          </ul>
        </div>
      </div>
    </header>

  </div>
  <template v-if="!mostrarProductos">
    <div>
      <div class="p-2 border rounded shadow">
        <br>
          <!--<img class="mb-4" src="images/MU.png" alt="" width="100" height="100">-->
          <h1 class="h3 mb-3 font-weight-normal">Guardar Producto</h1>
          <template v-if="statusNuevoProducto !== 'unknown'">
            <div class="alert alert-warning">
              <div v-html="statusNuevoProducto"></div>
  
            </div>
          </template>
          <!--<label for="inputEmail" class="sr-only">Correo Electrónico</label>  -->
          <input type="text" class="form-control" placeholder="Producto" v-model="nombre" required>
          <br>
          <!--<label for="inputPassword" class="sr-only">Contraseña</label>-->
          <input type="text" class="form-control mb-3" placeholder="Precio" v-model="precio" >
          
          <div>
              <button style="margin-right: 10px;" class="w-100 btn btn-outline-primary" @click="fetchNuevoProducto(nombre, precio)"> 
                <span class="pe-2"><i class="fa-solid fa-plus"></i> </span>
                <span>Guardar Producto</span>
              </button>
              <br>
              <br>
              <button class="w-100 btn btn-outline-secondary" @click="fetchObtenerProductos(true)"> 
                <span class="pe-2"><i class="fa-solid fa-lock"></i> </span>
                Ver Productos
              </button>
          </div>
      </div>
    </div>
  </template>
  <template v-else>
    <div>
      <h1 class="h3 mb-3 font-weight-normal">Listado de Productos</h1>
      <div>
        <table class="table table-striped">
          <thead>
            <tr class="table-dark">
              <th>ID</th>
              <th>Producto</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            <tr class="" v-for="item in dataProductos" :key="item.id">
              <td>
                {{item.id}}
              </td>
              <td>
                {{item.nombre}}
              </td>
              <td>
                {{item.precio}}
              </td>
            </tr>
          </tbody>
          
        </table>
      </div>
      <button class="w-100 btn btn-outline-secondary" @click="fetchObtenerProductos(false)"> 
        <span class="pe-2"><i class="fa-solid fa-lock"></i> </span>
        Regresar a Captura
      </button>
    </div>
  </template>

  <div class="pt-2" id="PiePagina">
    <footer class="text-center text-lg-start bg-dark text-white">
      <!-- Copyright -->
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
        &copy; 2022 Copyright: Luis Gerardo Higuera Pérez
      </div>
      <!-- Copyright -->
    </footer>
  </div>
  
  </div>
</template>