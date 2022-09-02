// Servicio Goblal
import { ref } from "vue"

// ESTADOS / PROPIEDADES
const contador = ref(0)

// ACCIONES
function incrementar() {
    contador.value += 1
}

// ACCIONES
function decrementar() {
    contador.value -= 1
}

// COMPOSICIÓN: STORE/REDUX | STATE/ACTION | REACTIVE COMPONENT
export default {
    contador,
    incrementar,
    decrementar
}