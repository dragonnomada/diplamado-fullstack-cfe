import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import DataTable from 'datatables.net-vue3'
import Select from 'datatables.net-select'
import DataTableBs5 from 'datatables.net-bs5'
// import VueHtml2pdf from 'vue-html2pdf'
// import Vue from 'vue'
// import VueHtml2pdf from 'vue3-html2pdf'

// import './assets/main.css'
import 'datatables.net-bs5/css/dataTables.bootstrap5.css'

DataTable.use(Select)
DataTable.use(DataTableBs5)

// Vue.use(VueHtml2pdf)

const app = createApp(App)

// app.use(DownloadExcel)
// app.use(VueHtml2pdf)
app.use(router)

app.mount('#app')
