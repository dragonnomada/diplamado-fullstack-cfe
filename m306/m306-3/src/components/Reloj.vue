<template>
<div>
    <span>{{hh}}</span>
    <span>:</span>
    <span>{{mm}}</span>
    <span>:</span>
    <span>{{ss}}</span>
</div>
</template>

<!-- Option API -->
<script>
export default {
    props: ['zone'],
    data() {
        return {
            horas: 0,
            minutos: 0,
            segundos: 0,
            id: null
        }
    },
    computed: {
        hh() {
            return `0${this.horas + (this.zone || 0)}`.slice(-2)
        },
        mm() {
            return `0${this.minutos}`.slice(-2)
        },
        ss() {
            return `0${this.segundos}`.slice(-2)
        },
    },
    methods: {
        actualizarHora() {
            const actual = new Date()
            this.horas = actual.getHours()
            this.minutos = actual.getMinutes()
            this.segundos = actual.getSeconds()
        }
    },
    mounted() {
        this.actualizarHora()
        this.id = setInterval(this.actualizarHora, 1000)
    },
    beforeUnmount() {
        clearInterval(this.id)
    },
}
</script>

<!-- 

// Simple
props: ['zone']

// Con validación
props: {
    zone: Number
}

// Con validación avanzada I
props: {
    zone: {
        type: Number,
        default: 0
    }
}

// Con validación avanzada II
props: {
    zone: {
        type: Number,
        default(rawValue) {
            return rawValue || 0
        }
    }
}

-->