<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <template v-if="sesionIniciada">
          <div ref="divMap" id="divMap"></div>
        </template>
        <template v-else>
          <h1>
            <ion-icon slot="start" :ios="trashSharp" :md="trashSharp"></ion-icon>
          </h1>
          <strong class="capitalize">Inicia sesión</strong>
        </template>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref, inject, watch, onBeforeUnmount } from 'vue';
import { menuController, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/vue';
import { trashSharp } from 'ionicons/icons';
import { GoogleMap } from '@capacitor/google-maps';

import Contador from "../services/contador" 
import { sesionIniciada } from "../services/usuarios" 
import { abrirAnomalia, crearAnomalia } from "../services/anomalias" 

// AIzaSyC2GoPp0yasQZNatqMFeG2ULcbD9h_zNPQ
const apiKey = 'AIzaSyC2GoPp0yasQZNatqMFeG2ULcbD9h_zNPQ';

const divMap = ref(null);  // autoreferencia

const map = ref(null)

watch(sesionIniciada, async activa => {
  while (divMap.value === null) {
    await new Promise(resolve => setTimeout(resolve, 10))
    console.warn("Esperando el mapa")
  }

  console.log(divMap)

  map.value = await GoogleMap.create({
    id: 'divMap', // Unique identifier for this map instance
    element: divMap.value, // reference to the capacitor-google-map element
    apiKey: apiKey, // Your Google Maps API Key
    config: {
      center: {
        // The initial position to be rendered by the map
        lat: 33.6,
        lng: -117.9,
      },
      zoom: 8, // The initial zoom level to be rendered by the map
    },
  });

  // Map Ready
  map.value.setOnMapClickListener(async event => {
    console.log(event)
    
    const { latitude, longitude } = event

    Contador.incrementar()

    crearAnomalia(latitude, longitude, map)
  })

  map.value.setOnMarkerClickListener(async event => {
    console.log(event)
    const { markerId } = event

    abrirAnomalia(markerId)
  })
})

onBeforeUnmount(async () => {
  // TODO: Limpiar los marcadores y anomalías
})
</script>

<style scoped>
#divMap {
  width: "100%";
  height: 100vh;
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
