import Vue from "vue";
import Vuex from "vuex";
import Tasks from "./modules/Tasks/index";
import state from "./state";


Vue.use(Vuex);

export default new Vuex.Store({
  state,
  modules:{
    Tasks
  }
});
