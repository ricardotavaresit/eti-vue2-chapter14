export default {
  ADD_TASK(state, task) {
    state.tasks.push(task);
  },
  TOOGLE_TASK(state, task) {
    task.completed = !task.completed
  }
}