<template>
    <div>
        <h3>Items</h3>
        <ul>
            <li v-for="item in items" :key="item.id" @click="onItemSelected(item)">
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
    },

    setup() {
        const onItemSelected = (item: ItemInterface) => {
            item.selected = !item.selected;
            console.log('onItemSelect', item.id, item.selected)
        }

        return { onItemSelected }
    }
})
</script>


<style lang="sss" scoped>

</style>