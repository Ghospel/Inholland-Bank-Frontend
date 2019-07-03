import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
    accessToken: null
}
export default new Vuex.Store({
    state,
})
