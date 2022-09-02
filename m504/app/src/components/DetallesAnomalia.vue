<template>
    <template v-if="anomaliaSeleccionada.publicada">
        <span>Anomalía publicada: Se muestran evidencias y comentarios</span>
    </template>
    <template v-else>
        <PublicarAnomalia />
    </template>

    <template v-if="!anomaliaSeleccionada.registrada">
        <ion-card>
            <ion-card-header>
              <ion-card-subtitle>La anomalía no ha sido registrada en el servidor</ion-card-subtitle>
              <ion-card-title>Adevertencia</ion-card-title>
            </ion-card-header>
        
            <ion-card-content>
                Esperando tener internet para enviar la anomalía al servidor
            </ion-card-content>
          </ion-card>
    </template>

    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAYAAABUmhYnAAAAAklEQVR4AewaftIAAAKlSURBVO3BQQ7bWAwFwX6E7n/lHi+5+oAg2ZMwrIofrDGKNUqxRinWKMUapVijFGuUYo1SrFGKNUqxRinWKMUapVijFGuUYo1y8VASfknlJAmdSpeEE5UuCb+k8kSxRinWKMUa5eJlKm9Kwh0qXRI6lSdU3pSENxVrlGKNUqxRLr4sCXeo3JGETuUkCScqdyThDpVvKtYoxRqlWKNcDKfyLynWKMUapVijXAyThBOVLgmdyt+sWKMUa5RijXLxZSq/pNIloUtCp/KEyp+kWKMUa5RijXLxsiT8yVS6JHQqJ0n4kxVrlGKNUqxR4gd/sSTcoTJZsUYp1ijFGuXioSR0Kl0S3qTSqdyRhE7lJAlvUvmmYo1SrFGKNUr84EVJ6FROktCp3JGETqVLwh0qdyThTSpPFGuUYo1SrFHiBw8k4QmVkyQ8oXKShE6lS0KnckcSTlTeVKxRijVKsUaJH7woCZ3Km5LwSypPJKFT6ZLQqTxRrFGKNUqxRrn4siR8k0qXhBOVLgmdSpeEE5UuCZ3KicqbijVKsUYp1igXL1P5pST8kkqXhE7lJAknKk8Ua5RijVKsUeIHDyThl1ROknCHyjcl4UTlTcUapVijFGuUi5epvCkJJ0noVLokdConSehUuiS8KQmdyhPFGqVYoxRrlIsvS8IdKm9S6ZLQqXQqXRLuULkjCW8q1ijFGqVYo1wMk4QTlS4JnUqn0iXhJAmdyonKm4o1SrFGKdYoF8OodEl4IgmdykkS/k/FGqVYoxRrlIsvU/kmlS4Jb1I5ScJJEjqVbyrWKMUapVijXLwsCb+UhE7lDpUuCXeo3JGETuVNxRqlWKMUa5T4wRqjWKMUa5RijVKsUYo1SrFGKdYoxRqlWKMUa5RijVKsUYo1SrFGKdYo/wEjJAng2posQQAAAABJRU5ErkJggg==" >
</template>

<script setup>
import { IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonSelect, IonSelectOption, IonButton, IonLabel, IonTextarea } from "@ionic/vue"

import { anomaliaSeleccionada } from "../services/anomalias"

import PublicarAnomalia from "./PublicarAnomalia.vue"
</script>