<template>
    <!-- <table>
        <thead>
            <tr>
                <th>A</th>
                <th>B</th>
                <th>C</th>
                <th>D</th>
            </tr>
        </thead>
        <tbody>
            <template v-for="usuario in usuarios" :key="usuario.id">
                <tr>
                    <td>{{usuario.nombre}}</td>
                    <td>{{usuario.edad}}</td>
                    <td>{{usuario.correo}}</td>
                    <td>
                        <input type="checkbox" v-model="usuario.activo">
                    </td>
                </tr>
            </template>
        </tbody>
    </table> -->
    <!-- <DataTable :data="[['A', 1, 'b', false]]">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Correo</th>
                <th>Activo</th>
            </tr>
        </thead>
    </DataTable> -->
    <!-- <DataTable 
        :columns="[{title: 'A', data: 'a'}, {title: 'B', data: 'b'}]"
        :data="[{a: 123, b: 456}]"
    /> -->
    <DataTable 
        class="table table-hover table-striped"
        :columns="columns"
        :data="usuarios"
        width="100%"
    />
</template>

<script setup>
import { ref } from "vue"

import DataTable from "datatables.net-vue3"

// Arreglo de especificaciones
const columns = ref([
    {
        title: "Nombre",
        data: "nombre"
    },
    {
        title: "Edad",
        data: "edad"
    },
    {
        title: "Correo",
        data: "correo"
    },
    {
        title: "Activo",
        data: "activo",
        type: "filter",
        // render: function ( data, type, row, meta ) {
        //     // console.log(data, type, row, meta)
        //     const checkbox = document.createElement("input")
        //     checkbox.type = "checkbox"
        //     if (row.activo) checkbox.setAttribute("checked", "true")
        //     console.log(checkbox.outerHTML)
        //     return checkbox.outerHTML;
        // }
        // render: function ( data, type, row, meta ) {
        //     return data ? "ACTIVO" : "INACTIVO";
        // }
        render: function ( data, type, row, meta ) {
            return data ? "<span class='text-success'>ACTIVO</span>" : "<span class='text-danger'>INACTIVO</span>";
        }
    },
])

// Datalist / FrameList
const usuarios = ref([
    { // Frame / Data
        id: 1,
        nombre: "Ana",
        edad: 23,
        correo: "ana@gmail.com",
        activo: true,
    },
    {
        id: 2,
        nombre: "Pepe",
        edad: 14,
        correo: "pepe@gmail.com",
        activo: true,
    },
    {
        id: 3,
        nombre: "Paco",
        edad: 41,
        correo: "paco@gmail.com",
        activo: false,
    },
    {
        id: 4,
        nombre: "Karen",
        edad: 32,
        correo: "keren@gmail.com",
        activo: false,
    },
])
</script>