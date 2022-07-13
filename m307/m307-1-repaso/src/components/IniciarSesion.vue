<template>
    <div>
        <div>
            <h1>Bienvenido, inicia sesión</h1>
            <h2>{{this.usuarioDefecto}}</h2>
        </div>
        <div>
            <input type="text" placeholder="Usuario" v-model="usuario" :disabled="bloqueado">
            <p class="error" v-if="errorUsuario">{{errorUsuario}}</p>
        </div>
        <div>
            <input type="password" placeholder="Contraseña" v-model="contraseña" :disabled="bloqueado">
            <p class="error" v-if="errorContraseña">{{errorContraseña}}</p>
        </div>
        <div>
            <button @click="iniciarSesion()" :disabled="bloqueado">Iniciar Sesión</button>
        </div>
        <div v-if="bloqueado">
            <span style="padding-right: 4px"><i class="fa-solid fa-smile fa-spin"></i></span>
            <span>Iniciando sesión ...</span>
        </div>
    </div>
</template>

<!-- Option API -->
<script>
export default {
    props: ["usuario-defecto"], // this.usuarioDefecto
    data() {
        return {
            usuario: this.usuarioDefecto || "",
            contraseña: "",
            bloqueado: false,
            errorUsuario: "",
            errorContraseña: "",
        }
    },
    watch: {
        usuario(nuevoUsuario) {
            this.usuarioDefecto.value = nuevoUsuario
        }
    },
    methods: {
        iniciarSesion() {
            this.bloqueado = true
            // TODO: VALIDACIONES
            if (/^[\s]*$|[A-Z]+/.test(this.usuario)) {
                this.errorUsuario = "El usuario es válido"
                setTimeout(() => this.errorUsuario = "", 2000)
                this.bloqueado = false
                return
            }

            if (this.contraseña.trim() === "") {
                this.errorContraseña = "La contraseña está vacía"
                setTimeout(() => this.errorContraseña = "", 2000)
                this.bloqueado = false
                return
            }
            // TODO: CONSUMIR EL API
        }
    }
}
</script>

<style scoped>
p.error {
    font-size: 0.6rem;
    color: red;
}
</style>