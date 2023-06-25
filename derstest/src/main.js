import './assets/main.css'
import { createPinia } from 'pinia'
import { store } from '../src/stores'
import { createApp } from 'vue'
import App from './App.vue'


createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
