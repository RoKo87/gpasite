import { createApp } from 'vue'
import App from './Test.vue'
//import router from './router'
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';
import Badge from 'primevue/badge';
import InputNumber from 'primevue/inputnumber';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import './assets/main.css'

const app = createApp(App)

//app.use(router)
app.use(PrimeVue)
app.component('Button', Button)
app.component('Dropdown', Dropdown)
app.component('InputText', InputText)
app.component('Badge', Badge)
app.component('InputNumber', InputNumber)

app.mount('#app')
