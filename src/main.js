import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

//Vue.config.productionTip = false

console.log(new Vue)

const appMainInstance = new Vue(
    {
        router,
        store,
        render: h => h(App)
    }
)

appMainInstance.$mount('#isikexo');