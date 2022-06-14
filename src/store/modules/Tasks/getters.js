export default {
  sortedTasks(state) {
    return state.tasks.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }

      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }

      return 0;
    })
  },
  tasksNotCompleted(state) {
    return state.tasks.filter(item => item.completed == false)
  },
  tasksCompleted(state) {
    return state.tasks.filter(item => item.completed == true)
  },
  totalTasks(state) {
    return state.tasks;
  }
}