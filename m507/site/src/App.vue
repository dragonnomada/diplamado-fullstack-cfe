<template>
  <div class="p-5 border-bottom">
    <h1>Hola mundo</h1>
  </div>
  <div class="p-5">
    <table>
      <thead>
        <tr>
          <th>ID Anomalia</th>
          <th>QR Anomalia</th>
          <th>Usuario</th>
          <th>Ubicación</th>
          <th>Archivo</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="evidencia in evidencias">
          <tr>
            <td>#{{ evidencia.id_anomalia }}</td>
            <td>{{ evidencia.anomalia.qr }}</td>
            <td>{{ evidencia.usuario.nombre }} / {{ evidencia.usuario.correo }}</td>
            <td>
              <a :href="`https://maps.google.com/?latlon=@${evidencia.ubicacion.latitud},${evidencia.ubicacion.longitud}`">{{ evidencia.ubicacion.latitud }} / {{ evidencia.ubicacion.longitud }}</a>
            </td>
            <td>
              <img class="mini-imagen" :src="`${evidencia.archivo.url}`" >
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { evidencias, getEvidencias } from "./services/evidencias"

import { ref, onBeforeUnmount, onMounted } from "vue"

const timerId = ref(null)

onMounted(async () => {
  await getEvidencias()

  timerId.value = setInterval(async () => {
    await getEvidencias()
  }, 10000)
})

onBeforeUnmount(() => {
  clearInterval(timerId.value)
})
</script>

<style scoped>
.mini-imagen {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
}
</style>