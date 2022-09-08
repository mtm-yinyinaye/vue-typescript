import { ItemInterface } from '@/models/items/itemsInterface'


export interface ItemsApiClientInterface {
    fetchItems: () => Promise<ItemInterface[]>
}
    