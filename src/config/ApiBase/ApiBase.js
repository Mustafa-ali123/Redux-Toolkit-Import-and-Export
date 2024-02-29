import axios from 'axios'

let apiHandling = axios.create({
    baseURL: 'http://localhost:5000/api/'
})
let DeployApiHandling = axios.create({
    baseURL: 'https://real-pear-binturong-wrap.cyclic.app/api'
})

const GetLimit = (endPoint) => {
    return apiHandling.get(`${endPoint}?limit=50`)
}
const Get = (endPoint) => {
    return apiHandling.get(`${endPoint}`)
}
const GetData = (endPoint) => {
    return DeployApiHandling.get(`${endPoint}`)
}
const GetById = (endPoint, id) => {
    return apiHandling.get(`${endPoint}/${id}`)
}
const Put = (endPoint, body) => {
    return apiHandling.put(`${endPoint}`, body)
}

const Post = (endPoint, body) => {
    return apiHandling.post(`${endPoint}`, body)
}

const Delete = (endPoint, id) => {
    return apiHandling.delete(`${endPoint}`, id)
}

export { Get, GetData,GetLimit, Put, Post, GetById, Delete }