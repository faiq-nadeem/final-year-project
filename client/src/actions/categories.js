import { FETCH_ALL_CATEGORIES, UPDATE_CATEGORY } from '../constants/actionTypes'
import * as api from '../api'
import { loaderStatus } from './loader'

// Action Creators
export const getCategories = () => async(dispatch) => {
    try {
        
        dispatch(loaderStatus(true))
        const {data} = await api.fetchCategories()

        dispatch({
            type   : FETCH_ALL_CATEGORIES,
            payload: data
        })
        
        dispatch(loaderStatus(false))
    } catch (error) {
        console.log(error)
    }
}

export const likeCategory = (id) => async (dispatch) => {
    try {
        
        dispatch(loaderStatus(true))
        const {data} = await api.likeCategory(id)

        dispatch({
            type   : UPDATE_CATEGORY,
            payload: data
        })
        
        dispatch(loaderStatus(false))
    } catch (error) {
        
    }
}