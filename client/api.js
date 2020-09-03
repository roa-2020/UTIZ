import request from 'superagent'

const baseURL = '/api/v1'

export function getCategories() {
    return request.get(baseURL + 'categories')
    .then (response => response.body)
    .catch(err => err)
}