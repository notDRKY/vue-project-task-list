<!--Hay que importar los componentes-->
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <todo-list tittle-name="Cosas que hacer este año">
  </todo-list>
  <todo-item></todo-item>
  <add-item></add-item>
  <del-all></del-all>
</template>

<script>
import TodoList from './components/TodoList.vue'
import TodoItem from './components/TodoItem.vue'
import AddItem from './components/AddItem.vue'
import DelAll from './components/DelAll.vue'

export default {
  name: 'App',
  components: {
    TodoList,
    TodoItem,
    AddItem,
    DelAll
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
