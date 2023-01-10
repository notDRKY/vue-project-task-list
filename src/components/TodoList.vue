<template>
  <div>
    <h2>{{ tittleName }}</h2>
    <ul>
      <todo-item v-for="i in taskList" :key="i.id" :taskInfo="i"></todo-item>
    </ul>
  </div>
</template>

<script>
  import TodoItem from './TodoItem.vue'
  export default {  
    data() {
      return {
        taskList: [
          {"id":23, "task":"Test task 1", "completed":false},
          {"id":24, "task":"Test task 2", "completed":true},
          {"id":25, "task":"Test task 3", "completed":true}
        ]
      }
    },
    name: 'TodoList',
    props: {
      tittleName: String
    },
    components: {
      TodoItem
    }
  }
</script>