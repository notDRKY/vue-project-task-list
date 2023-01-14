<template>
  <button @click="delTodos">Borrar toda la lista</button>
</template>

<script>
export default {
  name: "todo-del-all",
  methods: {
    delTodos() {
      if (window.confirm("¿Deseas borrar toda la lista de cosas a hacer?")) {
        alert("Se quiere borrar todo");
      }
    },
  },
};
</script>