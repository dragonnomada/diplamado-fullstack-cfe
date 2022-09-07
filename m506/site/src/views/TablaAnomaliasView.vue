<template>
    <DataTable 
        class="table table-hover table-striped"
        :columns="columns"
        :data="anomaliasData"
        width="100%"
    />
</template>

<script setup>
import { ref, computed, onMounted } from "vue"

import DataTable from "datatables.net-vue3"

import { anomalias, fetchAllAnomalias } from "../services/anomalias";

// Arreglo de especificaciones
const columns = ref([
    {
        title: "ID",
        data: "id_anomalia"
    },
    // {
    //     title: "Usuario Nombre",
    //     data: "usuario_nombre"
    // },
    {
        title: "Usuario Correo",
        data: "usuario_correo"
    },
    {
        title: "Ubicación",
        data: "ubicacion"
    },
    {
        title: "Publicada",
        data: "publicado"
    },
    {
        title: "Creada",
        data: "creado"
    },
])

// Datalist / FrameList
const anomaliasData = computed(() => {
    // [{ a: { x: 1 } }, { a: { x: 2 } }].map(o => o.a.x) => [1, 2]
    return anomalias.value.map(anomalia => {
        return  {
            id_anomalia: `#${anomalia.id_anomalia}`,
            usuario_nombre: anomalia.usuario.nombre,
            usuario_correo: anomalia.usuario.correo,
            ubicacion: `${anomalia.ubicacion.latitud}, ${anomalia.ubicacion.longitud}`,
            publicado: anomalia.publicado,
            creado: anomalia.creado,
        }
    })
})

onMounted(async () => {
    await fetchAllAnomalias()
})
</script>