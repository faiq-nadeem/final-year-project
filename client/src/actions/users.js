import { FETCH, UPDATE } from '../constants/actionTypes'
import * as api from '../api'

// Action Creators

export const getSingleUser = (id) => async (dispatch) => {
    try {
        const {data} = await api.fetchSingleUser(id)
        dispatch({
            type   : FETCH,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}

export const updateUser = (id, user) => async (dispatch) => {
    try {
        const {data} = await api.updatedUser(id, user)
        dispatch({
            type   : UPDATE,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}