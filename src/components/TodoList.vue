<template>
  <div>
    <h2></h2>
    <ul v-if="todos.length">
      <todo-item v-for="item in todos" :key="item.id" :todo="item" />
    </ul>
    <p v-else>No hay tareas que mostrar</p>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "todo-list",
  components: {
    TodoItem,
  },
  props: ["title"],
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "Learn JavaScript",
          done: false,
        },
        {
          id: 2,
          title: "Learn Vue",
          done: false,
        },
        {
          id: 3,
          title: "Play around in JSFiddle",
          done: true,
        },
        {
          id: 4,
          title: "Build something awesome",
          done: true,
        },
      ],
    };
  },
};
</script>