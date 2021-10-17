import { FETCH_ALL_SUBCATEGORIES, CREATE_SUBCATEGORY, UPDATE_SUBCATEGORY, DELETE_SUBCATEGORY } from '../constants/actionTypes'
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
        dispatch(loaderStatus(false))
    }
}

export const createSubCategory = (subCategory) => async(dispatch) => {
    try {
        dispatch(loaderStatus(true))
        const {data} = await api.createSubCategory(subCategory)
        dispatch({
            type   : CREATE_SUBCATEGORY,
            payload: data
        })
        dispatch(loaderStatus(false))
    } catch (error) {
        console.log(error)
        dispatch(loaderStatus(false))
    }
}

export const updateSubCategory = (id, subCategory) => async (dispatch) => {
    try {
        dispatch(loaderStatus(true))
        const {data} = await api.updatedSubCategory(id, subCategory)
        dispatch({
            type   : UPDATE_SUBCATEGORY,
            payload: data
        })
        dispatch(loaderStatus(false))
    } catch (error) {
        console.log(error)
        dispatch(loaderStatus(false))
    }
}

export const deleteSubCategory = (id) => async (dispatch) => {
    try {
        dispatch(loaderStatus(true))
        await api.deleteSubCategory(id)
        dispatch({
            type   : DELETE_SUBCATEGORY,
            payload: id
        })
        dispatch(loaderStatus(false))
    } catch (error) {
        console.log(error)
        dispatch(loaderStatus(false))
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
        
        dispatch(loaderStatus(false))
    }
}

export const changeSubCategoryStatus = (id) => async (dispatch) => {
    try {
        dispatch(loaderStatus(true))
        const {data} = await api.changeSubCategoryStatus(id)
        dispatch({
            type   : UPDATE_SUBCATEGORY,
            payload: data
        })
        dispatch(loaderStatus(false))
    } catch (error) {
        
        dispatch(loaderStatus(false))
    }
}