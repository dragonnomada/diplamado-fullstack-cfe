import { defineStore } from "pinia"
import { ref, computed } from "vue"

// VUEX: ACTION->MUTATION->STATE
// PINIA: ACTION-STATE

export const useReloj = defineStore("reloj", () => {
    // ~ state
    const segundos = ref(0)
    const minutos = ref(0)
    const horas = ref(0)

    // ~ getters
    const display = computed(() => `0${horas.value}`.slice(-2) + ":" + `0${minutos.value}`.slice(-2) + ":" + `0${segundos.value}`.slice(-2))

    // ~ mutations
    const addMinute = () => minutos.value++

    // ~ actions
    function toc() {
        horas.value++
    }

    function tac() {
        addMinute()
        if (minutos.value === 60) {
            minutos.value = 0
            toc()
        }
    }

    function tic() {
        segundos.value++

        if (segundos.value === 60) {
            segundos.value = 0
            tac()
        }
    }

    return {
        segundos,
        minutos,
        horas,
        display,
        tic,
        tac,
        toc
    }
})