<template>
  <div>
    <h1>{{ title }}</h1>
    <ul>
      <li v-bind:key="index" v-for="(task, index) in getTasks">
        {{ task.name }}
      </li>
    </ul>
  </div>
</template>


<script>
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
};
</script>