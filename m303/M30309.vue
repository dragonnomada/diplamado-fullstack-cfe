<!-- 
<script>
    // Option API
    export default {
        ...
    }
</script> 
-->

<!-- 
<script setup>
    // Composition API
    import { ... } from "vue"
    ...
</script> 
-->

<script setup>
    import { ref, onMounted, onUnmounted } from "vue"

    // ref -> valor reactivo (Si cambia la vista se actualiza)
    // { value } -> .value

    // title.value
    const title = ref("Hola mundo 😊") 
    const contador = ref(0)
    const id = ref(null)

    onMounted(() => {
      console.log("Montando el componente...", title.value)
      id.value = setInterval(() => {
          contador.value++
      }, 1000)
    })
    
    onUnmounted(() => {
      console.log("Desmontando el componente...", title.value) 
      clearInterval(id.value)
    })
  
  	function reiniciar() {
      contador.value = 0
    }

</script>

<template>
    <h1>{{ title }}</h1>
  	<p> Contador: {{contador}}</p>
  	<button @click="reiniciar()">Reiniciar</button>
</template>