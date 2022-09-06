<template>
  <div>
    <JobLists :jobs="jobs" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Job from './type/job'
import JobLists from '@/components/JobList.vue'


export default defineComponent({
  name: 'App',
  components: {
    JobLists
  },
  setup() {
    const jobs = ref<Job[]>([
      {id: '1001', title: 'Junior Developer', location: 'Yangon', salary: 200000},
      {id: '1002', title: 'Junior Developer', location: 'Yangon', salary: 300000},
      {id: '1003', title: 'Junior Developer', location: 'Yangon', salary: 200000},
      {id: '1004', title: 'Senior Empolyemer', location: 'Yangon', salary: 800000},
    ])

    // const jobs = ref<Job[]>([]);
    return { jobs };
  },

})
</script>

<style>

</style>
