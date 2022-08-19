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
        <h1>Hola mundo 2</h1>
        <div class="google-map" ref="mapDiv"></div>
        <ion-button @click="irAVelodromo()">Ir a Velódromo</ion-button>
        <ion-button @click="irAUbicacionUsuario()">Ir a Mi Ubicación</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  alertController,
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/vue';

import { Geolocation } from "@capacitor/geolocation"
import { GoogleMap } from "@capacitor/google-maps"

import { ref, onMounted } from "vue"

const mapDiv = ref(null) // auto-referencia
const map = ref(null) // .value -> null >>> map

const makerData = ref({})

onMounted(async () => {
  map.value = await GoogleMap.create({
    id: "google-map",
    element: mapDiv.value, // Referencia al elemento DOM
    apiKey: "AIzaSyDW0Yvw1x1JlOZzN5DFwOZ9cjw337PKags", // Google Cloud
    config: {
      // 19.415048, -99.171299
      center: {
        lat: 19.415048,
        lng: -99.171299,
      },
      zoom: 17
    },
  })

  await map.value.enableCurrentLocation(true)

  await map.value.addMarker({
    title: "Velódromo",
    coordinate: {
      // 19.4086856,-99.1054378
      lat: 19.4086856,
      lng: -99.1054378,
    }
  })

  map.value.setOnMapClickListener(async event => {
    console.log("Mapa Seleccionado", event)
    const markerId = await map.value.addMarker({
      title: "Pin Personalizado",
      data: "Hola mundo",
      coordinate: {
        lat: event.latitude,
        lng: event.longitude,
      }
    })
    console.log(markerId)
    makerData.value[markerId] = {
      a: true,
      b: false,
      c: Math.random(),
      create: new Date(),
    }
  })

  map.value.setOnMarkerClickListener(async event => {
    console.log("Pin Seleccionado", event)
    const marker = makerData.value[event.markerId]
    const alert = await alertController.create({
      header: event.title,
      message: `Latitud: ${event.latitude} Longitud: ${event.longitude} ${JSON.stringify(marker)}`
    })
    await alert.present()
  })
})

async function irAVelodromo() {
  await map.value.setCamera({
    coordinate: {
      // 19.4086856,-99.1054378
      lat: 19.4086856,
      lng: -99.1054378,
    },
    zoom: 15
  })
}

async function irAUbicacionUsuario() {
  const location = await Geolocation.getCurrentPosition()

  console.log(location) // TODO: Registrar la ubicación

  await map.value.setCamera({
    coordinate: {
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    },
    zoom: 15
  })
}

</script>

<style scoped>
.google-map {
  width: 100%;
  height: 400px;
  background-color: azure;
}

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
