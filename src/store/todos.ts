import { GetterTree, MutationTree, ActionTree, Module } from "vuex";
import { TodoState, Todo, RootState } from "./types";

const state: TodoState = {
  todos: [
    { text: "Buy Milk", checked: false },
    { text: "Buy Shirt", checked: true },
  ],
};

const getters: GetterTree<TodoState, RootState> = {
  todos: (state, getters, rootState) =>
    state.todos.filter((todo) => !todo.checked),
  dones: (state) => state.todos.filter((todo) => todo.checked),
};

const mutations: MutationTree<TodoState> = {
  addTodo(state, newTodo) {
    state.todos.push(newTodo);
  },
};

const actions: ActionTree<TodoState, RootState> = {
  addTodoAsync({ commit, rootState }, id) {
    fetch("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((data) => data.json())
      .then((item) => {
        const todo: Todo = {
          checked: false,
          text: rootState.login.user + ": " + item.title,
        };
        commit("addTodo", todo);
        console.log(item);
      });
  },
};

export const todos: Module<TodoState, RootState> = {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};
