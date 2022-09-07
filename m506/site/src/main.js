import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import DataTable from 'datatables.net-vue3'
import Select from 'datatables.net-select'
import DataTableBs5 from 'datatables.net-bs5'

import './assets/main.css'
import 'datatables.net-bs5/css/dataTables.bootstrap5.css'

DataTable.use(Select)
DataTable.use(DataTableBs5)

const app = createApp(App)

app.use(router)

app.mount('#app')
