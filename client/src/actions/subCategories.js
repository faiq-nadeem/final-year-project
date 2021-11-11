import { FETCH_ALL_SUBCATEGORIES, UPDATE_SUBCATEGORY } from '../constants/actionTypes'
import * as api from '../api'
import { loaderStatus } from './loader'

// Action Creators
export const getSubCategories = () => async(dispatch) => {
    try {
        
        dispatch(loaderStatus(true))
        const {data} = await api.fetchSubCategories()

        dispatch({
            type   : FETCH_ALL_SUBCATEGORIES,
            payload: data
        })
        
        dispatch(loaderStatus(false))
    } catch (error) {
        console.log(error)
    }
}

export const likeSubCategory = (id) => async (dispatch) => {
    try {
        
        dispatch(loaderStatus(true))
        const {data} = await api.likeSubCategory(id)

        dispatch({
            type   : UPDATE_SUBCATEGORY,
            payload: data
        })
        
        dispatch(loaderStatus(false))
    } catch (error) {
        
    }
}