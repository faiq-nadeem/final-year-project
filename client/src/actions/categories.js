import { FETCH_ALL, UPDATE } from '../constants/actionTypes'
import * as api from '../api'

// Action Creators
export const getCategories = () => async(dispatch) => {
    try {
        const {data} = await api.fetchCategories()
        dispatch({
            type   : FETCH_ALL,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}

export const likeCategory = (id) => async (dispatch) => {
    try {
        const {data} = await api.likeCategory(id)

        dispatch({
            type   : UPDATE,
            payload: data
        })
    } catch (error) {
        
    }
}