import request from '../utils/request'

//  Mock.js获取用户测试信息
export function getBasicTableUser(query) {
  return request({
    url: '/getBasicTableUser',
    method: 'get',
    params: query
  })
}
