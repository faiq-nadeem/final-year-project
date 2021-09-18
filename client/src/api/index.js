import axios from 'axios'

const API = axios.create({baseURL: 'http://localhost:5000'})

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req
})

export const signIn = (formData) => API.post('/users/signIn', formData)
export const signUp = (formData) => API.post('/users/signUp', formData)

export const fetchBlogs = () => API.get('/blogs')
export const likeBlog   = (id) => API.patch(`/blogs/${id}/likeBlog`)

export const fetchCategories = () => API.get('/categories')
export const likeCategory    = (id) => API.patch(`/categories/${id}/likeCategory `)

export const fetchSubCategories = () => API.get('/subCategories')
export const likeSubCategory    = (id) => API.patch(`/subCategories/${id}/likeSubCategory `)

export const fetchSingleUser = (id) => API.get('/users/')
export const updatedUser = (id, updatedUser) => API.patch(`/users/${id}`, updatedUser)