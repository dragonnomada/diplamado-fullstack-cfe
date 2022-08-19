<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>

      <!-- CONTENT -->
      <div class="container">
        <h1>Lectura</h1>
        <div class="lectura">
          <span>{{ lectura }}</span>
        </div>
        <ion-button @click="modificarLectura()">
          Modificar Lectura
          <ion-icon :icon="diamondOutline" slot="end" color="danger"></ion-icon>
        </ion-button>
        <ion-button @click="compartirLectura()" color="warning">
          Compartir Lectura
          <ion-icon :icon="shareSocialOutline" slot="end" color="dark"></ion-icon>
        </ion-button>

      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  alertController,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonIcon
} from '@ionic/vue';

import { diamondOutline, shareSocialOutline } from "ionicons/icons"

import { Filesystem, Directory, Encoding } from '@capacitor/filesystem'
import { LocalNotifications } from "@capacitor/local-notifications"
import { Share } from '@capacitor/share'

import { ref, onMounted, watch } from "vue"

const lectura = ref(`(No hay ninguna lectura)`)

watch(lectura, async nuevaLectura => {
  await Filesystem.writeFile({
    path: "lectura.txt",
    directory: Directory.Documents,
    encoding: Encoding.UTF8,
    data: nuevaLectura
  })
  console.log("Lectura guardada")
  await LocalNotifications.schedule({
    notifications: [
      {
        id: 1,
        title: "Se ha guardado la lectura",
        body: "Ahora puedes cerrar la aplicación y continuar cuando quieras",
        schedule: {
          allowWhileIdle: true,
        }
      }
    ]
  })
  // await Share.share({
  //   title: 'He creado una nueva Lectura',
  //   text: nuevaLectura,
  //   url: 'http://ejemplo.com/lecturas/123',
  //   dialogTitle: 'Compartir Lectura 😀',
  // })
})

onMounted(async () => {
  try {
    // Leemos un archivo
    const content = await Filesystem.readFile({
      path: "lectura.txt",
      directory: Directory.Documents,
      encoding: Encoding.UTF8,
    })

    console.log("Lectura leída", content)
    lectura.value = content.data
  } catch (error) {
    console.log("No hay lecturas, crea una lectura")
  }

  await LocalNotifications.schedule({
    notifications: [
      {
        id: 1,
        title: "Se ha recuperado la lectura",
        body: "Ahora puedes comenzar a leer la lectura que dejaste pendiente",
        schedule: {
          allowWhileIdle: true,
        }
      }
    ]
  })
})

async function compartirLectura() {
  await Share.share({
    title: 'He creado una nueva Lectura',
    text: lectura.value,
    url: 'http://ejemplo.com/lecturas/123',
    dialogTitle: 'Compartir Lectura 😀',
  })
}

async function modificarLectura() {
  const alert = await alertController.create({
    header: "Nueva Lectura",
    buttons: [
      {
        text: "Aceptar",
        handler: alertData => {
          lectura.value = alertData.lectura
        }
      }
    ],
    inputs: [
      {
        name: "lectura",
        type: "textarea",
        value: lectura.value
      }
    ]
  })
  await alert.present()
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 60vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: hidden;

  background-color: red;
}

.lectura {
  flex-grow: 1;
  width: 100%;
  background-color: gainsboro;
  overflow: auto;
  padding: 12px;
}
</style>
