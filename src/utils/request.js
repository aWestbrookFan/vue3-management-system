// 配置 request
import axios from 'axios'
import { ElMessage } from 'element-plus'
const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 15000
})

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    ElMessage.error({ message: error, type: 'error' })
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    if (response.status === 200 && response.data.code === 200) {
      return response.data
    } else {
      ElMessage.error({ message: '请求出错', type: 'error' })
      return Promise.reject(response)
    }
  },
  error => {
    ElMessage.error({ message: error, type: 'error' })
    return Promise.reject(error)
  }
)

export default service
