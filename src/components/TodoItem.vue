<template>
  <div>
    <li>
      <input @dblclick="delTask" type="checkbox">
    </li>
  </div>
</template>

<script>
  export default {
    methods: {
      delTask() {
        alert('Se desea eliminar este elemento de la lista')
      }
    },
    name: 'TodoItem',
    props: {
      taskInfo: String
    }
  }
</script>