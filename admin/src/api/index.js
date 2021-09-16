import axios from 'axios'

const API = axios.create({baseURL: 'http://localhost:5000'})

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req
})


export const fetchBlogs  = () => API.get('/blogs')
export const createBlog  = (newBlog) => API.post('/blogs', newBlog)
export const updatedBlog = (id, updatedBlog) => API.patch(`/blogs/${id}`, updatedBlog)
export const deleteBlog  = (id) => API.delete(`/blogs/${id}`)
export const likeBlog    = (id) => API.patch(`/blogs/${id}/likeBlog`)

export const signIn = (formData) => API.post('/user/signIn', formData)
export const signUp = (formData) => API.post('/user/signUp', formData)