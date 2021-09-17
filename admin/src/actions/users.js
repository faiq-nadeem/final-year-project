import { FETCH_ALL, UPDATE, DELETE } from '../constants/actionTypes'
import * as api from '../api'

// Action Creators
export const getUsers = () => async(dispatch) => {
    try {
        const {data} = await api.fetchUsers()
        dispatch({
            type   : FETCH_ALL,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}

export const getAdvisors = () => async(dispatch) => {
    try {
        const {data} = await api.fetchAdvisors()
        dispatch({
            type   : FETCH_ALL,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}

export const deleteUser = (id) => async (dispatch) => {
    try {
        await api.deleteUser(id)
        dispatch({
            type   : DELETE,
            payload: id
        })
    } catch (error) {
        console.log(error)
    }
}

export const changeUserStatus = (id) => async (dispatch) => {
    try {
        const {data} = await api.changeUserStatus(id)
        dispatch({
            type   : UPDATE,
            payload: data
        })
    } catch (error) {
        
    }
}

export const changeUserRole = (id) => async (dispatch) => {
    try {
        const {data} = await api.changeUserRole(id)
        dispatch({
            type   : UPDATE,
            payload: data
        })
    } catch (error) {
        
    }
}