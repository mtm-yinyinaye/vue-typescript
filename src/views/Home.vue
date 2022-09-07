<template>
    <div class="home">
        <item-list :items="items" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ItemList from '@/components/items/ItemsList.vue'

export default defineComponent({
    name: 'HomePage',
    components: {
        ItemList
    },
    setup() {
        const items:any[] = [
            {id: 1, name: "item1"},
            {id: 2, name: "item2"},
            {id: 3, name: "item3"},
            {id: 4, name: "item4"},
            {id: 5, name: "item5"},
        ]

        return { items }
    },
})
</script>

<style lang="scss" scoped>

</style>
