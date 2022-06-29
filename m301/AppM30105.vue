<script>
export default {
    // Estados iniciales
    data() {
        // Estados Físicos
        return {
            // Estado `title`
            title: "Sín título",
            // Estado `monto`
            monto: 0,
            fecha: new Date()
        }
    },
    // Estados Virtuales (Propiedades Computadas)
    computed: {
        // Estado `montoPesos` (sólo lectura)
        montoPesos() {
            const monto = Number(this.monto).toFixed(2)
            const [cifras, decimales] = monto.split(".")
            let formato = ""
            for (let i = 0; i < cifras.length; i++) {
                formato += cifras[i]
                if (i % 3 === 0) formato += ","
            }
            formato = formato + "." + decimales
            return "$ " + formato + " MXN"
        },
        // Estado `fechaConFormato`
        fechaConFormato() {
            return this.fecha.toLocaleString()
        }
    }
}
</script>

<template>
    <!-- one-way: title -->
    <h1>{{ title }}</h1>
    <!-- one-way: monto -->
    <p>Monto: {{ monto }}</p>
    <p>Monto: {{ montoPesos }}</p>
    <p>Monto: {{ fecha }}</p>
    <p>Monto: {{ fechaConFormato }}</p>
    <!-- two-way: monto -->
    <input type="number" v-model="monto">
</template>