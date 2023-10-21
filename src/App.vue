<template>
  <h1>Task list</h1>
  <TodoList />
  <todo-add />
  <todo-del-all />
</template>

<script>
import TodoList from "./components/TodoList.vue";
import TodoAdd from "./components/TodoAdd.vue";
import TodoDelAll from "./components/TodoDelAll.vue";

export default {
  name: "App",
  components: {
    TodoList,
    TodoAdd,
    TodoDelAll,
  },
};
</script>

<style>
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #2f2f2f;
  background-color: #f2f2f2;
  font-size: 18px;
  display: grid;
  place-items: center;
}

/* div */
#app {
  padding: 1rem;
  min-width: 30rem;
  min-height: auto;
}

#app ul {
  padding-inline-start: 0rem;
}

#app li {
  list-style: none;
}

#app form {
  display: flex;
  align-items: center;
}

#app input[type=checkbox] {
  width: 1rem;
  height: 0.825rem;
}

#app input {
  background-color: #f2f2f2;
  font-size: 18px;
  margin: 0rem;
  width: 70%;
  height: 2rem;
  border-radius: 10px;
  border: 0.1rem solid #a5a5a5;
}

#app input::placeholder {
  padding-left: 0.25rem;
  color: #a5a5a5;
  font-style: italic;
}

#app button {
  margin-top: 0.5rem;
  color: #f2f2f2;
  font-size: 18px;
  width: 100%;
  height: 2.2rem;
  border-radius: 10px;
  border: 0.1rem transparent;
  cursor: pointer;
  background-color: #ff3d43;
}

#app button:hover {
  background-color: #b22a2e;
}

#app button[type=submit] {
  margin: 0rem 0rem 0rem 0.5rem;
  min-height: 2.2rem;
  color: #f2f2f2;
  background-color: #0d6efd;
  flex: 1;
}

#app button[type=submit]:hover {
  background-color: #0a52be;
}
</style>
