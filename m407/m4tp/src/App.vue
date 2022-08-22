<template>
  <ion-app>
    <ion-card>
      <ion-card-content>
        <ion-avatar>
          <img :src="user.picture.thumbnail" >
        </ion-avatar>
        <div>
          <ion-label>{{ user.name.title }}. {{ user.name.first }} {{ user.name.last }}</ion-label>
        </div>
      </ion-card-content>
    </ion-card>
  </ion-app>
</template>

<script setup>
import { IonApp, IonRouterOutlet, IonCard, IonCardContent, IonAvatar, IonLabel } from '@ionic/vue'

import { ref, onMounted } from "vue"

const user = ref({
  name: {
    title: "xx",
    first: "yy",
    last: "zz"
  },
  picture: {
    thumbnail: "https://placekitten.com/300"
  }
})

onMounted(async () => {
  const response = await fetch("https://randomuser.me/api")

  if (response.ok) {
    const data = await response.json()

    console.log(data)

    user.value = data.results[0]
  }
})
</script>