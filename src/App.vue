<template>
  <div>
    <h1>Hello Vue Typescript</h1>
    <p>Name : {{ name }}</p>
    <p>Age : {{ age }}</p>
    <button class="btn primary-btn" @click="changeName('Smith')">Change Name</button>
    <button class="btn primary-btn ml-20" @click="changeAge()">Change Age</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  data() {
    return {
      name: 'John',
      age: 25 as number | string,
    }
  },
  methods: {
    changeName(newName: string) {
      this.name = newName
    },
    changeAge() {
      // this.age = 30
      this.age = "30"
    }
  }

});
</script>

<style>

</style>
