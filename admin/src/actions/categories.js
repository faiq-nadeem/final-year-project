import { FETCH_ALL_CATEGORIES, CREATE_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY } from '../constants/actionTypes'
import * as api from '../api'
import {loaderStatus} from './loader'

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
        dispatch(loaderStatus(false))
    }
}

export const createCategory = (category) => async(dispatch) => {
    try {
        dispatch(loaderStatus(true))
        const {data} = await api.createCategory(category)
        dispatch({
            type   : CREATE_CATEGORY,
            payload: data
        })
        dispatch(loaderStatus(false))
    } catch (error) {
        console.log(error)
        dispatch(loaderStatus(false))
    }
}

export const updateCategory = (id, category) => async (dispatch) => {
    try {
        dispatch(loaderStatus(true))
        const {data} = await api.updatedCategory(id, category)
        dispatch({
            type   : UPDATE_CATEGORY,
            payload: data
        })
        dispatch(loaderStatus(false))
    } catch (error) {
        console.log(error)
        dispatch(loaderStatus(false))
    }
}

export const deleteCategory = (id) => async (dispatch) => {
    try {
        dispatch(loaderStatus(true))
        await api.deleteCategory(id)
        dispatch({
            type   : DELETE_CATEGORY,
            payload: id
        })
        dispatch(loaderStatus(false))
    } catch (error) {
        console.log(error)
        dispatch(loaderStatus(false))
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
        dispatch(loaderStatus(false))
        
    }
}

export const changeCategoryStatus = (id) => async (dispatch) => {
    try {
        dispatch(loaderStatus(true))
        const {data} = await api.changeCategoryStatus(id)
        dispatch({
            type   : UPDATE_CATEGORY,
            payload: data
        })
        dispatch(loaderStatus(false))
    } catch (error) {
        dispatch(loaderStatus(false))
        
    }
}