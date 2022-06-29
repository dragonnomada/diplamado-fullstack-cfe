<template>
  <h1>{{title}} :D</h1>
  <input v-model="title">
  <Login></Login>
</template>

<script>
import Login from "./Login.vue"

export default {
  components: {
    Login
  },
  data() {
    return {
      title: "Bienvenido"
    }
  }
}
</script>