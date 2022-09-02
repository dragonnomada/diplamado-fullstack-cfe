<template>
    <ion-menu side="start" menu-id="principal" content-id="main-content" type="overlay">
        <ion-content>
            <ion-list id="inbox-list">
                <ion-list-header>Plataforma de Anomalías</ion-list-header>
                <ion-note>Bienvenido pepe@gmail.com</ion-note>

                <template v-if="sesionIniciada">
                    <ion-menu-toggle auto-hide="false">
                        <ion-item router-link="/folder/mapa" lines="none"
                            detail="false" class="hydrated" :class="{ selected: true }">
                            <ion-icon slot="start" :ios="archiveOutline" :md="archiveOutline"></ion-icon>
                            <ion-label>Mapa</ion-label>
                        </ion-item>
                    </ion-menu-toggle>
                </template>
            </ion-list>

            <ion-list id="labels-list">
                <ion-list-header>Opciones</ion-list-header>

                <template v-if="sesionIniciada">
                    <ion-item lines="none">
                        <ion-icon slot="start" :ios="bookmarkOutline" :md="bookmarkSharp"></ion-icon>
                        <ion-label @click="cerrarSesion()">Cerrar Sesión</ion-label>
                    </ion-item>
                </template>
                <template v-else>
                    <ion-item lines="none" class="pointer" @click="iniciarSesion()">
                        <ion-icon slot="start" :ios="logIn" :md="logIn"></ion-icon>
                        <ion-label>Iniciar Sesión</ion-label>
                    </ion-item>
                </template>
            </ion-list>
        </ion-content>
    </ion-menu>
</template>

<script setup>
import { IonApp, IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonNote, IonRouterOutlet, IonSplitPane } from '@ionic/vue';

import { onMounted } from "vue"

import { logIn, archiveOutline, archiveSharp, bookmarkOutline, bookmarkSharp, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons'

import { sesionIniciada, cerrarSesion, iniciarSesion, autoIniciarSesion } from "../services/usuarios"

// TODO: Comprobar si hay un usuario registrado localmente que no haya cerrado sesión
onMounted(async () => {
  // Checar cuándo haya conexión a internet
  // revisar las anomalías no registradas en el servidor
  // 1: y registrarlas borrándolas del  archivo local 
  // 2: (retener anomalías si se quiere en modo offline)
  // pero considerar que ya fueron registradas en el servidor para no repetirlas
  // 3: Crear un archivo de anomalias locales ya registradas
  //    al iniciar la aplicación o al tener internet descargar las anomalías
  //    registradas desde el servidor (ya actualizadas con otros usuarios)
  //    repetir cada minuto para tener nuevas anomalías registradas por otros usuarios
  await autoIniciarSesion()
})
</script>

<style scoped>
    .pointer {
      user-select: none;
      cursor: pointer;
    }
    
    ion-menu ion-content {
      --background: var(--ion-item-background, var(--ion-background-color, #fff));
    }
    
    ion-menu.md ion-content {
      --padding-start: 8px;
      --padding-end: 8px;
      --padding-top: 20px;
      --padding-bottom: 20px;
    }
    
    ion-menu.md ion-list {
      padding: 20px 0;
    }
    
    ion-menu.md ion-note {
      margin-bottom: 30px;
    }
    
    ion-menu.md ion-list-header,
    ion-menu.md ion-note {
      padding-left: 10px;
    }
    
    ion-menu.md ion-list#inbox-list {
      border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);
    }
    
    ion-menu.md ion-list#inbox-list ion-list-header {
      font-size: 22px;
      font-weight: 600;
    
      min-height: 20px;
    }
    
    ion-menu.md ion-list#labels-list ion-list-header {
      font-size: 16px;
    
      margin-bottom: 18px;
    
      color: #757575;
    
      min-height: 26px;
    }
    
    ion-menu.md ion-item {
      --padding-start: 10px;
      --padding-end: 10px;
      border-radius: 4px;
    }
    
    ion-menu.md ion-item.selected {
      --background: rgba(var(--ion-color-primary-rgb), 0.14);
    }
    
    ion-menu.md ion-item.selected ion-icon {
      color: var(--ion-color-primary);
    }
    
    ion-menu.md ion-item ion-icon {
      color: #616e7e;
    }
    
    ion-menu.md ion-item ion-label {
      font-weight: 500;
    }
    
    ion-menu.ios ion-content {
      --padding-bottom: 20px;
    }
    
    ion-menu.ios ion-list {
      padding: 20px 0 0 0;
    }
    
    ion-menu.ios ion-note {
      line-height: 24px;
      margin-bottom: 20px;
    }
    
    ion-menu.ios ion-item {
      --padding-start: 16px;
      --padding-end: 16px;
      --min-height: 50px;
    }
    
    ion-menu.ios ion-item.selected ion-icon {
      color: var(--ion-color-primary);
    }
    
    ion-menu.ios ion-item ion-icon {
      font-size: 24px;
      color: #73849a;
    }
    
    ion-menu.ios ion-list#labels-list ion-list-header {
      margin-bottom: 8px;
    }
    
    ion-menu.ios ion-list-header,
    ion-menu.ios ion-note {
      padding-left: 16px;
      padding-right: 16px;
    }
    
    ion-menu.ios ion-note {
      margin-bottom: 8px;
    }
    
    ion-note {
      display: inline-block;
      font-size: 16px;
    
      color: var(--ion-color-medium-shade);
    }
    
    ion-item.selected {
      --color: var(--ion-color-primary);
    }
    </style>
    