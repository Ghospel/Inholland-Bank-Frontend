import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import store from './store'
import Vuetify from 'vuetify'
import BootstrapVue from 'bootstrap-vue'
import 'vuetify/dist/vuetify.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(Vuetify)
new Vue({
  store,
  router: Router,
  render: h => h(App),
}).$mount('#app')

