<template>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modProducto">
        Nuevo
    </button>

    <!-- Modal -->
    <div class="modal fade" id="modProducto" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content bg-dark">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                    Datos de producto
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                

                <form>
                    <div class="mb-3">
                        <label for="nombre" class="form-label">
                            Nombre
                        </label>
                        <input type="text" class="form-control bg-secondary" id="nombre" v-model="prod_nombre">
                    </div>
                    <div class="mb-3">
                        <label for="precio" class="form-label">
                            Precio
                        </label>
                        <input type="number" class="form-control bg-secondary" id="precio" v-model="prod_precio">
                    </div>
                </form>


            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" @click="GuardarProducto()">
                    Guardar
                </button>
            </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {inject, ref, onMounted} from "vue"

    const fetchNuevoProducto = inject("productos/@fetchNuevo")
    const obtenerNuevo = inject("productos/@fetchObtener")

    const prod_precio = ref(0)
    const prod_nombre = ref("")

    const modal = ref(null)

    onMounted(() =>
    {
        modal.value = new bootstrap.Modal("#modProducto")
    })

    function GuardarProducto()
    {
        fetchNuevoProducto(prod_nombre.value, prod_precio.value)
        obtenerNuevo()

        modal.value.hide()
    }
</script>