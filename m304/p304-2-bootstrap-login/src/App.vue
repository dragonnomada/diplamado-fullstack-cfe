<template>
  <div class="w-100 vh-100 d-flex flex-column justify-content-center align-items-center bg-light">
    <div class="p-4">
      <div class="px-4 py-4 border rounded shadow bg-white">
        <div class="border-bottom">
          <h1><span><i class="fa-solid fa-robot"></i></span> Empresa Labs</h1>
          <h2 class="text-secondary">Inicia Sesión</h2>
        </div>
        <div class="pb-4">
          <div class="py-2">
            <label class="fw-bold text-muted" for="email">Correo:</label>
            <input ref="emailControl" class="form-control" id="email" type="email" placeholder="Correo" v-model="correo">
          </div>
          <div class="py-2">
            <label class="fw-bold text-muted" for="password">Contraseña:</label>
            <input ref="passwordControl" class="form-control" id="password" type="password" placeholder="Contraseña" v-model="contraseña">
          </div>
        </div>
        <div>
          <button ref="loginButton" class="w-100 btn btn-primary" @click="iniciarSesion">
            <span class="pe-2"><i class="fa-solid fa-lock"></i></span>
            Iniciar Sesión
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- COMPOSITION API (import) -->
<script setup>
import { ref } from 'vue'


const correo = ref('')
const contraseña = ref('')

// Referencias autoconectadas | Referencias DOM
const emailControl = ref(null) // <input ref="emailControl"
const passwordControl = ref(null) // <input ref="passwordControl"
const loginButton = ref(null) // <button ref="loginButton"

/*
 * Cuándo en la vista creamos una referencia <tag ref="<referencia>"
 * Y en el código creamos la referencia const <referencia> = ref(null)
 * Entonces, el valor de la <referencia> en el código será el elemento DOM
 * Es decir, JS <referencia>.value ~ HTML <tag ref="<referencia>"
 */

function iniciarSesion() {
  emailControl.value.disabled = true
  passwordControl.value.disabled = true
  loginButton.value.disabled = true
  // TODO: Consumir un API para iniciar sesión real
}

</script>