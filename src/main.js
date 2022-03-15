import { createApp } from 'vue'
import App from './App.vue'
import './tailwind.css'
import router from './router'
import { store } from './store'
import axios from 'axios'
import vueaxios from 'vue-axios'

createApp(App).use(router).use(store).use(vueaxios, axios).mount('#app')