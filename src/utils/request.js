/**
 * Axios 请求封装
 */
import axios from "axios"
import { ElMessage } from "element-plus"
import config from "../config"
import router from "../router"

const TOKEN_ERROR = "Token 已过期"
const NETWORK_ERROR = "网络异常"

const service = axios.create({
    baseURL: config.baseApi,
    timeout: 8000,
})

// 请求封装
service.interceptors.request.use((req) => {
    const headers = req.headers

    if (!headers.Authorization) {
        headers.Authorization = "bear fromsko"
    }
    return req
})

// 响应封装
service.interceptors.response.use((res) => {
    const { code, data, msg } = res.data

    if (code === 200) {
        return data
    } else if (code === 40001) {
        ElMessage.error(TOKEN_ERROR)
        setTimeout(() => {
            router.push('/login')
        }, 1500)
        return Promise.reject(TOKEN_ERROR)
    } else {
        ElMessage.error(msg || NETWORK_ERROR)
        return Promise.reject(msg || NETWORK_ERROR)
    }
})


/**
 * 请求核心函数
 * @param {*} options 参数列表
 */
function request (options) {
    options.method = options.method || 'get'

    if (options.method.toLowerCase() == 'get') {
        options.params = options.data
    }

    if (config.env === "prod") {
        service.defaults.baseURL = config.baseApi
    } else {
        service.defaults.baseURL = config.mock ? config.mockApi : config.baseApi
    }

    return service(options)
}


// 直接使用 request.get('/login', {})
['get', 'post', 'delete', 'put'].forEach((item) => {
    request[item] = (url, data, options) => {
        return request({
            url,
            data,
            method: item,
            ...options
        })
    }
})

export default request