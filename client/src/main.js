import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.prototype.$http = axios;
Vue.prototype.$http.defaults.withCredentials = true;
Vue.prototype.$http.defaults.baseURL =
    process.env.NODE_ENV === 'development'
        ? process.env.VUE_APP_API_DEV
        : process.env.VUE_APP_API_PROD;

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app');
