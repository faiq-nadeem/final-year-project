import axios from 'axios'

const API = axios.create({ baseURL: 'https://skill-me.herokuapp.com' })

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req
})

export const signIn = (formData) => API.post('/users/signIn', formData)
export const signUp = (formData) => API.post('/users/signUp', formData)

export const fetchBlogs       = () => API.get('/blogs')
export const createBlog       = (newBlog) => API.post('/blogs', newBlog)
export const updatedBlog      = (id, updatedBlog) => API.patch(`/blogs/${id}`, updatedBlog)
export const deleteBlog       = (id) => API.delete(`/blogs/${id}`)
export const likeBlog         = (id) => API.patch(`/blogs/${id}/likeBlog`)
export const changeBlogStatus = (id) => API.patch(`/blogs/${id}/changeBlogStatus `)

export const fetchCategories      = () => API.get('/categories')
export const createCategory       = (newCategory) => API.post('/categories', newCategory )
export const updatedCategory      = (id, updatedCategory) => API.patch(`/categories/${id}`, updatedCategory )
export const deleteCategory       = (id) => API.delete(`/categories/${id}`)
export const likeCategory         = (id) => API.patch(`/categories/${id}/likeCategory `)
export const changeCategoryStatus = (id) => API.patch(`/categories/${id}/changeCategoryStatus `)

export const fetchSubCategories      = () => API.get('/subCategories')
export const createSubCategory       = (newSubCategory) => API.post('/subCategories', newSubCategory )
export const updatedSubCategory      = (id, updatedSubCategory) => API.patch(`/subCategories/${id}`, updatedSubCategory )
export const deleteSubCategory       = (id) => API.delete(`/subCategories/${id}`)
export const likeSubCategory         = (id) => API.patch(`/subCategories/${id}/likeSubCategory `)
export const changeSubCategoryStatus = (id) => API.patch(`/subCategories/${id}/changeSubCategoryStatus `)

export const fetchUsers            = () => API.get('/users')
export const fetchAdvisors         = () => API.get('/users/advisors')
export const fetchInterviewers     = () => API.get('/users/interviewers')
export const deleteUser            = (id) => API.delete(`/users/${id}`)
export const changeUserStatus      = (id) => API.patch(`/users/${id}/changeUserStatus `)
export const changeUserRole        = (id, userRole) => API.patch(`/users/${id}/changeUserRole`, userRole)
export const changeUserCategory    = (id, userCategory) => API.patch(`/users/${id}/changeUserCategory`, userCategory)
export const changeUserSubCategory = (id, userSubCategory) => API.patch(`/users/${id}/changeUserSubCategory`, userSubCategory)