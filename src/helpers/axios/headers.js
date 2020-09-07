const headers = {}

const authToken = localStorage.getItem('TRAVEL_SHOP_AUTH_TOKEN')

if (authToken) {
    headers.Authorization = `Bearer ${authToken}`
}

export default headers