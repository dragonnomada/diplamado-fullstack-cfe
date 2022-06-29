<template>
    <div>
        <input type="text" v-model="username" />
        <input type="password" v-model="password" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: "",
            password: ""
        }
    }
}
</script>