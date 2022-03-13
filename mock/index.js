import Mock from 'mockjs'
module.exports = [
  {
    url: '/api/getBasicTableUser',
    type: 'get',
    response: () => {
      return Mock.mock({
        code: 200,
        'data|100': [{
          'id|+1': 1,
          date: '@now()',
          name: '@cname',
          region: '@region',
          sex: '男',
          city: '@city',
          address: '@county(true)',
          desc: '是一个好孩子，天天好好学习的',
          tag: 'Home'
        }]
      })
    }
  },
  {
    url: '/api/login',
    type: 'get',
    response: ({ query }) => {
      const mockUserList = [
        { username: 'admin', password: '123456', role: 'admin' },
        { username: 'sww', password: '123456', role: 'guest' },
        { username: 'lzl', password: '123456', role: 'guest' }
      ]
      const user = mockUserList.find(
        (ele) => ele.username === query.username &&
        ele.password === query.password
      )
      if (!user) {
        return {
          code: 200,
          currentUser: false,
          userInfo: null
        }
      }
      return {
        code: 200,
        currentUser: true,
        userInfo: user
      }
    }
  }
]
