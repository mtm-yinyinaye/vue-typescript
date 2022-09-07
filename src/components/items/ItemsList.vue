<template>
    <div>
        <h3>Items</h3>
        <ul>
            <li v-for="item in items" :key="item.id">
                {{ item.name }}
            </li>
        </ul>
    </div>
</template>


<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ItemInterface } from '@/models/items/itemsInterface'

export default defineComponent({
    props: {
        items: {
            type: Array as PropType<ItemInterface[]>
        }
    }
})
</script>


<style lang="sss" scoped>

</style>