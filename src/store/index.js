import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rutaOpcion : ''
  },
  mutations: {
    navegar:function(state,newRoute){
      state.rutaOpcion = newRoute
    }
  },
  actions: {
  },
  modules: {
  }
})
