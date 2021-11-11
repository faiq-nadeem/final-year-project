import { FETCH_ALL_USERS, UPDATE_USER, DELETE_USER } from '../constants/actionTypes'
import * as api from '../api'
import { loaderStatus } from './loader'

// Action Creators
export const getUsers = () => async(dispatch) => {
    try {
        dispatch(loaderStatus(true))
        const {data} = await api.fetchUsers()
        dispatch({
            type   : FETCH_ALL_USERS,
            payload: data
        })
        dispatch(loaderStatus(false))
    } catch (error) {
        console.log(error)
        dispatch(loaderStatus(false))
    }
}

export const deleteUser = (id) => async (dispatch) => {
    try {
        dispatch(loaderStatus(true))
        await api.deleteUser(id)
        dispatch({
            type   : DELETE_USER,
            payload: id
        })
        dispatch(loaderStatus(false))
    } catch (error) {
        console.log(error)
        dispatch(loaderStatus(false))
    }
}

export const changeUserStatus = (id) => async (dispatch) => {
    try {
        dispatch(loaderStatus(true))
        const {data} = await api.changeUserStatus(id)
        dispatch({
            type   : UPDATE_USER,
            payload: data
        })
        dispatch(loaderStatus(false))
    } catch (error) {
        
        dispatch(loaderStatus(false))
    }
}

export const changeUserRole = (id, userRole) => async (dispatch) => {
    try {
        dispatch(loaderStatus(true))
        const {data} = await api.changeUserRole(id, userRole)
        dispatch({
            type   : UPDATE_USER,
            payload: data
        })
        dispatch(loaderStatus(false))
    } catch (error) {
        
        dispatch(loaderStatus(false))
    }
}

export const changeUserCategory = (id, userCategory) => async (dispatch) => {
    try {
        dispatch(loaderStatus(true))
        const {data} = await api.changeUserCategory(id, userCategory)
        dispatch({
            type   : UPDATE_USER,
            payload: data
        })
        dispatch(loaderStatus(false))
    } catch (error) {
        
        dispatch(loaderStatus(false))
    }
}

export const changeUserSubCategory = (id, userSubCategory) => async (dispatch) => {
    try {
        dispatch(loaderStatus(true))
        const {data} = await api.changeUserSubCategory(id, userSubCategory)
        dispatch({
            type   : UPDATE_USER,
            payload: data
        })
        dispatch(loaderStatus(false))
    } catch (error) {
        
        dispatch(loaderStatus(false))
    }
}