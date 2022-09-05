<template>
    <div>
        <h1>Nuevo Usuario</h1>
        <div>
            <input type="text" placeholder="Nombre" v-model="nombre">
            <input type="email" placeholder="Correo" v-model="correo">
            <input type="contraseña" placeholder="Contraseña" v-model="contraseña">
            <button @click="crearAnomalia()">Crear</button>
        </div>
    </div>
    <!-- TODO: Ver los usuarios registrados -->
    <!-- TODO: Editar un usuario -->
    <!-- TODO: Eliminar un usuario -->
</template>

<script setup>
import { ref } from 'vue'

// TODO: Crear una función en el servicio
// que envíe los datos de la anomalía al server
import { fetchNuevoUsuario } from "../services/anomalias"

const nombre = ref("")
const correo = ref("")
const contraseña = ref("")

async function crearAnomalia() {
    await fetchNuevoUsuario(nombre, correo, contraseña)
}

</script>