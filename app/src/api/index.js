import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const API = axios.create({ baseURL: 'https://skill-me.herokuapp.com' });

const retriveUserProfile = async () => {
    const userProfile = await AsyncStorage.getItem('profile');
    return JSON.parse(userProfile)
}

// API.interceptors.request.use((req) => {
//     if (AsyncStorage.getItem('profile')) {
//         var userProfile = retriveUserProfile()
//         req.headers.Authorization = userProfile.token
//     }
//     return req
// })

export const signIn = (formData) => API.post('/users/signIn', formData)
export const signUp = (formData) => API.post('/users/signUp', formData)

export const fetchBlogs = () => API.get('/blogs')
export const likeBlog   = (id) => API.patch(`/blogs/${id}/likeBlog`)

export const fetchCategories = () => API.get('/categories')
export const likeCategory    = (id) => API.patch(`/categories/${id}/likeCategory `)

export const fetchSubCategories = () => API.get('/subCategories')
export const likeSubCategory    = (id) => API.patch(`/subCategories/${id}/likeSubCategory `)

export const fetchUsers        = () => API.get('/users')
export const fetchAdvisors     = () => API.get('/users/advisors')
export const fetchInterviewers = () => API.get('/users/interviewers')
export const fetchSingleUser   = (id) => API.get(`/users/${id}`)
export const updatedUser       = (id, updatedUser) => API.patch(`/users/${id}`, updatedUser)

export const setUserKey     = (id, setUserKey) => API.patch(`/users/${id}/setUserKey`, setUserKey)
export const addUserCredits = (id, addUserCredits) => API.patch(`/users/${id}/addUserCredits`, addUserCredits)