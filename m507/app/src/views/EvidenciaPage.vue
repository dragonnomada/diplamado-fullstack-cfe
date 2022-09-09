<template>
    <ion-toolbar>
        <ion-title>Captura de Evidencias</ion-title>
    </ion-toolbar>
    <ion-item>
        <ion-label position="floating">Comentario</ion-label>
        <ion-input @ionChange="actualizarComentario($event.detail.value)" :value="comentario"></ion-input>
    </ion-item>
    <ion-item>
        <ion-select placeholder="Estado de la Anomalía" @ionChange="actualizarEstado($event.detail.value)" :value="estadoAnomalia">
            <ion-select-option value="1">Sin visitar</ion-select-option>
            <ion-select-option value="2">Visitado y no encontrado</ion-select-option>
            <ion-select-option value="3">Visitado y encontrado</ion-select-option>
        </ion-select>
    </ion-item>
    <ion-item>
        <img :src="imageUrl" >
    </ion-item>
    <ion-item>
        <ion-button @click="capturarEvidencia()">Capturar</ion-button>
    </ion-item>
    <ion-item>
        <ion-button @click="enviarEvidencia()" color="secondary">Enviar</ion-button>
    </ion-item>
</template>

<script setup>
import {
    IonToolbar,
    IonTitle,
    IonItem,
    IonLabel,
    IonInput,
    IonSelect,
    IonSelectOption,
    IonButton
} from "@ionic/vue"

import { Camera, CameraResultType } from "@capacitor/camera"

import { putEvidencia } from "../services/evidencias"

import { ref } from "vue"

const comentario = ref("")
const estadoAnomalia = ref("1")
const imageUrl = ref("https://via.placeholder.com/200")

function actualizarComentario(value) {
    comentario.value = value
}

function actualizarEstado(value) {
    estadoAnomalia.value = value
}

async function capturarEvidencia() {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.DataUrl
  })

  imageUrl.value = image.dataUrl
}

async function enviarEvidencia() {
    const evidencia = {
        comentario: comentario.value,
        estado: estadoAnomalia.value,
        imagen: imageUrl.value
    }

    console.log(evidencia)

    await putEvidencia(evidencia)
}
</script>