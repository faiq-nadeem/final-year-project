import { FETCH_SINGLE_USER, UPDATE_USER } from '../constants/actionTypes'
import * as api from '../api'
import { loaderStatus } from './loader'

// Action Creators
export const getSingleUser = (id) => async (dispatch) => {
    try {
        
        dispatch(loaderStatus(true))
        const {data} = await api.fetchSingleUser(id)
        dispatch({
            type   : FETCH_SINGLE_USER,
            payload: data
        })
        
        dispatch(loaderStatus(false))
    } catch (error) {
        console.log(error)
    }
}

export const updateUser = (id, user) => async (dispatch) => {
    try {
        dispatch(loaderStatus(true))
        const {data} = await api.updatedUser(id, user)
        // alert(JSON.stringify(data))
        dispatch({
            type   : UPDATE_USER,
            payload: data
        })
        
        dispatch(loaderStatus(false))
    } catch (error) {
        console.log(error)
    }
}

export const setUserKey = (id, userKey) => async (dispatch) => {
    try {
        
        dispatch(loaderStatus(true))
        const {data} = await api.setUserKey(id, {userKey:userKey})
        dispatch({
            type   : UPDATE_USER,
            payload: data
        })
        
        dispatch(loaderStatus(false))
    } catch (error) {
        console.log(error)
    }
}

export const addUserCredits = (id, credits) => async (dispatch) => {
    try {
        
        dispatch(loaderStatus(true))
        const {data} = await api.addUserCredits(id, {credits:credits})
        dispatch({
            type   : UPDATE_USER,
            payload: data
        })
        
        dispatch(loaderStatus(false))
    } catch (error) {
        console.log(error)
    }
}