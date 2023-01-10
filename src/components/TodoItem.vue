<template>
  <div>
    <li @dblclick="delTask">
      <!--
        La directiva v-model es un atajo que combina la directiva v-bind 
        para enlazar el valor del elemento con una propiedad, y la directiva 
        v-on para escuchar los eventos de cambio del elemento y actualizar 
        la propiedad.
      -->
      <input v-model="taskInfo.completed" type="checkbox">
      <del v-if="taskInfo.completed">{{ taskInfo.task }}</del>
      <span v-else>{{ taskInfo.task }}</span>
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

<style>
ul li {
  list-style: none;
}
</style>