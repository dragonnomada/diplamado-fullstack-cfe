<template>
<div>
    <span>{{hh}}</span>
    <span>:</span>
    <span>{{mm}}</span>
    <span>:</span>
    <span>{{ss}}</span>
</div>
</template>

<!-- Composition API -->
<script setup>
import { onMounted, onBeforeUnmount, computed, ref } from 'vue'

const horas = ref(12)
const minutos = ref(34)
const segundos = ref(56)

const id = ref(null)

const hh = computed(() => `0${horas.value}`.slice(-2))
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

Option API

<script>
export default {
    data() {
        return {
            horas: 12,
            minutos: 34,
            segundos: 56,
            id: null
        }
    },
    computed: {
        hh() { 
            return `0${this.horas}`.slice(-2) 
        },
        mm() { 
            return `0${this.minutos}`.slice(-2) 
        },
        ss() { return 
            `0${this.segundos}`.slice(-2) 
        },
    },
    methods: {
        actualizarHora() {
            const actual = new Date()
            this.horas = actual.getHours()
            this.minutos = actual.getMinutes()
            this.segundos = actual.getSeconds()
        }
    }
    onMounted() {
        this.actualizarHora()
        this.id = setInterval(this.actualizarHora, 1000)
    },
    onBeforeUnmount() {
        clearInterval(this.id)
    }
}
</script>

-->