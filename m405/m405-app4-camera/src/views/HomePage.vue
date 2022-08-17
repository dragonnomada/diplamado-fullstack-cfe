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
        <div class="selector">
          <ion-button @click="changePicture()">Seleccionar Imagen</ion-button>
          <ion-thumbnail>
            <img :src="picture" alt="">
          </ion-thumbnail>
        </div>
        <!-- <p>{{ picture }}</p> -->
        <div class="selector">
          <ion-button @click="changeText()">Seleccionar Texto</ion-button>
          <ion-label>{{ text || "(Sin texto)" }}</ion-label>
        </div>
        <div></div>
        <div></div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonThumbnail, IonLabel, alertController } from '@ionic/vue';

import { Camera, CameraResultType } from "@capacitor/camera"

import { ref } from "vue"

const picture = ref("https://placekitten.com/300")
const text = ref("")

async function changePicture() {
  const photo = await Camera.getPhoto({
    quality: 90,
    allowEditing: false,
    resultType: CameraResultType.DataUrl
  })

  console.log(photo)

  picture.value = photo.dataUrl
}

async function changeText() {
  const alert = await alertController.create({
          header: 'Ingresa el nuevo texto',
          buttons: [{
            text: 'Aceptar',
            handler: alertData => {
              text.value = alertData.text
            }
          }],
          inputs: [
            {
              name: "text",
              placeholder: 'Texto',
              value: text.value
            },
          ],
        });

        await alert.present();
}

</script>

<style scoped>
.selector {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
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
