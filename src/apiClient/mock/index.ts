import { ApiClientInterface } from "@/models/apiClient/ApiClient.interface";
import itemsApiClient from './items'

const apiMockClient: ApiClientInterface = {
    items: itemsApiClient
}
    
export default apiMockClient
