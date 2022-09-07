
import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import item from '@/components/items/children/item.vue'
import { ItemInterface } from '@/models/items/itemsInterface'

describe('item.vue', () => {
    it('renders an Item correctly', () => {
        const model: ItemInterface = {
            id: 1,
            name: 'Unit test item 1',
            selected: false
        }

        const wrapper = shallowMount(item, {
            props: {
                model: model
            }
        })

        expect(wrapper.text()).to.include('Unit test item 1')
    })

    it('has expected css class when selected is false', () => {
        const model: ItemInterface = {
            id: 2,
            name: 'Unit test item 2',
            selected: false
        }

        const wrapper = shallowMount(item, {
            props: {
                model: model
            }
        })

        const classes = wrapper.classes()
        expect(classes).to.be.an('array').that.includes('item')
        expect(classes).to.be.an('array').that.does.not.includes('selected')
    })
})
