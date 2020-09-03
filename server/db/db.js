const request = require('superagent')
const credentials = 'fc2f7c4167c36941daee1c0d9410fff2'
const apiUrl = 'https://developers.zomato.com/api/v2.1/'

function getCategories () {
  return request
    .get(apiUrl + '/categories')
    .set('user-key', credentials)
    .set('Accept', 'application/json')
    .then(categories => JSON.parse(categories.text))
    .catch(err => err)
}

module.exports = {
  getCategories
}
