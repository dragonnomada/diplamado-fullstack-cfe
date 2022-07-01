<template>
    <h1>Hola, {{ nombre }}</h1>
    <p>Contador: {{ contador }}</p>
    <!-- Lógica directa -->
    <button @click="contador++">incrementar</button>
</template>

<script>
export default {
    data() {
        return {
            nombre: "Anónimo", // this.nombre   | nombre
            contador: 0        // this.contador | contador
        }
    },
}
</script>