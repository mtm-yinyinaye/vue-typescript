<template>
  <div>
    <header>
      <div class="order">
        <button @click="handleClick('title')">Ordered By Title</button>
        <button @click="handleClick('location')">Ordered By Location</button>
        <button @click="handleClick('salary')">Ordered By Salary</button>
      </div>
    </header>
    <JobLists :jobs="jobs" :order="order" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Job from './type/job'
import JobLists from '@/components/JobList.vue'
import OrderTerm from '@/type/OrderTerm'


export default defineComponent({
  name: 'App',
  components: {
    JobLists
  },
  setup() {
    const jobs = ref<Job[]>([
      {id: '1001', title: 'Junior Developer', location: 'Yangon', salary: 200000},
      {id: '1002', title: 'Junior Developer', location: 'Mandalay', salary: 300000},
      {id: '1003', title: 'Junior Developer', location: 'MawLaMyine', salary: 200000},
      {id: '1004', title: 'Senior Empolyemer', location: 'Yangon', salary: 800000},
    ])

    const order = ref<OrderTerm>('title');

    const handleClick = (term: OrderTerm) => {
      order.value = term
    }

    return { jobs, handleClick, order };
  },

})
</script>

<style lang="scss" scoped>
  header {
    text-align: center;

    .order {
      margin-top: 20px;

      button {
        margin: 0 10px;
        color: #1195c9;
        border:  1px solid #1195c9;
        background-clip: #d5f0ff;
        padding: 8px 16px;
        border-radius: 5px;
        cursor: pointer;
        font-weight: 700;
      }
    }
  }

</style>
