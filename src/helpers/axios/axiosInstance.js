import axios from 'axios'
import headers from './headers'

const baseURL = 
    process.env.REACT_APP_SERVER_BASE_URL ? 
    process.env.REACT_APP_SERVER_BASE_URL : 
    'http://localhost:4000'

const axiosInstance = axios.create({ 
    baseURL,
    headers
}) 

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
            localStorage.removeItem('TRAVEL_SHOP_AUTH_TOKEN')
            localStorage.removeItem('TRAVEL_SHOP_AVATAR_LOCATION')
            localStorage.removeItem('TRAVEL_SHOP_USER_ROLE')
            
            return window.location = '/login'
        }

        if (err.response.status === 401) {
            return window.location = '/login'
        }
        
        return new Promise((resolve, reject) => {
            reject(err)
        })
    }
)

export default axiosInstance