<template>
    <li :class="css" @click="selectedItem">
        <div class="selected-indicator">&#9733;</div>
        <div class="name">{{ model.name }}</div>
    </li>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { ItemInterface } from '@/models/items/itemsInterface'

export default defineComponent({
    name: 'itemComponent',
    props: {
        model: Object as PropType<ItemInterface>
    },

    setup(props, {  emit }) {

        const css = computed(() => {
            let css = "item";
            if (props.model?.selected == true) {
                css += ' selected'
            }

            return css.trim();
        })

        const selectedItem = () => {
            //event name
            emit('selected', props.model);
        }

        return { css, selectedItem }
    },
})
</script>

<style lang="scss">

    li.item {
        padding: 0;
        outline: solid 1px #eee;
        display: grid;
        grid-template-columns: 1.7em auto;
        cursor: pointer;
        transition: background-color 0.3s ease;

        .name {
            padding: 5px;
            text-align: left;
        }

        .selected-indicator {
            padding: 5px;
            font-size: 1em;
            line-height: 1em;
            padding: 5px;
            color: lightgray;
        }

        &.selected {

            .selected-indicator {
                color: skyblue;
            }
        }

        &:hover {
            background-color: #eee;
        }

    }

</style>