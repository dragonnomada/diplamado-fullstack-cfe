<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      
      <ion-select @ionChange="updateOption($event)" placeholder="Selecciona una Opción">
        <ion-select-option value="a">Opción A</ion-select-option>
        <ion-select-option value="b">Opción B</ion-select-option>
        <ion-select-option value="c">Opción C</ion-select-option>
      </ion-select>

      <ion-datetime @ionChange="updateDate($event)"></ion-datetime>

      <ion-button @click="reservar()" :disabled="lock">Reservar</ion-button>

    </ion-content>
  </ion-page>
</template>

<script setup>
import { 
  alertController,
  IonDatetime,
  IonSelect,
  IonSelectOption,
  IonPage, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent } from '@ionic/vue';

import { ref, watch } from "vue"

const option = ref(null)
const date = ref(null)
const lock = ref(true)

watch(option, () => {
  // TODO: Validar
  lock.value = !option.value || !date.value
})
watch(date, () => {
  // TODO: Validar
  lock.value = !option.value || !date.value
})

function updateOption(event) {
  console.log(event.detail.value)
  option.value = event.detail.value
}

function updateDate(event) {
  console.log(event.detail.value)
  date.value = new Date(event.detail.value)
}

async function reservar() {
  const alert = await alertController.create({
    header: 'Reservación correcta',
    subHeader: `Se ha realizado una resevación tipo ${option.value}`,
    message: `El día ${date.value}`,
    buttons: ['Aceptar'],
  });

  await alert.present();
}
</script>
