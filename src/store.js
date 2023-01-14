import { reactive } from "vue";

export const store = {
  debug: true,
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
    let maxId = this.state.todos.reduce(
      (max, item) => (item.id > max? item.id : max), 0
    );
    this.state.todos.push({
      id: maxId + 1,
      title: newTitle,
      done: newDone
    });
  },
  delTodoAction(id) {
    if (this.debug) console.log('delTodoAction triggered with ', id);
    let index = this.state.todos.findIndex((index) => item.id === id);
    if (index !== -1) {
      this.state.todos.splice(index, 1);
    }
  },
  toggleDoneAction(id) {
    if (this.debug) console.log('toogleDoneAction triggered');
  }
}