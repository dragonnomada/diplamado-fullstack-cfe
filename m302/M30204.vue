<template>
    <h1>Hola, {{ nombre }}</h1>
    <p>Contador: {{ contador }}</p>
</template>

<script>
export default {
    data() {
        return {
            nombre: "Anónimo",
            contador: 0
        }
    },
}
</script>