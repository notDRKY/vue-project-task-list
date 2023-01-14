<template>
  <TodoList />
  <todo-add />
  <br />
  <todo-del-all />
</template>

<script>
import TodoList from "./components/TodoList.vue";
import TodoAdd from "./components/TodoAdd.vue";
import TodoDelAll from "./components/TodoDelAll.vue";

export default {
  name: "App",
  components: {
    TodoList,
    TodoAdd,
    TodoDelAll,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
