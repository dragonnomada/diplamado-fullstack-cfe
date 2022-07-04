<script>
const usuarios = [
    {
        id: 1,
        nombre: "Paco",
        correo: "paco@gmail.com",
        imagen: "https://placekitten.com/200"
    },
    {
        id: 2,
        nombre: "Ana",
        correo: "ana@gmail.com",
        imagen: "https://placekitten.com/201"
    },
    {
        id: 3,
        nombre: "Diego",
        correo: "diego@gmail.com",
        imagen: "https://placekitten.com/202"
    },
    {
        id: 4,
        nombre: "Paty",
        correo: "paty@gmail.com",
        imagen: "https://placekitten.com/203"
    },
]

export default {
    data() {
        return {
            usuarios: usuarios,
            usuarioActual: null
        }
    }
}
</script>

<template>
    <ul>
        <li v-for="usuario in usuarios">
            <div @click="usuarioActual = usuario">
                <img :src="usuario.imagen" />
                <span>{{ usuario.nombre }}</span>
            </div>
        </li>
    </ul>
    <div v-if="usuarioActual">
        <img class="avatar" :src="usuarioActual.imagen" />
        <p>{{ usuarioActual.nombre }}</p>
        <p>{{ usuarioActual.correo }}</p>
    </div>
</template>

<style scoped>
ul {
    cursor: pointer;
    user-select: none;
    margin: 0px;
    padding: 0px;
}

ul>li:hover {
    background-color: whitesmoke;
}

ul>li:active {
    background-color: gainsboro;
}

ul>li {
    list-style: none;
    margin: 0px;
    padding: 4px;
}

ul>li>div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 8px 8px;
    border-bottom: 3px solid cornflowerblue;
}

li>div>img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
}

.avatar {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 20px;
}
</style>