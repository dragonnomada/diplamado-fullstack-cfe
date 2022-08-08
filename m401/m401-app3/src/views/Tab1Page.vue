<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Hola</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-text color="danger">Hola mundo</ion-text>
      <ion-button color="danger" @click="incrementar()">Pulsame ({{ conteo }})</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonText, IonButton } from '@ionic/vue';

import { ref } from 'vue'

const conteo = ref(0)

function incrementar() {
  conteo.value++
}
</script>
