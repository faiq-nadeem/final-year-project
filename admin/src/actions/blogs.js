import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes'
import * as api from '../api'

// Action Creators
export const getBlogs = () => async(dispatch) => {
    try {
        const {data} = await api.fetchBlogs()
        dispatch({
            type   : FETCH_ALL,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}

export const createBlog = (blog) => async(dispatch) => {
    try {
        const {data} = await api.createBlog(blog)
        dispatch({
            type   : CREATE,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}

export const updateBlog = (id, blog) => async (dispatch) => {
    try {
        const {data} = await api.updatedBlog(id, blog)
        dispatch({
            type   : UPDATE,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}

export const deleteBlog = (id) => async (dispatch) => {
    try {
        await api.deleteBlog(id)
        dispatch({
            type   : DELETE,
            payload: id
        })
    } catch (error) {
        console.log(error)
    }
}

export const likeBlog = (id) => async (dispatch) => {
    try {
        const {data} = await api.likeBlog(id)

        dispatch({
            type   : UPDATE,
            payload: data
        })
    } catch (error) {
        
    }
}