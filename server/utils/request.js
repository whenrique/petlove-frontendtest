const axios = require('axios')

const request = (url, config) => {
  return axios(url, config)
}

module.exports = request
