<!-- SFC: .vue -->
<!-- script: lógica ~ Option API | Composition API -->
<!-- template: vista -->
<!-- style: diseño -->

<script>
// Componente -> this
export default {
    data() {
        return {
            color: "#ff0000"
        }
    }
}

// 1. Estado inicial del componente
//      data() { return { <estado>: <valor> } }

// 2. Enlazar un estado a la vista por vía directa
//      <tag>{{ <estado> }}</tag>

// 3. Enlazar un estado a la vista por atributo directo
//      <tag :<atributo>="<estado>">
// :<atributo> ~ v-bind:<atributo>

// 4. Enlazar un evento de la vista a un estado
//      <tag @<evento>="<método|expresión>"
// @<evento> ~ v-on:<evento>
// $event <- DOM Event

// 5. Enlazar un control de la vista a un estado*
//      <input|textarea|select v-model="<estado>">

</script>

<template>
    <h1>Hola mundo 😊</h1>
    <hr />
    <label>{{color}}</label>
    <hr />
    <input type="color" 
            :value="color" 
            @change="color = $event.target.value" 
    />
    <hr />
    <input type="color" v-model="color" />
</template>