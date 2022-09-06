<template>
  <div>
    <h1>Hello Vue Typescript</h1>
    <!-- <p>Name : {{ name }}</p>
    <p>Age : {{ age }}</p>
    <button class="btn primary-btn" @click="changeName('Smith')">Change Name</button>
    <button class="btn primary-btn ml-20" @click="changeAge()">Change Age</button> -->
    <div v-for="(job, index) in jobs" :key="index" class="mt-40 lists">
      <p>Empolyee - {{ index + 1 }}</p>
      <p>{{ job.id }}</p>
      <p>{{ job.title }}</p>
      <p>{{ job.location }}</p>
      <p>{{ job.salary }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue';
import Job from './type/job'


export default defineComponent({
  // composition API ref(), reactive() , etc
  setup() {
    const jobs = ref<Job[]>([
      {id: '1001', title: 'Junior Developer', location: 'Yangon', salary: 200000},
      {id: '1002', title: 'Junior Developer', location: 'Yangon', salary: 300000},
      {id: '1003', title: 'Junior Developer', location: 'Yangon', salary: 200000},
      {id: '1004', title: 'Senior Empolyemer', location: 'Yangon', salary: 800000},
    ])

    return { jobs };
  }

})



// setup() and data() is same

// export default defineComponent({
//   name: 'App',
//   setup() {
//     // const state = reactive({
//     //   name: 'Yoshi',
//     //   age: 35 as number | string,
//     // })

//     // return {...toRefs(state)}


//     const name = ref('Aashi');
//     const age = ref(21);

//     return { name, age }
//   },
//   // data() {
//   //   return {
//   //     name: 'John',
//   //     age: 25 as number | string,
//   //   }
//   // },
//   methods: {
//     changeName(newName: string) {
//       this.name = newName
//     },
//     changeAge() {
//       this.age = 30
//     }
//   }

// });
</script>

<style>

</style>
