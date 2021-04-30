import Vue from 'vue'
import Vuex from 'vuex'

import Axios from 'axios';

Vue.use(Vuex)

const urlApiPrueba = 'https://demo7586883.mockable.io/' ;

export default new Vuex.Store({
  state: {
    objetos : [],
    nombreCentro : '' 
  },
  getters: {
    objetos : state => state.objetos
  },
  mutations: {
    setObjetos(state,data){
      state.objetos = data;
    },
    setCentro(state,data){
      state.nombreCentro = data.toUpperCase() 
    }
  },
  actions: {
    async leerObjetos(context){
      console.log("consumiendo el vicio?");
      let objetosData = (await Axios.get(urlApiPrueba + '/pruebaVue')).data;
      console.log("se leyeron los objetos", objetosData);
      context.commit("setObjetos", objetosData);
    }
  },
  modules: {
  }
})
