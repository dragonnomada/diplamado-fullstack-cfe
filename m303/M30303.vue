<script>
export default {
    data() { // Estado físico: los valores son retenidos
        return {
            edad: 18,
            genero: "Otro"
        }
    },
    computed: { // Estado virtual: los valores son computados
        mensajeConfirmacion() {
            return 'Confirmar: ' + this.genero + 
                    ' / ' + this.edad + ' años'
        }
    }
}
</script>

<template>
    <div>
        <!-- Enlace: One-Way (Única vía) -->
        <span>Edad: {{ edad }} años</span>
    </div>
    <div>
        <!-- Enlace: Two-Way (Doble vía) -->
        <select v-model="genero">
            <option value="Hombre">Hombre</option>
            <option value="Mujer">Mujer</option>
            <option value="Otro">Otro</option>
        </select>
    </div>
    <div>
        <!-- Enlace: Two-Way (Doble vía) -->
        <input type="range" min="0" max="100" v-model="edad" />
    </div>
    <div>
        <!-- Enlace: One-Way (Única vía) -->
        <input type="submit" :value="mensajeConfirmacion" />
    </div>
</template>