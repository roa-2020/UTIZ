const request = require('superagent')
const credentials = 'fc2f7c4167c36941daee1c0d9410fff2'
const apiUrl = 'https://developers.zomato.com/api/v2.1/'
const nzId = 148

function getCategories () {
  return request
    .get(apiUrl + '/categories')
    .set('user-key', credentials)
    .set('Accept', 'application/json')
    .then(results => JSON.parse(results.text))
    .catch(err => err)
}

function getCity (city_name) {
  return request
    .get(apiUrl + '/cities?q=' + city_name)
    .set('user-key', credentials)
    .set('Accept', 'application/json')
    .then(results =>  {
      const filteredResults = []
      results.body.location_suggestions.map(city => {
        if (city.country_id === nzId){
          filteredResults.push(city)
        }
      })
      return filteredResults
    })
    .catch(err => err)
}

function getCuisines (city_id) {
  return request
    .get(apiUrl + '/cuisines?city_id=' + city_id)
    .set('user-key', credentials)
    .set('Accept', 'application/json')
    .then(results =>  results.body)
    .catch(err => err)
}

module.exports = {
  getCategories,
  getCity,
  getCuisines
}
