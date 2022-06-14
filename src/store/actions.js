export default {
  addTask(context, task) {

    context.commit("ADD_TASK", task);
  }
}