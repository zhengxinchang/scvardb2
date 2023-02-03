import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currtab:0,
    mainColor: "#146ca9",
    stats:{

    }
  },
  getters: {
  },
  mutations: {
    changeCurrtab(state,t){
      state.currtab = t
    }
  },
  actions: {
  },
  modules: {
  }
})
