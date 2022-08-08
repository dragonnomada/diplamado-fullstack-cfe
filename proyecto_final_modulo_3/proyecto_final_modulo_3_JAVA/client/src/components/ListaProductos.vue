<template>
    <div class="card bg-dark">
        <div class="card-header">
            Lista de productos
        </div>
        <div class="card-body">

            <table class="table table-dark table-striped table-bordered">
                <thead>
                    <tr>
                        <th class=""><strong>#</strong></th>
                        <th class=""><strong>Producto</strong></th>
                        <th class=""><strong>Precio</strong></th>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="producto in productos">
                        <tr>
                            <td>
                                {{ producto.id }}
                            </td>
                            <td>
                                {{ producto.nombre }}
                            </td>
                            <td>
                                {{ producto.precio }}
                            </td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
    import {inject, onMounted, ref} from "vue"

    const productos = inject("productos/data")
    const obtener = inject("productos/@fetchObtener")

    onMounted(() => 
    {
        obtener()
    })
</script>