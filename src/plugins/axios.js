import axios from 'axios'

export default axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 1000,
    headers: {
        'X-API-KEY': import.meta.env.VITE_API_KEY
    },
})

