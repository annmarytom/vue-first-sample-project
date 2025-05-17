import { createApp } from "vue";//to create a vue application instance
import App from "./App.vue";
import './assets/main.css';//load your global styles into the app
const app = createApp(App)

app.mount('#app')  