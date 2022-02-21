import request from '../utils/request'

export const fetchData = query => {
  return request({
    url: '/getUser',
    method: 'get',
    params: query
  })
}

//  Mock.js获取用户测试信息
export function getUser(query) {
  return fetchData(query)
}
