<template>
  <div id="app">
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
import { Action, Getter, Mutation } from "vuex-class";
import { Todo } from "./store/types";

@Component
export default class App extends Vue {
  @Getter todos!: Todo[];
  @Getter dones!: Todo[];

  @Mutation addTodo!: (todo: Todo) => void;

  @Action addTodoAsync!: (id: string) => void;

  newTodo: Todo = {
    text: "New Todo",
    checked: false,
  };

  public mounted() {
    this.addTodoAsync('1');
  }
}
</script>

<style lang="scss"></style>
