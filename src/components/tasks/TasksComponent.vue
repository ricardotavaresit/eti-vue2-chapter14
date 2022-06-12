<template>
  <div>
    <h1>{{ title }}</h1>
    <task-add-component />
    <ul>
      <li v-bind:key="index" v-for="(task, index) in getTasks">
        {{ task.name }}
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
  computed: {
    getTasks() {
      return this.$store.state.tasks;
    },
  },
  components:{
    TaskAddComponent
  }
};
</script>