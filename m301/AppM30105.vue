<script>
export default {
    // Estados iniciales
    data() {
        // Estados Físicos
        return {
            // Estado `title`
            title: "Sín título",
            // Estado `monto`
            monto: 9999999999.999999,
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
            for (let i = cifras.length - 1; i >= 0; i--) {
                if ((cifras.length - i) % 3 === 1) formato += ","
                formato += cifras[i]
            }
            formato = formato.split('').reverse().join('').replace(/,$/, '') + "." + decimales
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
    <p>Monto con Formato: {{ montoPesos }}</p>
    <p>Fecha: {{ fecha }}</p>
    <p>Fecha con Formato: {{ fechaConFormato }}</p>
    <!-- two-way: monto -->
    <input type="number" v-model="monto">
</template>