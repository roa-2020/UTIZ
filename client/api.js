import request from 'superagent'

const baseURL = '/api/v1'

export function getCategories() {
    return request.get(baseURL + 'categories')
    .then (response => response.body)
    .catch(err => err)
}

export function getCities(city_name = "") {
    return request.get(baseURL + 'cities/' + city_name)
    .then (response => response.body[0])
    .catch(err => err)
}