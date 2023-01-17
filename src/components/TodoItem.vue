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
import { store } from '../store';

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
    }
  },
  methods: {
    delTodo() {
      store.delTodoAction(this.todo.id)
    },
    toogleDone() {
      store.toggleDoneAction(this.todo.id)
    },
  }
}
</script>