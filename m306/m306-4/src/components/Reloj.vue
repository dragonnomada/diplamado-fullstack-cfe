<template>
    <div>
        <span>{{ hh }}</span>
        <span>:</span>
        <span>{{ mm }}</span>
        <span>:</span>
        <span>{{ ss }}</span>
    </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, computed, defineProps } from "vue"

const props = defineProps(['zone'])

const horas = ref(0)
const minutos = ref(0)
const segundos = ref(0)

const id = ref(null)

const hh = computed(() => `0${(horas.value + (Number(props.zone) || 0) + 24) % 24}`.slice(-2))
const mm = computed(() => `0${minutos.value}`.slice(-2))
const ss = computed(() => `0${segundos.value}`.slice(-2))

function actualizarHora() {
    const actual = new Date()
    horas.value = actual.getHours()
    minutos.value = actual.getMinutes()
    segundos.value = actual.getSeconds()
}

onMounted(() => {
    actualizarHora()
    id.value = setInterval(actualizarHora, 1000)
})

onBeforeUnmount(() => {
    clearInterval(id.value)
})

</script>

<!-- 

Props - Son los atributos enlazados al componente SFC

// Simple
const props = defineProps(['zone'])

// Avanzado 1
const props = defineProps({
    zone: Number
})

// Avanzado 2
const props = defineProps({
    zone: {
        type: Number,
        default: 0
    }
})

// Avanzado 3
const props = defineProps({
    zone: {
        type: Number,
        default(rawProps) {
            return rawProps || 0
        }
    }
})

-->

<!-- 

Option API

export default {

  props: ['xxxx'],
  ...
  (this.xxxx)

}

Composition API

const props = defineProps(['xxxx'])

...

(props.xxxx)

-->