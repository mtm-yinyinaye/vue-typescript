import { ItemInterface } from '@/models/items/itemsInterface'
import { createStore } from 'vuex'
import { ItemsStateInterface } from './ItemsStateInterface'
import axios, { AxiosResponse } from 'axios'

const state: ItemsStateInterface = {
    loading: false,
    items: []
}

export default createStore({
    state: state,
    mutations: {
        loadingItems(state: ItemsStateInterface) {
            state.loading = true
            state.items = []
        },

        loadedItems(state: ItemsStateInterface, items: ItemInterface[]) {
            state.items = items
            state.loading = false
        },
        selectItem(state: ItemsStateInterface, params: { id: number, selected: boolean } ) {
            const { id, selected } = params
            const item = state.items.find(o => o.id === id)
            if (item) {
                item.selected = selected
            } 
        }
    },
    actions: {
        loadItems({ commit, state }) {
            commit('loadingItems')

            setTimeout(() => {
                const url = '/static/data/items.json';
                axios
                    .get(url)
                    .then((response: AxiosResponse) => {
                        commit('loadedItems', response.data as ItemInterface[])
                    })
                    .catch((error: any) => {
                        console.error('ItemsApiClient: HttpClient: Get: error', error)
                    })
            }, 1000)
        },
        selectItem({ commit }, params: { id: number, selected: boolean }) {
            commit('selectItem', params)
        }
    },
    modules: {

    }
})