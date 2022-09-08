import { ApiClientInterface } from "@/models/apiClient/ApiClient.interface"; 
import apiMockClient from './mock'
import apiLiveClient from './live'

const env: string = process.env.VUE_APP_API_CLIENT

const apiClient: ApiClientInterface = (env === 'live') ? apiLiveClient : apiMockClient;

export default apiClient