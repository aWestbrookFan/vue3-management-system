import Mock from 'mockjs'
module.exports = [
  {
    url: '/api/getUser',
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
  }
]
