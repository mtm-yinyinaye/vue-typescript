<template>
    <div class="job-list">
        <ul>
            <li v-for="job in jobs" :key="job.id">
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
import { defineComponent, PropType } from 'vue'
import Job from '@/type/job'

export default defineComponent({
    // props: ['jobs']

    props: {
        jobs: {
            required: true,
            type: Array as PropType<Job[]>
        }
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
