<!-- COMPOSITION API -->
<script setup>
import { onMounted, ref, watch } from 'vue'

const pictures = ref([
  {
    id: 0,
    url: "https://placekitten.com/400",
    label: "Slide 0"
  },
  {
    id: 1,
    url: "https://placekitten.com/401",
    label: "Slide 1"
  },
  {
    id: 2,
    url: "https://placekitten.com/402",
    label: "Slide 2"
  },
  {
    id: 3,
    url: "https://placekitten.com/412",
    label: "Slide 3"
  },
  {
    id: 4,
    url: "https://placekitten.com/408",
    label: "Slide 4"
  },
  {
    id: 5,
    url: "https://placekitten.com/409",
    label: "Slide 5"
  },
])

// Referencia estado
const carousel = ref(null) // carousel.value = null

// Lifecycle Hook onMounted
onMounted(() => {
  carousel.value = new bootstrap.Carousel('#carouselExampleIndicators')
})

watch(pictures, () => {
  carousel.value = new bootstrap.Carousel('#carouselExampleIndicators')
})

function quitarImagen(index) {
  pictures.value = [...pictures.value.slice(0, index), ...pictures.value.slice(index + 1)]
}

function ponerImagen(index) {
  const size = Math.floor(Math.random() * 200 + 400)
  const imagen = {
    id: Math.random().toString(16),
    url: `https://placekitten.com/${size}`
  }
  pictures.value = [...pictures.value.slice(0, index), imagen, ...pictures.value.slice(index)]
}

</script>

<!-- 

  <button type="button" data-bs-target="#carouselExampleIndicators" :data-bs-slide-to="index"
    :class="{active: index === 0}" :aria-current="index === 0"
    :aria-label="picture.label"></button>

 -->

<!-- 

  <div class="carousel-item" :class="{active: index === 0}">
    <img :src="picture.url" class="d-block w-100" :alt="picture.label">
  </div>

 -->

<!-- VISTA -->
<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
    <div class="carousel-indicators">
      <template v-for="(picture, index) in pictures" key="'btn-' + picture.id">
        <button type="button" data-bs-target="#carouselExampleIndicators" :data-bs-slide-to="index"
          :class="{ active: index === 0 }" :aria-current="index === 0" :aria-label="picture.label"></button>
      </template>
    </div>
    <div class="carousel-inner">
      <template v-for="(picture, index) in pictures" key="'img-' + picture.id">
        <div class="carousel-item" :class="{ active: index === 0 }">
          <img :src="picture.url" class="d-block w-100" :alt="picture.label">
        </div>
      </template>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <button @click="quitarImagen(pictures.length - 1)">Quitar Imagen</button>
  <button @click="ponerImagen(pictures.length - 1)">Poner Imagen</button>
</template>