import axios from 'axios'
import { BASE_URL_PRODUCTION, BASE_URL_DEVELOPMENT } from '../../Constants/api'

export default () => {
    let headers = {}
    const authToken = localStorage.getItem('TRAVEL_SHOP_AUTH_TOKEN')
    const baseURL = process.env.NODE_ENV === 'production' ? BASE_URL_PRODUCTION : BASE_URL_DEVELOPMENT

    if (authToken) headers.Authorization = `Bearer ${authToken}`

    const axiosInstance = axios.create({ baseURL, headers }) 

    axiosInstance.interceptors.response.use((response) => 
        new Promise((resolve, reject) => {
            resolve(response)
        }),
        (err) => {
            if (!err.response) {
                return new Promise((resolve, reject) => {
                    reject(err)
                }) 
            }
    
            if (err.response.status === 401 && headers.Authorization) {
                localStorage.removeItem('TRAVEL_SHOP_USER_ROLE')
                localStorage.removeItem('TRAVEL_SHOP_AUTH_TOKEN')
                localStorage.removeItem('TRAVEL_SHOP_AVATAR_LOCATION')
            }
            
            return new Promise((resolve, reject) => {
                reject(err)
            })
        }
    )

    return axiosInstance
}