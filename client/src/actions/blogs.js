import { FETCH_ALL_BLOGS, UPDATE_BLOG } from '../constants/actionTypes'
import * as api from '../api'
import { loaderStatus } from './loader'

// Action Creators
export const getBlogs = () => async(dispatch) => {
    try {

        dispatch(loaderStatus(true))
        const {data} = await api.fetchBlogs()

        dispatch(loaderStatus(false))
        dispatch({
            type   : FETCH_ALL_BLOGS,
            payload: data
        })

    } catch (error) {
        console.log(error)
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
        
    }
}