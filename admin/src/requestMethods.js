import axios from "axios"

const BASE_URL = 'http://localhost:5000/api'
const TOKEN = JSON.parse(localStorage.getItem('user')).accessToken
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODlmYjFkMGEzN2IwN2MwZjFhZGEzOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjg5MTUyNSwiZXhwIjoxNjM3MTUwNzI1fQ.q26b9Qnmi0x_eqNDAqg70KqfWYGIIp5Glc4viKlvOC0"

export const publicRequest = axios.create({
    baseURL:BASE_URL
})

export const userRequest = axios.create({
    baseURL:BASE_URL,
    headers: { token: `Bearer ${TOKEN}` }
})
