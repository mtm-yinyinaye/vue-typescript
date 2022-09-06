<template>
  <div class="job-list">
    Ordered By {{ order }}
    <ul>
      <li v-for="job in orderJobs" :key="job.id">
        <h2>{{ job.title }} - {{ job.location }}</h2>
        <div class="salary">
          <p>{{ job.salary }} kyat</p>
        </div>
        <div class="description">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem quisquam praesentium, consequatur tempore earum dolorum ipsum fuga in obcaecati odit alias neque, unde voluptate tempora magni quae iusto commodi! Et!</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import Job from '@/type/job'
import OrderTerm from '@/type/OrderTerm'

export default defineComponent({
  props: {
    jobs: {
      required: true,
      type: Array as PropType<Job[]>
    },
    order: {
      required: true,
      type: String as PropType<OrderTerm>
    }
  },
  setup(props) {
    const orderJobs = computed(() => {
      return [...props.jobs].sort((a: Job, b: Job) => {
        return a[props.order] > b[props.order] ? 1 : -1
      })
    })

    return { orderJobs }
  }
})
</script>

<style lang="scss" scoped>
  .job-list {
    max-width: 960px;
    margin: 40px auto;

    ul {
      padding: 0;

      li {
        list-style: none;
        padding: 16px;
        margin: 16px 0;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: #fff 0px 4px 15px 0px;

        h2 {
          margin: 0 0 10px;
          text-transform: capitalize;
        }

        .salary {
          display: flex;

          img {
            width: 30px;
          }

          p {
            margin: 10px 4px;
            color: #17bf66;
            font-weight: 700;
          }
        }
      }
    }
  }
</style>
