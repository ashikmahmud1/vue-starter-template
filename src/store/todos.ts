import { GetterTree, MutationTree, ActionTree } from "vuex";
import { State, Todo } from "./types";

export const state: State = {
  todos: [
    { text: "Buy Milk", checked: false },
    { text: "Buy Shirt", checked: true },
  ],
};

export const getters: GetterTree<State, any> = {
  todos: (state) => state.todos.filter((todo) => !todo.checked),
  dones: (state) => state.todos.filter((todo) => todo.checked),
};

export const mutations: MutationTree<State> = {
  addTodo(state, newTodo) {
    state.todos.push(newTodo);
  },
};

export const actions: ActionTree<State, any> = {
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
