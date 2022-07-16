<script setup>
import { ref, inject,defineProps ,provide } from "vue"

const nombre = ref("")
const precio = ref(0)

const fetchNuevoProducto = inject("productos/@fetchNuevo")

/* const props = defineProps(['descripcion-producto'])
const descrProducto = ref(props["descripcion-producto"] || "")
provide("descrProducto", descrProducto) */


</script>

<template>
<div class="containter">
    <div class="row">
            <div class="col">
                <p><strong >Nuevo Producto</strong></p>
                <div class="d-flex  justify-content-center align-items-center p-2 w-100">
                    <div class="d-flex w-100 card">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item d-flex flex-row ">
                                <div class="col-4 text-start">
                                    <strong class="justify-content-start">Descripcion</strong>
                                </div>
                                <div class="col-8 text-start">
                                    <input  class="form-control" type="text" placeholder="Descripcion"  v-model="nombre">
                                </div>

                            </li>
                            <li class="list-group-item d-flex flex-row ">
                                <div class="col-4 text-start"><strong>Costo</strong> </div>
                                <div class="col-8 text-start">
                                    <input   class="form-control" type="number" placeholder="costo" v-model="precio">
                                </div>

                            </li>
                            <li class="list-group-item d-flex flex-row">
                                <div class="d-flex col-2 text-start justify-content-center align-items-center w-100">
                                    <button class="btn btn-warning text-white" @click="fetchNuevoProducto(nombre, precio)">Agregar</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
</div>
            </div>
            </div>
</template>