<template>
  <div id="app">
    <ul>
      <li v-for="todo in todos" :key="todo.text">{{ todo.text }}</li>
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
import { State } from "vuex-class";
import { Todo } from "./store/types";

@Component
export default class App extends Vue {
  @State todos!: Todo[];
}
</script>

<style lang="scss"></style>
