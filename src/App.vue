<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/tasks"
      >Tasks ( {{ totalTasks }}/{{ totalTasksNotCompleted }} )</router-link
    >
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  computed: {
    totalTasksNotCompleted() {
      return this.$store.getters.tasksNotCompleted.length;
    },
    totalTasks() {
      return this.$store.getters.totalTasks.length;
    },
  },
};
</script>