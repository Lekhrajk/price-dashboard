import axios from "axios"

// Create axios instance with default config
const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || '',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
})

export const apiWrapper = async (method, url, data = null, config = {}) => {
    try {
        const response = await api({
            method,
            url,
            data,
            ...config
        })
        
        return {
            data: response.data,
            hasError: false,
            status: response.status
        }
    } catch (error) {
        return {
            data: null,
            hasError: true,
            status: error.response?.status || 500,
            message: error.response?.data?.message || error.message
        }
    }
}
