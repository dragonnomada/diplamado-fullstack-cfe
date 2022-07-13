<script setup>
import { ref, computed, onMounted } from "vue"

const data = ref(null)

const clima = computed(() => {
  if (data.value) {
    return {
      id: data.value.id,
      name: data.value.name,
      wind: data.value.wind
    }
  } else {
    return null
  }
})

async function cargarDatosClima() {
  const url = 'https://community-open-weather-map.p.rapidapi.com/weather?q=London%2Cuk&lat=0&lon=0&callback=test&id=2172797&lang=null&units=imperial&mode=xml'
  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '95d1af3cbfmshdd155205f6b9189p12f614jsn43739ff11b8e',
      'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
    }
  }

  const response = await fetch(url, options)

  if (!response.ok) {
    alert(await response.text())
    return
  }

  const text = await response.text()
  const json = text.replace(/^test\(|\)$/g, "")

  data.value = await JSON.parse(json)

  console.log(JSON.stringify(data.value, null, 2))
}

onMounted(() => {
  cargarDatosClima()
})
</script>

<template>
  <div v-if="clima">
    <h1>Ciudad: {{ clima.name }}</h1>
    <h1>Viento: {{ clima.wind.speed}} ({{ clima.wind.deg }}°C)</h1>
  </div>
</template>