<template>
    <div class="home">
        <item-list :items="items" />
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import ItemList from '@/components/items/ItemsList.vue'
import { ItemInterface } from '@/models/items/itemsInterface'

export default defineComponent({
    name: 'HomePage',
    components: {
        ItemList
    },
    setup() {
        const items:ItemInterface[] = reactive([
            {id: 1, name: "item1", selected: false},
            {id: 2, name: "item2", selected: true},
            {id: 3, name: "item3", selected: false},
            {id: 4, name: "item4", selected: false},
            {id: 5, name: "item5", selected: false},
        ])

        return { items }
    },
})
</script>

<style lang="scss" scoped>

</style>
