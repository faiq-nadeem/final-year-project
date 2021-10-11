import { AUTH } from '../constants/actionTypes'
import * as api from '../api'

import { loaderStatus } from './loader'

export const signIn = (formData) => async (dispatch) => {
    
    try {

        dispatch(loaderStatus({ status: true }))
        
        const {data} = await api.signIn(formData)

        dispatch({
            type:AUTH,
            data
        })

        dispatch(loaderStatus({ status: false }))
        
        if(JSON.stringify(data.message)) alert(JSON.stringify(data.message))

    } catch (error) {
        console.log(error)
    }
}

export const signUp = (formData) => async (dispatch) => {
    try {
        dispatch(loaderStatus({ status: true }))

        const {data} = await api.signUp(formData)

        dispatch({
            type: AUTH,
            data
        })

        dispatch(loaderStatus({ status: false }))
        
        if(JSON.stringify(data.message)) alert(JSON.stringify(data.message))
        
    } catch (error) {
        console.log(error)
    }
}