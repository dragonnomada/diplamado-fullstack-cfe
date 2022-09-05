<template>
    <template v-if="anomalia">
        <div>
            <h1>Anomalía #{{anomalia.id_anomalia}}</h1>
            <h2>{{ anomalia.detalles }}</h2>
            <img :src="anomalia.qr" alt="">
        </div>
    </template>
    <template v-else>
        <p>Esperando datos de la anomalía #{{ router.currentRoute.value.params.anomaliaId }}</p>
    </template>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue';
import { anomalia, fetchAnomalia } from "../services/anomalias"

const router = useRouter()

onMounted(async () => {
    console.log("Detalles", router.currentRoute.value.params.anomaliaId)
    // TODO: Cargar los detalles de la anomalía desde el servidor
    await fetchAnomalia(router.currentRoute.value.params.anomaliaId)
})
</script>