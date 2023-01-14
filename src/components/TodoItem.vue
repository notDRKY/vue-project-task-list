<template>
  <li @dblclick="delTodo">
    <input type="checkbox" v-model="done" @change="toogleDone" />
    <label>
      <del v-if="todo.done">
        {{ todo.title }}
      </del>
      <span v-else>
        {{ todo.title }}
      </span>
    </label>
  </li>
</template>

<script>
export default {
  name: "todo-item",
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      done: this.todo.done,
    };
  },
  methods: {
    delTodo() {
      alert("Se quiere borrar " + this.todo.title);
    },
    toogleDone() {
      alert("Se quiere cambiar el estado de " + this.todo.title);
      this.done = this.todo.done;
    },
  },
};
</script>