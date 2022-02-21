module.exports = [
  {
    url: '/api/getUser',
    type: 'get',
    response: () => {
      return {
        code: 2000,
        data: { id: 1, name: 'tom', age: 18 }
      }
    }
  }
]
