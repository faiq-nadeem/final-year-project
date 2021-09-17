import { FETCH_ALL, UPDATE } from '../constants/actionTypes'
import * as api from '../api'

// Action Creators
export const getSubCategories = () => async(dispatch) => {
    try {
        const {data} = await api.fetchSubCategories()
        dispatch({
            type   : FETCH_ALL,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}

export const likeSubCategory = (id) => async (dispatch) => {
    try {
        const {data} = await api.likeSubCategory(id)

        dispatch({
            type   : UPDATE,
            payload: data
        })
    } catch (error) {
        
    }
}