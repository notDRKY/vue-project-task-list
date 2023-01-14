<template>
  <div>
    <form @submit.prevent="addTodo">
      <input v-model="newTodo" />
      <button type="submit">Añadir</button>
    </form>
  </div>
</template>

<script>
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
        alert("Quiero añadir " + this.newTodo);
        this.newTodo = "";
      }
    },
  },
};
</script>