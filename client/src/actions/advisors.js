import { FETCH_ALL_ADVISORS, FETCH_SINGLE_ADVISOR } from '../constants/actionTypes'
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
    }
}


export const getSingleAdvisor = (id) => async (dispatch) => {
    try {
        
        dispatch(loaderStatus(true))
        const {data} = await api.fetchSingleUser(id)
        dispatch({
            type   : FETCH_SINGLE_ADVISOR,
            payload: data
        })
        
        dispatch(loaderStatus(false))
    } catch (error) {
        console.log(error)
    }
}