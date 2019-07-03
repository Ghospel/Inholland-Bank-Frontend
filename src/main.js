import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false
Vue.use(Vuetify)
new Vue({
  store,
  router: Router,
  render: h => h(App),
}).$mount('#app')

