<template>
    <template v-if="anomaliasData.length">
        <!-- <DownloadExcel :json-data="anomaliasData">Exportar a Excel</DownloadExcel> -->
        <div>
            <button class="btn btn-primary block" @click="exportExcel('csv')">Exportar a CSV</button>
            <button class="btn btn-primary block" @click="exportExcel('xls')">Exportar a Excel</button>
            <button class="btn btn-primary block" @click="exportExcel('xlsx')">Exportar a Excel 2</button>
            <button class="btn btn-primary block" @click="exportExcel('xlsx3')">Exportar a Excel 3</button>
            <button class="btn btn-primary block" @click="exportExcel('txt')">Exportar a Texto</button>
            <button class="btn btn-primary block" @click="exportExcel('json')">Exportar a JSON</button>
            <button class="btn btn-primary block" @click="exportExcel('xml')">Exportar a XML</button>
            <button class="btn btn-primary block" @click="exportExcel('pdf')">Exportar a PDF</button>
        </div>
    </template>
    <div ref="myDiv" class="pdf">
        <div class="d-flex align-items-center w-100 border-bottom">
            <img class="picture" src="@/assets/logo.jpg">
            <div class="flex-grow-1 d-flex justify-content-center">
                <h1>Tabla de Anomalías</h1>
            </div>
        </div>¨
        <div>
            <p>Hay un total de {{ anomaliasData.length }} anomalías ...</p>
        </div>
        <div class="w-50">
            <canvas ref="myChart" width="200" height="200"></canvas>
        </div>
        <!-- <VueHtml2pdf>
            <template v-slot:pdf-content>
                <h1>Hola mundo</h1>
            </template>
        </VueHtml2pdf> -->
        <div class="py-4">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Usuario</th>
                        <th>Ubicación</th>
                        <th>Publicada</th>
                        <th>Creada</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="anomalia in anomalias" :key="anomalia.id_anomalia">
                        <tr>
                            <td>{{ anomalia.id_anomalia }}</td>
                            <td>{{ anomalia.usuario.nombre }} / {{ anomalia.usuario.correo }}</td>
                            <td>{{ anomalia.ubicacion.latitud }}, {{ anomalia.ubicacion.longitud }}</td>
                            <td>{{ anomalia.publicado || "NO" }}</td>
                            <td>{{ anomalia.creado }}</td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
    </div>
    <DataTable class="table table-hover table-striped" :columns="columns" :data="anomaliasData" width="100%" />
</template>

<script setup>
import { ref, computed, onMounted } from "vue"

import DataTable from "datatables.net-vue3"

import exportFromJSON from "export-from-json"
import json2xlsx from 'json2xlsx-export'
import GeneralExport from 'general-export'

// import VueHtml2pdf from 'vue-html2pdf'
// import VueHtml2pdf from 'vue3-html2pdf'

// import DownloadExcel from 'vue3-json-excel'

import { anomalias, fetchAllAnomalias } from "../services/anomalias"

// Arreglo de especificaciones
const columns = ref([
    {
        title: "ID",
        data: "id_anomalia"
    },
    // {
    //     title: "Usuario Nombre",
    //     data: "usuario_nombre"
    // },
    {
        title: "Usuario Correo",
        data: "usuario_correo"
    },
    {
        title: "Ubicación",
        data: "ubicacion"
    },
    {
        title: "Publicada",
        data: "publicado",
        render: (value, clave, frame) => {
            return value || "SIN PUBLICAR"
        }
    },
    {
        title: "Creada",
        data: "creado"
    },
])

// Datalist / FrameList
const anomaliasData = computed(() => {
    // [{ a: { x: 1 } }, { a: { x: 2 } }].map(o => o.a.x) => [1, 2]
    return anomalias.value.map(anomalia => {
        return {
            id_anomalia: `#${anomalia.id_anomalia}`,
            usuario_nombre: anomalia.usuario.nombre,
            usuario_correo: anomalia.usuario.correo,
            ubicacion: `${anomalia.ubicacion.latitud}, ${anomalia.ubicacion.longitud}`,
            publicado: anomalia.publicado || "",
            creado: anomalia.creado,
        }
    })
})

const myDiv = ref(null)
const myChart = ref(null)

onMounted(async () => {
    await fetchAllAnomalias()

    // while (anomalias.value.length === 0) {
    //     await new Promise(resolve => setTimeout(resolve, 10))
    // }

    console.log(anomalias.value)

    console.log(myChart.value)

    const ctx = myChart.value.getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: anomalias.value.map(anomalia => anomalia.ubicacion.latitud).slice(0, 6),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    })
})

async function exportExcel(type) {
    if (type === "pdf") {
        console.log(myDiv.value)
        // myDiv.value.classList.remove("d-none")
        // myDiv.value.hidden = false
        const options = {
            margin: 1,
            filename: 'Anomalias.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
        }
        html2pdf().set(options).from(myDiv.value).save()
        // myDiv.value.classList.add("d-none")
        // myDiv.value.hidden = true
        return
    }

    if (type === "xlsx3") {
        await GeneralExport("Anomalias.xlsx", () => anomaliasData.value)
        return
    }

    if (type === "xlsx") {
        console.log(anomaliasData.value)
        console.log(anomaliasData.value.map(anomalia => {
            return [
                { value: anomalia.id_anomalia, type: "number" },
                { value: anomalia.usuario_nombre, type: "string" },
                { value: anomalia.usuario_correo, type: "string" },
                { value: anomalia.ubicacion, type: "string" },
                { value: anomalia.publicado, type: "string" },
                { value: anomalia.creado, type: "string" },
            ]
        }))
        json2xlsx({
            filename: "Anomalias",
            sheet: {
                data: [
                    [{
                        value: 'Text1',
                        type: 'string'
                    }, {
                        value: 'Text2',
                        type: 'string'
                    }, {
                        value: 1000,
                        type: 'number'
                    }]
                ]
            }
        })
        return
    }

    console.log(anomaliasData.value)
    exportFromJSON({
        data: anomaliasData.value,
        fileName: "anomalias",
        exportType: exportFromJSON.types[type]
    })
}


</script>

<style scoped>
/*.pdf {
    position: absolute;
    left: -100%;
}*/
.picture {
    width: 80px;
    height: 80px;
    object-fit: cover;
}

.anomalia-table {
    width: 100%;
}

.anomalia-table td,
th {
    text-align: center;
}
</style>