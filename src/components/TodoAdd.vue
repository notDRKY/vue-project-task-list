<template>
  <div>
    <form @submit.prevent="addTodo">
      <input placeholder="Task to add..." v-model="newTodo" />
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
import { store } from '../store';

export default {
  name: "todo-add",
  data() {
    return {
      newTodo: "",
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo) {
        store.addTodoAction(this.newTodo)
        this.newTodo = ''
      }
    },
  },
}
</script>