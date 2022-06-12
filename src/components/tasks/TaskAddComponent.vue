<template>
  <div>
    <h1>{{ title }}</h1>
    <form v-on:submit.prevent="onSubmit">
      <input type="text" placeholder="Add new task" v-model="task.name" />
      <button type="submit">Add</button>
    </form>
  </div>
</template>


<script>
export default {
  data() {
    return {
      task: {
        name: "",
        completed: false,
      },
    };
  },
  methods: {
    onSubmit() {
      this.$store.commit("ADD_TASK", this.task);

      this.task = { name: "", completed: false };
    },
  },
};
</script>