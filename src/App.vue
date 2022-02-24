<template>
  <div id="app">
    <button v-if="!login.isLoggedIn" @click="loginMutation()">login</button>
    <p v-else>Hello {{ login.user }}</p>
    <h3>Todo</h3>
    <ul>
      <li v-for="todo in todos" :key="todo.text">{{ todo.text }}</li>
    </ul>
    <h3>Dones</h3>
    <ul>
      <li v-for="done in dones" :key="done.text">{{ done.text }}</li>
    </ul>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Action, Getter, Mutation, namespace } from "vuex-class";
import { LoginState, Todo } from "./store/types";

const TodoGetter = namespace("todos", Getter);
const TodoMutation = namespace("todos", Mutation);
const TodoAction = namespace("todos", Action);

const LoginMutation = namespace("login", Mutation);

@Component
export default class App extends Vue {
  @State login!: LoginState;
  @TodoGetter todos!: Todo[];
  @TodoGetter dones!: Todo[];

  @LoginMutation("login") loginMutation!: () => void;
  @TodoMutation addTodo!: (todo: Todo) => void;

  @TodoAction addTodoAsync!: (id: string) => void;

  newTodo: Todo = {
    text: "New Todo",
    checked: false,
  };

  public mounted() {
    this.addTodoAsync("1");
  }
}
</script>

<style lang="scss"></style>
