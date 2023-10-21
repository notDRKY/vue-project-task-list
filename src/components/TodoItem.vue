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
      if (confirm(`You are going to delete the task: '${this.todo.title}'`)) {
        store.delTodoAction(this.todo.id)
      }
    },
    toogleDone() {
      if (confirm(`You are going to change the status of the task: '${this.todo.title}'`)) {
        store.toggleDoneAction(this.todo.id)
      } else {
        this.done = this.todo.done
      }
    },
  }
}
</script>