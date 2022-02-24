import { GetterTree, MutationTree, ActionTree } from "vuex";
import { TodoState, Todo } from "./types";

const state: TodoState = {
  todos: [
    { text: "Buy Milk", checked: false },
    { text: "Buy Shirt", checked: true },
  ],
};

const getters: GetterTree<TodoState, any> = {
  todos: (state) => state.todos.filter((todo) => !todo.checked),
  dones: (state) => state.todos.filter((todo) => todo.checked),
};

const mutations: MutationTree<TodoState> = {
  addTodo(state, newTodo) {
    state.todos.push(newTodo);
  },
};

const actions: ActionTree<TodoState, any> = {
  addTodoAsync({ commit }, id) {
    fetch("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((data) => data.json())
      .then((item) => {
        const todo: Todo = {
          checked: false,
          text: item.title,
        };
        commit("addTodo", todo);
        console.log(item);
      });
  },
};

export const todos = {
    state,
    getters,
    mutations,
    actions
}
