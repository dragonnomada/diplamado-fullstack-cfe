<script>
export default {
    data() {
        return {
            encendido: false
        }
    }
}
</script>

<template>
    <input type="checkbox" v-model="encendido" />
    <!-- v-if: Carga rápida, Cambios lentos -->
    <div v-if="encendido">
        <h1>Hola mundo</h1>
        <img width="100" src="https://place-hold.it/400" alt="">
    </div>
    <!-- v-if: Carga lenta, Cambios rápidos -->
    <div v-show="encendido">
        <h1>Otro mundo</h1>
        <img width="100" src="https://place-hold.it/400" alt="">
    </div>
    <div style="border: 1px solid red">
        <template v-if="!encendido">
            <h1>Inactivo</h1>
            <h2>Hola soy subtítulo</h2>
        </template>
    </div>
</template>