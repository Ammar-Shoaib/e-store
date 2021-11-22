import axios from "axios"

const BASE_URL = 'http://localhost:5000/api'
// const TOKEN = JSON.parse(localStorage.getItem('user')).accessToken
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODlmYjFkMGEzN2IwN2MwZjFhZGEzOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjc3NDMzNywiZXhwIjoxNjM3MDMzNTM3fQ.26uBof596vn-kXyMw0gSppGMaJVEZPeZByYbqVbdjQs"

export const publicRequest = axios.create({
    baseURL:BASE_URL
})

export const userRequest = axios.create({
    baseURL:BASE_URL,
    headers: { token: `Bearer ${TOKEN}` }
})
