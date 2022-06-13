import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      { name: "Task 1", completed: true },
      { name: "Task 2", completed: false },
      { name: "Task 3", completed: false },
      { name: "Task 4", completed: false },
    ]
  },
  mutations: {
    ADD_TASK(state, task) {
      state.tasks.push(task);
    },
    TOOGLE_TASK(state, task) {
      task.completed = !task.completed
    }
  },
  actions: {
    addTask(context, task) {

      //Ajax

      context.commit("ADD_TASK", task);

    }
  }
});
