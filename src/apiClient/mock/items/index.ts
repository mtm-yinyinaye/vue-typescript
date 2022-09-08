import { ItemsApiClientUrlsInterface, ItemsApiClientInterface, ItemsApiClientModel } from "@/models/apiClient/items";


const urls: ItemsApiClientUrlsInterface = {
    fetchItems: '/static/data/mock/items.json'
}

const itemsApiClient: ItemsApiClientInterface = new ItemsApiClientModel(urls)
export default itemsApiClient