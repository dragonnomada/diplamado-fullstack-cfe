<template>
    <GoogleMap api-key="AIzaSyC2GoPp0yasQZNatqMFeG2ULcbD9h_zNPQ" style="width: 100%; height: 300px"
        :center="{ lat: 40.689247, lng: -74.044502 }" :zoom="17">
        <MarkerCluster>
            <template v-for="anomalia in anomalias" :key="anomalia.id_anomalia">
                <Marker :options="{ position: { lat: anomalia.ubicacion.latitud, lng: anomalia.ubicacion.longitud } }">
                    <InfoWindow>
                        <div class="p-1 text-warning">
                            <p>#{{ anomalia.id_anomalia }} {{ anomalia.descripcion }}</p>
                            <RouterLink :to="`/detalles/${anomalia.id_anomalia}`">Ver Detalles</RouterLink>
                        </div>
                    </InfoWindow>
                </Marker>
            </template>
        </MarkerCluster>
    </GoogleMap>
</template>

<script setup>
// npm install vue3-google-map
import { ref, onMounted } from 'vue';
import { GoogleMap, MarkerCluster, Marker, InfoWindow } from "vue3-google-map";

import { anomalias, fetchAllAnomalias } from '../services/anomalias';

onMounted(async () => {
    await fetchAllAnomalias()
})
</script>

<style scoped>
    @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css");
</style>