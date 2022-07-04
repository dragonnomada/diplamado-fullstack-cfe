<script>
export default {
    data() { // Estado físico: los valores son retenidos
        return {
            edad: 18,
            genero: "Otro",
            bloqueado: false
        }
    },
    computed: { // Estado virtual: los valores son computados
        mensajeConfirmacion() {
            return 'Confirmar: ' + this.genero +
                ' / ' + this.edad + ' años'
        }
    },
    methods: {
        procesarFormulario(event) {
            event.preventDefault()

            // TODO: Validar el formulario
            if (this.$refs.formulario.checkValidity()) {
                this.bloqueado = true
                console.log("Procesando el formulario")
                // TODO: Recuperar los datos del formulario
                // TODO: Consumir un API
            } else {
                // TODO: Mostrar un mensaje o una alerta
            }

        }
    },
}
</script>

<template>
    <form ref="formulario" action="http://localhost:5000/api/confirmar" method="get">
        <div>
            <!-- Enlace: One-Way (Única vía) -->
            <span>Edad: {{ edad }} años</span>
        </div>
        <div>
            <!-- Enlace: Two-Way (Doble vía) -->
            <select v-model="genero" :disabled="bloqueado">
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>
                <option value="Otro">Otro</option>
            </select>
        </div>
        <div>
            <!-- Enlace: Two-Way (Doble vía) -->
            <input type="range" min="0" max="100" v-model="edad" :disabled="bloqueado" />
        </div>
        <div>
            <input ref="myInput" type="file" required :disabled="bloqueado">
        </div>
        <div>
            <!-- Enlace: One-Way (Única vía) -->
            <input type="submit" :value="mensajeConfirmacion" @click="procesarFormulario($event)" :disabled="bloqueado" />
        </div>
    </form>
</template>