import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes'
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

export const createCategory = (category) => async(dispatch) => {
    try {
        const {data} = await api.createCategory(category)
        dispatch({
            type   : CREATE,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}

export const updateCategory = (id, category) => async (dispatch) => {
    try {
        const {data} = await api.updatedCategory(id, category)
        dispatch({
            type   : UPDATE,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}

export const deleteCategory = (id) => async (dispatch) => {
    try {
        await api.deleteCategory(id)
        dispatch({
            type   : DELETE,
            payload: id
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