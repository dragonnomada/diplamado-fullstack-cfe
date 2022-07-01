<!-- Diseñador -->
<template>
    <!-- Vista -->
    <h1>Hola, {{ nombre }}</h1>
    <p>Contador: {{ contador }}</p>
    <!-- Lógica indirecta | Lógica formal -->
    <button @click="incrementar()">incrementar</button>
    <div>
        <span>{{ descripcion }}</span>
    </div>
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

    // Estados Virtuales
    // -> Funciones que generan el valor de los estados
    //    no-físicos que son consumidos en la vista
    //    Lógica: resultado() { return 2 + 2 }
    //    Vista:  {{ resultado }}
    computed: {
        descripcion() {
            return "[" + 
                this.nombre +
                " (" + this.contador +
                ") ]"
        }
    },

    // Métodos / Lógicas Formales
    // -> Funciones para consumirse como funciones en la vista
    //    <button @click="incrementar()">...</button>
    // -> Conectar eventos HTML -> funciones Javascript
    methods: {
        incrementar() {
            // Modificar el estado físico
            this.contador++
        }
    }
}
</script>