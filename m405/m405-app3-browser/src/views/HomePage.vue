<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <h1>Compra en línea</h1>

        <p>Estado: {{ estatus }}</p>

        <ion-button color="danger" @click="openDescuentos()">Descuentos</ion-button>
        <ion-button color="warning" @click="openPromociones()">Promociones</ion-button>
        <ion-button color="success" @click="openOfertas()">Ofertas</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  alertController
} from '@ionic/vue';

import { Browser } from "@capacitor/browser"

import { ref, onMounted, onBeforeUnmount } from "vue"

const estatus = ref("Desconocido")

onMounted(() => {
  Browser.addListener("browserFinished", async () => {
    estatus.value = "Navegador cerrado"
    const alert = await alertController.create({
      header: "Navegador cerrado"
    })
    await alert.present()
  })
  Browser.addListener("browserPageLoaded", async () => {
    estatus.value = "Página cargada"
    const alert = await alertController.create({
      header: "Página Cargada"
    })
    await alert.present()
  })
})

onBeforeUnmount(() => {
  Browser.removeAllListeners()
})

async function openDescuentos() {
  await Browser.open({
    url: "https://www.walmart.com.mx",
    presentationStyle: "popover"
  })
}
async function openOfertas() {
  await Browser.open({
    url: "https://www.chedraui.com.mx/",
    presentationStyle: "popover"
  })
}
async function openPromociones() {
  await Browser.open({
    url: "https://www.bodegaaurrera.com.mx/inicio",
    presentationStyle: "popover"
  })
}
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
