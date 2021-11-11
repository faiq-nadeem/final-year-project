import {  FETCH_ALL_ADVISORS } from '../constants/actionTypes'
import * as api from '../api'
import { loaderStatus } from './loader'

// Action Creators

export const getAdvisors = () => async(dispatch) => {
    try {
        dispatch(loaderStatus(true))
        const {data} = await api.fetchAdvisors()
        dispatch({
            type   : FETCH_ALL_ADVISORS,
            payload: data
        })
        dispatch(loaderStatus(false))
    } catch (error) {
        console.log(error)
        dispatch(loaderStatus(false))
    }
}