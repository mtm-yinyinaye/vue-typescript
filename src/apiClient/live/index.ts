import { ApiClientInterface } from "@/models/apiClient/ApiClient.interface";
import itemsApiClient from './items'

const apiLiveClient: ApiClientInterface = {
    items: itemsApiClient
}
    
export default apiLiveClient
