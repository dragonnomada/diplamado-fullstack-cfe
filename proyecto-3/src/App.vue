<template>
  <!-- [Navbar] -->
  <div>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <div class="text-secondary">
            <span class="pe-2 text-primary"><i class="fa-solid fa-robot"></i></span>
            <span>Empresa Systems</span>
          </div>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Acerca de Nosotros</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Soluciones y Productos
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Desarrollo de Aplicaciones</a></li>
                <li><a class="dropdown-item" href="#">Diseño UI/UX</a></li>
                <li><a class="dropdown-item" href="#">Seguridad Informática</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item text-primary" href="#">Ver más ...</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Contacto</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search">
            <button class="btn btn-outline-primary" type="submit"><i class="fa-solid fa-search"></i></button>
          </form>
        </div>
      </div>
    </nav>
  </div>
  <!-- [/Navbar] -->
  <template v-if="sesionIniciada">
    <!-- SI SE HA INICIADO SESIÓN -->
    <!-- [Content] -->
    <div class="p-4">
      <h1>En construcción... <i class="fa-solid fa-gear fa-spin"></i></h1>
    </div>
    <!-- [/Content] -->
    <!-- [Footer] -->
    <div>
      <button class="btn btn-outline-primary" @click="cerrarSesion()">Cerrar Sesión</button>
    </div>
    <!-- [/Footer] -->
  </template>
  <template v-else>
    <!-- NO SE HA INICIADO SESIÓN -->
    <div class="p-4">
      <div class="p-4 border rounded shadow">
        <div>
          <h2>Iniciar Sesión</h2>
          <hr>
        </div>
        <template v-if="mensajeError">
          <div>
            <div class="alert alert-warning">
              <div v-html="mensajeError"></div>
            </div>
          </div>
        </template>
        <div>
          <div class="py-2">
            <input class="form-control" type="text" placeholder="Usuario" v-model="usuario" :disabled="bloqueado">
          </div>
          <div class="py-2">
            <input class="form-control" type="password" placeholder="Contraseña" v-model="constraseña" :disabled="bloqueado">
          </div>
          <div class="py-2">
            <input type="checkbox" v-model="recordarUsuarioContraseña" :disabled="bloqueado">
            <span class="ps-2">Recordar usuario y contraseña</span>
          </div>
        </div>
        <hr>
        <div>
          <button class="w-100 btn btn-primary" @click="iniciarSesion()" :disabled="bloqueado">
            <span class="pe-2"><i class="fa-solid fa-unlock"></i></span>
            <span>Iniciar Sesión</span>
          </button>
        </div>
      </div>
    </div>
  </template>
</template>

<script setup>
import { onMounted, ref, watch } from "vue"

const usuario = ref('')
const constraseña = ref('')

const sesionIniciada = ref(false)
const recordarUsuarioContraseña = ref(false)

const bloqueado = ref(false)
const mensajeError = ref('')

function limpiarSesion() {
  constraseña.value = ''
  localStorage.removeItem("usuario")
  localStorage.removeItem("contraseña")
  localStorage.removeItem("recordar")
}

function registrarSesion() {
  localStorage.setItem("usuario", usuario.value)
  localStorage.setItem("contraseña", btoa(constraseña.value)) // btoa(<texto>) -> <texto base 64>
  localStorage.setItem("recordar", "true")
}

function esUsuarioContraseñaValido() {
  // TODO: Verificar si el usuario y la contraseña son válidos
  return usuario.value === "admin" && constraseña.value === "123"
}

function iniciarSesion() {
  mensajeError.value = ''

  bloqueado.value = true

  if (esUsuarioContraseñaValido()) {
    sesionIniciada.value = true
    if (recordarUsuarioContraseña.value) {
      registrarSesion()
    } else {
      limpiarSesion()
    }
  } else {
    mensajeError.value = `No se pudo iniciar sesión con el usuario <strong>${usuario.value || "(no establecido)"}</strong>`
    setTimeout(() => {
      mensajeError.value = ''
    }, 5000)
    limpiarSesion()
  }

  bloqueado.value = false

}

function cerrarSesion() {
  bloqueado.value = true

  sesionIniciada.value = false

  bloqueado.value = false
}

// Hooks

watch(recordarUsuarioContraseña, recordar => {
  if (!recordar) {
    limpiarSesion()
  }
})

// Lifecycle Hooks

onMounted(() => {
  usuario.value = localStorage.getItem("usuario") || ''
  constraseña.value = atob(localStorage.getItem("contraseña") || '') // atob(<texto base 64>) -> <texto>
  recordarUsuarioContraseña.value = localStorage.getItem("recordar") === "true"
})

</script>