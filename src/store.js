import { reactive } from "vue";

export const store = {
  debug: false,
  state: {
    todos: reactive([
      {
        id: 1,
        title: "Learn JavaScript",
        done: false,
      },
      {
        id: 2,
        title: "Learn Vue",
        done: false,
      },
      {
        id: 3,
        title: "Play around in JSFiddle",
        done: true,
      },
      {
        id: 4,
        title: "Build something awesome",
        done: true,
      }
    ])
  },
  addTodoAction(newTitle, newDone = false) {
    if (this.debug) console.log('addTodoAction triggered with ', newTitle);
    // Calcula el número máximo de id's
    let maxId = this.state.todos.reduce(
      (max, item) => (item.id > max ? item.id : max), 0
    );
    // Añade un nuevo objeto a la colección
    this.state.todos.push({
      id: maxId + 1,
      title: newTitle,
      done: newDone
    });
  },
  delTodoAction(id) {
    if (this.debug) console.log('delTodoAction triggered with ', id);
    let index = this.state.todos.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.state.todos.splice(index, 1);
    }
  },
  toggleDoneAction(id) {
    if (this.debug) console.log('toogleDoneAction triggered');
    // Busca el objeto en la colección que tenga el id igual
    // al que se le pasa al método para guardarlo en la variable
    let todo = this.state.todos.find((i) => i.id === id);
    // Le cambia el estado al atributo done(boolean)
    todo.done = !todo.done;
  },
  clearTodosAction() {
    if (this.debug) console.log('clearTodosAction triggered');
    // Elimina toda la colección de objetos utilizando .splice()
    this.state.todos.splice(0, this.state.todos.length);
  }
}