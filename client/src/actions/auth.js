import { AUTH } from '../constants/actionTypes'
import * as api from '../api'
import { loaderStatus } from './loader'

export const signIn = (formData, history) => async (dispatch) => {
    try {
        dispatch(loaderStatus(true))
        const {data} = await api.signIn(formData)

        dispatch({
            type:AUTH,
            data
        })

        dispatch(loaderStatus(false))
        
        if(JSON.stringify(data.message)) alert(JSON.stringify(data.message))

        else history.push('/')

    } catch (error) {
        console.log(error)
    }
}

export const signUp = (formData, history) => async (dispatch) => {
    try {
        dispatch(loaderStatus(true))
        const {data} = await api.signUp(formData)

        dispatch({
            type: AUTH,
            data
        })

        dispatch(loaderStatus(false))
        if(JSON.stringify(data.message)) alert(JSON.stringify(data.message))

        else history.push('/')
        
    } catch (error) {
        console.log(error)
    }
}