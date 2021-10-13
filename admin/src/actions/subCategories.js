import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes'
import * as api from '../api'
import { getCategories } from './categories'

// Action Creators
export const getSubCategories = () => async(dispatch) => {
    try {
        const {data} = await api.fetchSubCategories()
        dispatch({
            type   : FETCH_ALL,
            payload: data
        })
        // dispatch(getCategories())
    } catch (error) {
        console.log(error)
    }
}

export const createSubCategory = (subCategory) => async(dispatch) => {
    try {
        const {data} = await api.createSubCategory(subCategory)
        dispatch({
            type   : CREATE,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}

export const updateSubCategory = (id, subCategory) => async (dispatch) => {
    try {
        const {data} = await api.updatedSubCategory(id, subCategory)
        dispatch({
            type   : UPDATE,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}

export const deleteSubCategory = (id) => async (dispatch) => {
    try {
        await api.deleteSubCategory(id)
        dispatch({
            type   : DELETE,
            payload: id
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

export const changeSubCategoryStatus = (id) => async (dispatch) => {
    try {
        const {data} = await api.changeSubCategoryStatus(id)
        dispatch({
            type   : UPDATE,
            payload: data
        })
    } catch (error) {
        
    }
}