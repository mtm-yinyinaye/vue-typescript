<template>
    <div>
        <h3>My Items</h3>
        <Loader v-show="loading" />
        <ul v-show="!loading">
            <Item 
                v-for="item in items"
                :key="item.id"
                :model="item"
                @selected="onItemSelected" />
        </ul>
    </div>
</template>


<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ItemInterface } from '@/models/items/itemsInterface'
import Item from './children/item.vue'
import Loader from '@/components/shared/loader.vue'

export default defineComponent({
    components: { Item, Loader },
    props: {
        items: {
            type: Array as PropType<ItemInterface[]>
        },
        loading: {
            type: Boolean
        }

    },

    setup(props, {  emit }) {
        const onItemSelected = (item: ItemInterface) => {
            emit('selectItem', item)
        }

        return { onItemSelected }
    }
})
</script>


<style lang="scss">
    ul {
        list-style-type: none;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 0px;
    }

</style>