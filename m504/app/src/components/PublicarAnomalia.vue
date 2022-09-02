<template>
    <div>
        <div>{{ descripcionAnomalia }}</div>
        <div>{{ tipoAnomaliaSeleccionado }}</div>
    </div>
    <div>
        <ion-label>Detalles de la anomalía</ion-label>
        <ion-textarea rows="10" placeholder="Enter more information here..." v-model="descripcionAnomalia"></ion-textarea>
    </div>
    <div>
        <ion-label>Tipo anomalía</ion-label>
        <ion-select placeholder="Tipo de anomalía" @ionChange="seleccionarTipoAnomalia($event.detail.value)">
            <template v-for="tipoAnomalia in tiposAnomalias" :key="tipoAnomalia.id_estado_anomalia">
                <ion-select-option :value="tipoAnomalia.id_estado_anomalia">{{ tipoAnomalia.descripcion }}</ion-select-option>
            </template>
        </ion-select>
    </div>
    <ion-button @click="publicarAnomaliaSeleccionada()" :disabled="false">Publicar</ion-button>
</template>

<script setup>
import { IonSelect, IonSelectOption, IonButton, IonLabel, IonTextarea } from "@ionic/vue"

import { onMounted } from "vue"

import { Network } from '@capacitor/network';

import { tiposAnomalias, cargarTiposAnomalias, seleccionarTipoAnomalia, descripcionAnomalia, tipoAnomaliaSeleccionado, publicarAnomaliaSeleccionada } from "../services/anomalias"

function foo(event) {
    console.log(event)
}

onMounted(async () => {
    await cargarTiposAnomalias()

    Network.addListener('networkStatusChange', async status => {
        if (status.connected) {
            await cargarTiposAnomalias()
        }
        console.log('Network status changed', status)
    })
})

// TODO: Al volver a tener internet llamar a await cargarTiposAnomalias()
</script>

<style scoped>
ion-textarea {
    --background: whitesmoke;
}
</style>