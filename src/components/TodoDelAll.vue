<template>
  <button @click="delTodos">Borrar toda la lista</button>
</template>

<script>
import { store } from '../store';

export default {
  name: "todo-del-all",
  methods: {
    delTodos() {
      if (confirm('¿Deseas borrar toda la lista de tareas?')) {
        store.clearTodosAction()
      }
    }
  }
}

</script>