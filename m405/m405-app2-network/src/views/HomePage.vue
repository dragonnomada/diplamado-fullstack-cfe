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
        <h1>Conectado: {{ connected }}</h1>
        <h1>Tipo de Red: {{ connectionType }}</h1>

        <ModificarUsuario />

        <template v-if="connected">
          <template v-if="connectionType === 'wifi'">
            <div class="network-wifi">
              <ion-avatar>
                <img src="https://placekitten.com/800">
              </ion-avatar>
            </div>
          </template>
          <template v-else-if="connectionType === 'cellular'">
            <div class="network-cell">
              <ion-avatar>
                <img src="https://placekitten.com/300">
              </ion-avatar>
            </div>
          </template>
          <template v-else>
            <ion-avatar>
              <div class="network-unknown"></div>
            </ion-avatar>
          </template>
        </template>
        <template v-else>
          <div class="network-offline">
            <ion-avatar>
              <img src="../assets/default_cat.png">
            </ion-avatar>
          </div>
        </template>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import ModificarUsuario from "./ModificarUsuario.vue"

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAvatar } from '@ionic/vue';

import { Network } from "@capacitor/network"

import { ref, provide, onMounted, onBeforeUnmount } from "vue"

const connected = ref(false)
const connectionType = ref("none")

provide("network", {
  connected,
  connectionType
})

onMounted(async () => {
  const network = await Network.getStatus()

  connected.value = network.connected
  connectionType.value = network.connectionType

  Network.addListener("networkStatusChange", status => {
    console.log(status)
    connected.value = status.connected
    connectionType.value = status.connectionType
  })
})

onBeforeUnmount(() => {
  Network.removeAllListeners()
})
</script>

<style scoped>
.network-wifi {
  width: 100%;
  background-color: hotpink;
  display: flex;
  justify-content: center;
}

.network-cell {
  width: 100%;
  background-color: cornflowerblue;
  display: flex;
  justify-content: center;
}

.network-unknown {
  width: 100%;
  background-color: crimson;
  display: flex;
  justify-content: center;
}

.network-offline {
  width: 100%;
  background-color: gray;
  display: flex;
  justify-content: center;
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
