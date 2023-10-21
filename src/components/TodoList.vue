<template>
  <div>
    <h2></h2>
    <ul v-if="todos.length">
      <todo-item v-for="item in todos" :key="item.id" :todo="item" />
    </ul>
    <p v-else>No tasks to show</p>
  </div>
</template>

<script>
import { store } from "../store";
import TodoItem from "./TodoItem.vue";

export default {
  name: "todo-list",
  components: {
    TodoItem,
  },
  props: ["title"],
  data() {
    return {
      todos: store.state.todos
    };
  },
};
</script>