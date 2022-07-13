<template>
  <h1>Bienvenido</h1>
  <div hidden>
    <pre style="color:red"><code>{{ data || "null" }}</code></pre>
    <pre style="color:blue"><code>{{ usuarios || "null" }}</code></pre>
  </div>
  <template v-for="usuario in usuarios" key="usuario.id">
    <div class="usuario-card-container">
      <div class="usuario-card">
        <div>
          <div>
            <img :src="usuario.picture" alt="Foto de Perfil">
          </div>
          <div>
            <p>{{ usuario.fullname }}</p>
            <p>{{ usuario.email }}</p>
            <p>{{ usuario.phone }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  <div>
    <p>Status: {{ status }} - {{ statusText }}</p>
    <p>Error: {{ error || "NONE" }}</p>
  </div>
  <button @click="loadData()">Cargar datos</button>
</template>

<!-- Composition API -->
<script setup>
import { ref, computed } from "vue"

// 1. Generar un estado que retenga los datos
//    provenientes del API
const data = ref(null)

// const usuarios = computed(() => data.value ? data.value.results : [])
const usuarios = computed(() => {
  if (!data.value) return []

  const usuarios = []

  for (let usuario of data.value.results) {
    usuarios.push({
      id: usuario.login.uuid,
      fullname: usuario.name.first + " " + usuario.name.last,
      email: usuario.email,
      phone: usuario.phone,
      picture: usuario.picture.medium
    })
  }

  return usuarios
})
// const usuarios = computed(() => (data.value || { results: [] })
//   .results.map(usuario => ({
//     id: usuario.login.uuid,
//     fullname: usuario.name.first + " " + usuario.name.last,
//     email: usuario.email,
//     phone: usuario.phone,
//     picture: usuario.picture.medium
//   })))

const error = ref("")
const status = ref(0)
const statusText = ref("UNKNOWN")

// 2. Definir una función que se encargue
//    de traer los datos del API
async function loadData() {
  // 2.1 Estructurar la petición (url + options)
  //     Y obtener la respuesta (response)
  const url = "https://randomuser.me/api?results=3&nat=us,it"
  const options = {
    method: "GET",
    headers: {
      "accept": "application/json",
      "x-token": "1234567"
    }
    // body | cors | ...
  }
  const response = await fetch(url, options)

  if (response.ok) {
    // TODO: Extracción de la respuesta JSON | TEXTO | BLOB | ...
    data.value = await response.json()

    error.value = ""
    status.value = response.status
    statusText.value = response.statusText || "OK"
  } else {
    error.value = await response.text()
    status.value = response.status
    statusText.value = response.statusText || error.value
  }
}

</script>

<style scoped>
.usuario-card-container {
  padding: 10px;
}

.usuario-card {
  border: 1px solid red;
  padding: 10px;
  box-shadow: 0px 0px 4px 4px #77777733;
  overflow: hidden;
}
</style>