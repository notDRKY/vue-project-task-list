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
  body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #f9fafc;
    font-size: 18px;
    display: grid;
    place-items: center;
  }

  li {
    list-style: none;
  }

  /* div */
  #app {
    background-color: antiquewhite;
  }
</style>
