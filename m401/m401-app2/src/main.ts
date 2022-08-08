import { createApp } from 'vue'
import App from './App.vue'

import { IonicVue } from '@ionic/vue';

const app = createApp(App)
  .use(IonicVue);
  
app.mount('#app');