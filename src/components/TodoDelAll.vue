<template>
  <button @click="delTodos">Borrar toda la lista</button>
</template>

<script>
import { store } from '../store';

export default {
  name: "todo-del-all",
  methods: {
    delTodos() {
        store.clearTodosAction()
      }
    }
  }

</script>