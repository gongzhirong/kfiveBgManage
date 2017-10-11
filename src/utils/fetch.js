import axios from 'axios'

// 创建axios实例
console.log(process.env)
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 10000         // 请求超时时间
})

// TODO后续加预算处理拦截等操作

export default service
