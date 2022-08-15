<template>
  <ion-app>
    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col class="full">
            <ion-list>
              <ion-item>
                <ion-label>Modificar Perfil</ion-label>
                <ion-toggle @ionChange="toggleEditing($event)"></ion-toggle>
              </ion-item>
            </ion-list>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col></ion-col>
          <ion-col>
            <div class="camera">
              <ion-thumbnail>
                <img src="https://placekitten.com/500">
              </ion-thumbnail>
              <template v-if="editing">
                <ion-chip class="float">
                  <ion-label>Cambiar</ion-label>
                  <ion-icon :icon="camera"></ion-icon>
                </ion-chip>
              </template>
            </div>
          </ion-col>
          <ion-col></ion-col>
        </ion-row>
        <ion-row>
          <ion-col></ion-col>
          <ion-col>
            <template v-if="editing">
              <ion-chip @click="changeUsername()">
                <ion-label color="primary">{{ username }}</ion-label>
                <ion-icon :icon="createOutline"></ion-icon>
              </ion-chip>
            </template>
            <template v-else>
              <ion-label color="primary">{{ username }}</ion-label>
            </template>
          </ion-col>
          <ion-col></ion-col>
        </ion-row>
        <ion-row>
          <ion-col></ion-col>
          <ion-col>
            <template v-if="editing">
              <ion-chip @click="changeEmail()">
                <ion-label color="tertiary">{{ email }}</ion-label>
                <ion-icon :icon="createOutline"></ion-icon>
              </ion-chip>
            </template>
            <template v-else>
              <ion-label color="tertiary">{{ email }}</ion-label>
            </template>
          </ion-col>
          <ion-col></ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <canvas ref="canvas"></canvas>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-app>
</template>

<script setup>
import {
  alertController,
  IonList,
  IonItem,
  IonToggle,
  IonChip,
  IonIcon,
  IonApp,
  IonThumbnail,
  IonLabel,
  IonContent,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/vue'

import {
  createOutline,
  camera
} from "ionicons/icons"

import QRCode from "qrcode"

import { ref, onMounted } from "vue"

const canvas = ref(null) // auto-referencia

const username = ref("Ana Ming")
const email = ref("ana.ming@gmail.com")

const editing = ref(false)

onMounted(() => {
  QRCode.toCanvas(canvas.value, "mailto:undefined@mail.com", {
    width: 200
  })
})

async function changeUsername() {
  const alert = await alertController.create({
    header: "Cambiar el nombre de usuario",
    buttons: [
      "cancelar",
      {
        text: "aceptar",
        handler: alertData => {
          console.log(alertData)
          username.value = alertData.username
        }
      }
    ],
    inputs: [
      {
        name: "username",
        placeholder: "Nombre del usuario",
        value: username.value
      }
    ]
  })
  await alert.present()
}

async function changeEmail() {
  const alert = await alertController.create({
    header: "Cambiar el correo",
    buttons: [
      "cancelar",
      {
        text: "aceptar",
        handler: alertData => {
          console.log(alertData)
          email.value = alertData.email
          QRCode.toCanvas(canvas.value, `mailto:${email.value}`, {
            width: 200
          })
        }
      }
    ],
    inputs: [
      {
        name: "email",
        placeholder: "Correo",
        value: email.value
      }
    ]
  })
  await alert.present()
}

function toggleEditing(event) {
  console.log(event.detail)
  editing.value = event.detail.checked
}
</script>

<style scoped>
.camera {
  position: relative;
}

.float {
  position: absolute;
  top: 60%;
  right: -60%;
  --background: cornflowerblue;
}

ion-content {
  --padding-start: 24px;
  --padding-end: 24px;
  --padding-top: 24px;
  --padding-bottom: 24px;
}

ion-thumbnail {
  --size: 120px;
  --border-radius: 50%;
}

ion-col {
  display: flex;
  justify-content: center;
  text-align: center;
}

.full {
  display: block;
}
</style>