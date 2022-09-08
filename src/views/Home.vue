<template>
    <div class="home">
        <item-list 
        :items="items" 
        :loading="loading"
        @selectItem = onSelectItem />
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import ItemList from '@/components/items/ItemsList.vue'
import { ItemInterface } from '@/models/items/itemsInterface'
import store from '@/store/index'

export default defineComponent({
    name: 'HomePage',
    components: {
        ItemList
    },
    setup() {

        const items = computed(() => {
            return store.state.items
        })

        const loading = computed(() => {
            return store.state.loading
        })

        const onSelectItem = (item: ItemInterface) => {
            store.dispatch('selectItem', {
                id: item.id,
                selected: !item.selected
            })
        }



        // mounted() 
        onMounted(() => {
            store.dispatch('loadItems')
        }) 

        return { items, loading, onSelectItem }
    },
})
</script>

<style lang="scss" scoped>

</style>
