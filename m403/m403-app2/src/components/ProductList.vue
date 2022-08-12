<template>
    <ion-list>
        <template v-for="producto in productos" :key="producto.id">
            <ion-item @click="openModal(producto)">
                <ion-avatar slot="start">
                    <img :src="producto.picture">
                </ion-avatar>
                <ion-label>{{ producto.title }}</ion-label>
                <ion-label slot="end">$ {{ producto.price.toFixed(2) }} mxn</ion-label>
            </ion-item>
        </template>
    </ion-list>
    <ion-modal ref="modal">
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-button @click="closeModal()">Cerrar</ion-button>
                </ion-buttons>
                <ion-title>Detalles - {{ productoSeleccionado.title }}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <ion-card>
                <img class="image-card" :src="productoSeleccionado.picture" >
                <ion-card-header>
                    <ion-card-title>{{ productoSeleccionado.title }}</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    <ion-text>$ {{ productoSeleccionado.price.toFixed(2) }} mnx</ion-text>
                </ion-card-content>
            </ion-card>
        </ion-content>
    </ion-modal>
</template>

<script setup>
import { 
    IonList, IonItem, IonAvatar, 
    IonLabel, IonModal, IonHeader, 
    IonToolbar, IonButtons, IonButton, 
    IonTitle, IonContent,
    IonCard, IonCardHeader, IonCardTitle,
    IonCardContent, IonText } from "@ionic/vue"

import { ref } from "vue"

const productos = ref([
    {
        id: 1,
        title: "Producto 1",
        picture: "https://placekitten.com/300",
        price: 25.99
    },
    {
        id: 2,
        title: "Producto 2",
        picture: "https://placekitten.com/301",
        price: 15.85
    },
    {
        id: 3,
        title: "Producto 3",
        picture: "https://placekitten.com/302",
        price: 14.73
    },
])

const modal = ref(null) // auto-referencia (<... ref="modal">)

const productoSeleccionado = ref(null)

function openModal(producto) {
    productoSeleccionado.value = producto
    modal.value.$el.present()
}

function closeModal() {
    modal.value.$el.dismiss(123, "ok")
}
</script>

<style scoped>
.image-card {
    width: 100%;
    height: 200px;
    object-fit: cover;
}
</style>