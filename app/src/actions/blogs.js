import { FETCH_ALL, UPDATE } from '../constants/actionTypes'
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