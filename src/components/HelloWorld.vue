<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { State } from "vuex-class";
import { Todo } from "../store/types";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  @State todos!: Todo[];
  public mounted() {
    console.log(this.todos);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
