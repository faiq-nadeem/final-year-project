import { FETCH_ALL_BLOGS, CREATE_BLOG, UPDATE_BLOG, DELETE_BLOG } from '../constants/actionTypes'
import * as api from '../api'
import {loaderStatus} from './loader'

// Action Creators
export const getBlogs = () => async(dispatch) => {
    try {
        dispatch(loaderStatus(true))
        const {data} = await api.fetchBlogs()
        dispatch({
            type   : FETCH_ALL_BLOGS,
            payload: data
        })
        dispatch(loaderStatus(false))
    } catch (error) {
        console.log(error)
        dispatch(loaderStatus(false))
    }
}

export const createBlog = (blog) => async(dispatch) => {
    try {
        dispatch(loaderStatus(true))
        const {data} = await api.createBlog(blog)
        dispatch({
            type   : CREATE_BLOG,
            payload: data
        })
        dispatch(loaderStatus(false))
    } catch (error) {
        console.log(error)
        dispatch(loaderStatus(false))
    }
}

export const updateBlog = (id, blog) => async (dispatch) => {
    try {
        dispatch(loaderStatus(true))
        const {data} = await api.updatedBlog(id, blog)
        dispatch({
            type   : UPDATE_BLOG,
            payload: data
        })
        dispatch(loaderStatus(false))
    } catch (error) {
        console.log(error)
        dispatch(loaderStatus(false))
    }
}

export const deleteBlog = (id) => async (dispatch) => {
    try {
        dispatch(loaderStatus(true))
        await api.deleteBlog(id)
        dispatch({
            type   : DELETE_BLOG,
            payload: id
        })
        dispatch(loaderStatus(false))
    } catch (error) {
        console.log(error)
        dispatch(loaderStatus(false))
    }
}

export const likeBlog = (id) => async (dispatch) => {
    try {
        dispatch(loaderStatus(true))
        const {data} = await api.likeBlog(id)

        dispatch({
            type   : UPDATE_BLOG,
            payload: data
        })
        dispatch(loaderStatus(false))
    } catch (error) {
        
        dispatch(loaderStatus(false))
    }
}

export const changeBlogStatus = (id) => async (dispatch) => {
    try {
        dispatch(loaderStatus(true))
        const {data} = await api.changeBlogStatus(id)
        dispatch({
            type   : UPDATE_BLOG,
            payload: data
        })
        dispatch(loaderStatus(false))
    } catch (error) {
        
        dispatch(loaderStatus(false))
    }
}