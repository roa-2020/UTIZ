import request from 'superagent'

const baseURL = '/api/v1/'

export function getCategories() {
    return request.get(baseURL + 'categories')
        .then(response => response.body)
        .catch(err => err)
}

export function getCities(city_name = "") {
    return request.get(baseURL + 'cities/' + city_name)
        .then(response => response.body[0])
        .catch(err => err)
}

export function searchCategory(category_id, city_name = "", count =  20, offset = 0) {
    const city_id = getCities(city_name).id || 71

    return request.get(baseURL + `search/${city_id}/${category_id}/${count}/${offset}`)
        .then(response => response.body)
        .catch(err => err)
}


