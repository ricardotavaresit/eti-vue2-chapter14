<template>
  <div>
    <h1>{{ title }}</h1>
    <task-add-component />
    <ul>
      <li
        v-bind:key="index"
        v-for="(task, index) in getSortedTasks"
        v-bind:class="{ completed: task.completed }"
      >
        {{ task.name }} - {{ task.completed ? "Completed" : "Uncompleted" }}
        <a href="#" v-on:click.prevent="completedTask(task)">Toogle</a>
      </li>
    </ul>
  </div>
</template>


<script>
import TaskAddComponent from "./TaskAddComponent";
export default {
  data() {
    return {
      title: "Hi Task",
    };
  },
  methods: {
    completedTask(task) {
      this.$store.commit("TOOGLE_TASK", task);
    },
  },
  computed: {
    getTasks() {
      return this.$store.state.tasks;
    },

    getSortedTasks() {
      return this.$store.getters.sortedTasks;
    },
  },
  components: {
    TaskAddComponent,
  },
};
</script>

<style scoped>
.completed {
  background: green;
}
</style>