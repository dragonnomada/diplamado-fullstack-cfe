<!-- Diseñador -->
<template>
    <!-- Vista -->
    <h1>Hola, {{ nombre }}</h1>
    <p>Contador: {{ contador }}</p>
    <!-- Lógica indirecta | Lógica formal -->
    <button @click="incrementar()">incrementar</button>
</template>

<!-- Programador -->
<script>
// Lógica
export default {
    // Estados Físicos
    data() {
        return {
            nombre: "Anónimo", // this.nombre   | nombre
            contador: 0        // this.contador | contador
        }
    },

    // Métodos / Lógicas Formales
    methods: {
        incrementar() {
            this.contador++
        }
    }
}
</script>