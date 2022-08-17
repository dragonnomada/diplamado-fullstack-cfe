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
        <h1>UUID: {{ id || "null" }}</h1>
        <h1>Nombre: {{ name || "null" }}</h1>
        <h1>Modelo: {{ model || "null" }}</h1>
        <h1>Plataforma: {{ platform || "null" }}</h1>
        <h1>S.O: {{ operatingSystem || "null" }}</h1>
        <h1>Memoria Usada: {{ memUsed || "null" }}</h1>
        <h1>Disco Libre: {{ diskFree || "null" }}</h1>
        <h1>Disco Total: {{ diskTotal || "null" }}</h1>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
import { Device } from "@capacitor/device";

import { ref, onMounted } from "vue"

const id = ref(null)
const name = ref(null)
const model = ref(null)
const platform = ref(null)
const operatingSystem = ref(null)
const memUsed = ref(null)
const diskFree = ref(null)
const diskTotal = ref(null)

onMounted(async () => {
  const { uuid } = await Device.getId() // { uuid }
  id.value = uuid
  
  const info = await Device.getInfo()

  name.value = info.name
  model.value = info.model
  platform.value = info.platform
  operatingSystem.value = info.operatingSystem
  memUsed.value = info.memUsed
  diskFree.value = info.diskFree
  diskTotal.value = info.diskTotal
})
// const id = ref(null)
// const _name = ref(null)
// const _model = ref(null)
// const _platform = ref(null)
// const _operatingSystem = ref(null)
// const _memUsed = ref(null)
// const _diskFree = ref(null)
// const _diskTotal = ref(null)

// onMounted(async () => {
//   const { uuid } = await Device.getId() // { uuid }
//   id.value = uuid
  
//   const { 
//     name, 
//     model, 
//     platform, 
//     operatingSystem,
//     memUsed,
//     diskFree,
//     diskTotal,
//   } = await Device.getInfo()
//   _name.value = name
//   _model.value = model
//   _platform.value = platform
//   _operatingSystem.value = operatingSystem
//   _memUsed.value = memUsed
//   _diskFree.value = diskFree
//   _diskTotal.value = diskTotal
// })
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
