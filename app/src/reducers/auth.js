import { AUTH, LOGOUT } from '../constants/actionTypes'
import AsyncStorage from '@react-native-async-storage/async-storage'

// eslint-disable-next-line import/no-anonymous-default-export
const authReducer = (state = {authData: null}, action) => {
    switch(action.type) {
        case AUTH:
            AsyncStorage.setItem('profile', JSON.stringify({...action?.data}))
            return {...state, authData: action?.data}
        case LOGOUT:
            AsyncStorage.clear()
            return {...state, authData: null}
        default:
            return state
    }
}

export default authReducer