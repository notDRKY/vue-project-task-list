<template>
  <button @click="delTodos">Clear all task list</button>
</template>

<script>
import { store } from '../store';

export default {
  name: "todo-del-all",
  methods: {
    delTodos() {
      if (confirm('Do you want to delete the entire to-do list?')) {
        store.clearTodosAction()
      }
    }
  }
}

</script>